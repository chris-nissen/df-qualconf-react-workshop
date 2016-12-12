import * as React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { ApplicationState } from '../store';
import * as GameRatingsStore from '../store/GameRatings';
import TeamLogo from './TeamLogo';
import moment from 'moment';

type GameRatingsProps = GameRatingsStore.GameRatingsState
	& typeof GameRatingsStore.actionCreators
	& { params: { id: string } };

class GameRatings extends React.Component<GameRatingsProps, void> {
	public render() {
		if (!this.props.game) return null;

		return <div className="game-ratings">
			      <div className="header">
				<TeamLogo team={this.props.game.awayTeam}/>
				<div>
				<div className="matchup">
			{this.props.game.awayTeam.name + ' at ' + this.props.game.homeTeam.name}
					</div>
					<div className="date-and-time">
						{moment(this.props.game.date).format('MMMM D, h:mm a')}
						</div>
					</div>
				<TeamLogo team={this.props.game.homeTeam}/>
				</div>
		       </div>;
	}

	componentWillMount(): void {
		this.props.fetchGame(parseInt(this.props.params.id));
	}
}

// Wire up the React component to the Redux store
export default connect(
	(state: ApplicationState) => state.gameRatings, // Selects which state properties are merged into the component's props
	GameRatingsStore.actionCreators // Selects which action creators are merged into the component's props
)(GameRatings);