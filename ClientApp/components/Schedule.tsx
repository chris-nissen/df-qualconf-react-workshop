import * as React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { ApplicationState } from 'store';
import * as ScheduleStore from '../store/Schedule';
import { GameBadge } from 'components';
import { Game } from 'models';
import { Row, Col } from 'react-bootstrap';

type ScheduleProps = ScheduleStore.ScheduleState & typeof ScheduleStore.actionCreators;

class Schedule extends React.Component<ScheduleProps, void> {
	public render() {
		return <div className="schedule">
			<h1>Oilers Upcoming Schedule</h1>
			<Row>
				<Col xs={6}>
					{this.props.games.map(game => <GameBadge key={game.id} game={game} navigateToGame={this.navigateToGame.bind(this)} />)}
					</Col>
				</Row>
		</div>;
	}

	navigateToGame(game: Game) {
		browserHistory.push('/game/' + game.id);
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