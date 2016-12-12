import React from 'react';
import { Game } from 'models';
import TeamLogo from './TeamLogo';
import moment from 'moment';

interface GameProps {
	game: Game;
	navigateToGame: (game: Game) => void;
}

export default class GameBadge extends React.Component<GameProps, void> {
	render() {
		return <div className="game-badge" onClick={() => this.props.navigateToGame(this.props.game)}>
			       <TeamLogo team={this.props.game.awayTeam}/>
			       <div className="game-details">
				       <div className="matchup">
					       {this.props.game.awayTeam.name} at {this.props.game.homeTeam.name}
				       </div>
				       <div className="date-and-time">
					       {moment(this.props.game.date).format('MMMM D, h:mm a')}
				       </div>
						 </div>
						 <TeamLogo team={this.props.game.homeTeam}/>
		       </div>;
	}
}