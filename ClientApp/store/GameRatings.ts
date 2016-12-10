import { Action, Reducer, ThunkAction } from 'redux';
import { Game } from 'models';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface GameRatingsState {
	game: Game;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

interface NavigateAction {
	type: string;
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = NavigateAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
const initialState: GameRatingsState = {
	game: null
}

export const reducer: Reducer<GameRatingsState> = (state: GameRatingsState, action: KnownAction) => {
	switch (action.type) {
	}

	// For unrecognized actions (or in cases where actions have no effect), must return the existing state
	//  (or default initial state if none was supplied)
	return state || initialState;
};
