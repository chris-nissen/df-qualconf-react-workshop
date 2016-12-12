import { Action, Reducer, ThunkAction } from 'redux';
import { AppThunkAction } from './';
import { Game, Rating } from 'models';
import { fetchHardCodedGame } from '../hardCodedData';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface GameRatingsState {
	game: Game;
	ratings: Rating[]
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
	newRatings: Rating[]
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = BackToScheduleAction | FetchedGameAction;

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
	}
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
const initialState: GameRatingsState = {
	game: null,
	ratings: []
}

export const reducer: Reducer<GameRatingsState> = (state: GameRatingsState, action: KnownAction) => {
	switch (action.type) {		
		case 'FETCHED_GAME':
			return Object.assign({}, state, {
				game: action.game,
				ratings: state.ratings.concat(action.newRatings)
			});
	}

	// For unrecognized actions (or in cases where actions have no effect), must return the existing state
	//  (or default initial state if none was supplied)
	return state || initialState;
};
