import * as React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { ApplicationState } from '../store';
import * as ScheduleStore from '../store/Schedule';
import GameBadge from './GameBadge';
import { Game } from 'models';

type ScheduleProps = ScheduleStore.ScheduleState & typeof ScheduleStore.actionCreators;

class Schedule extends React.Component<ScheduleProps, void> {
	public render() {
		return <div>
			<h1>Oilers Upcoming Schedule</h1>
			{this.props.games.map(game => <GameBadge key={game.id} game={game} navigateToGame={this.navigateToGame.bind(this)} />)}
		</div>;
	}

	navigateToGame(game: Game) {
		browserHistory.push('/game?id=' + game.id);
	}

	componentWillMount(): void {
		this.props.fetchSchedule();
	}
}

// Wire up the React component to the Redux store
export default connect(
	(state: ApplicationState) => state.schedule, // Selects which state properties are merged into the component's props
	ScheduleStore.actionCreators // Selects which action creators are merged into the component's props
)(Schedule);