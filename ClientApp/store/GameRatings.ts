import { Action, Reducer, ThunkAction } from 'redux';
import { AppThunkAction } from './';
import _ from 'lodash';
import { Game, Rating, Player } from 'models';
import { fetchHardCodedGame } from '../hardCodedData';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface GameRatingsState {
	game: Game;
	ratings: Rating[];
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

interface BackToScheduleAction {
	type: 'BACK_TO_SCHEDULE';
}

interface FetchedGameAction {
	type: 'FETCHED_GAME';
	game: Game;
	newRatings: Rating[];
}

interface UpVoteAction {
	type: 'UPVOTE';
	rating: Rating;
}

interface DownVoteAction {
	type: 'DOWNVOTE';
	rating: Rating;
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = BackToScheduleAction | FetchedGameAction | UpVoteAction | DownVoteAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
	fetchGame: (gameId: number): AppThunkAction<FetchedGameAction> => (dispatch, getState) => {
		const game = fetchHardCodedGame(gameId);

		const existingRatingsForGame = getState().gameRatings.ratings.filter(r => r.gameId === gameId);
		const playersInGame = game.awayTeam.players.concat(game.homeTeam.players);
		const playersWithoutExistingRatingForGame =
			playersInGame.filter(p => existingRatingsForGame.filter(r => r.playerId === p.id).length === 0);
		const newRatings: Rating[] = playersWithoutExistingRatingForGame.map(p => {
			return {
				gameId: gameId,
				playerId: p.id,
				rating: 0
			};
		});

		dispatch({ type: 'FETCHED_GAME', game: game, newRatings: newRatings });
	},

	upVote: (rating: Rating) => ({ type: 'UPVOTE', rating: rating } as UpVoteAction),
	downVote: (rating: Rating) => ({ type: 'DOWNVOTE', rating: rating } as DownVoteAction),
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
const initialState: GameRatingsState = {
	game: null,
	ratings: []
};
export const reducer: Reducer<GameRatingsState> = (state: GameRatingsState, action: KnownAction) => {
	switch (action.type) {
	case 'FETCHED_GAME':
		return Object.assign({},
			state,
			{
				game: action.game,
				ratings: state.ratings.concat(action.newRatings)
			});

	case 'UPVOTE':
	{
		const newRatings = adjustRating(state.ratings, action.rating, 1);

		return Object.assign({},
			state,
			{
				ratings: newRatings
			});
	}

	case 'DOWNVOTE':
	{
		const newRatings = adjustRating(state.ratings, action.rating, -1);

		return Object.assign({},
			state,
			{
				ratings: newRatings
			});
	}
	}

	// For unrecognized actions (or in cases where actions have no effect), must return the existing state
	//  (or default initial state if none was supplied)
	return state || initialState;
};

function adjustRating(ratings: Rating[], rating: Rating, adjustment: number): Rating[] {
	const ratingToAdjust = _.remove(ratings, r => r.gameId === rating.gameId && r.playerId === rating.playerId)[0];
	const newRating: Rating = {
		gameId: ratingToAdjust.gameId,
		playerId: ratingToAdjust.playerId,
		rating: ratingToAdjust.rating + adjustment
	};

	return ratings.concat(newRating);
}