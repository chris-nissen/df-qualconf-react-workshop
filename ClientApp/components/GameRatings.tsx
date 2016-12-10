import * as React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { ApplicationState } from '../store';
import * as GameRatingsStore from '../store/GameRatings';

type GameRatingsProps = GameRatingsStore.GameRatingsState & typeof GameRatingsStore.actionCreators;

class GameRatings extends React.Component<GameRatingsProps, void> {
	public render() {
		return <div>
			<h1>{this.props.game.awayTeam.name + ' at ' + this.props.game.homeTeam.name}</h1>
		</div>;
	}
}

// Wire up the React component to the Redux store
export default connect(
	(state: ApplicationState) => state.gameRatings, // Selects which state properties are merged into the component's props
	GameRatingsStore.actionCreators // Selects which action creators are merged into the component's props
)(GameRatings);