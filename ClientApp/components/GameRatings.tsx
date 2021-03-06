import * as React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { ApplicationState } from '../store';
import * as GameRatingsStore from '../store/GameRatings';
import { Roster, TeamLogo } from 'components';
import moment from 'moment';
import { Row, Col } from 'react-bootstrap';

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
			       <Row>
				       <Col xs={6}>
				       </Col>
				       <Col xs={6}>
				       </Col>
			       </Row>
		       </div>;
	}

	componentWillMount(): void {
		this.props.fetchGame(parseInt(this.props.params.id));
	}
}

export default connect(
	(state: ApplicationState) => state.gameRatings, 
	GameRatingsStore.actionCreators 
)(GameRatings);