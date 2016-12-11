import React from 'react';
import { Game } from 'models';
import TeamBadge from './TeamBadge';
import moment from 'moment';

interface GameProps {
	game: Game;
	navigateToGame: (game: Game) => void;
}

export default class GameBadge extends React.Component<GameProps, void> {
	render() {
		const awayLogoUrl = require(`../images/team-logos/${this.props.game.awayTeam.name}.png`) as string;
		const homeLogoUrl = require(`../images/team-logos/${this.props.game.homeTeam.name}.png`) as string;

		return <div className="game-badge" onClick={() => this.props.navigateToGame(this.props.game)}>
			       <img src={awayLogoUrl}/>
			       <div className="game-details">
				       <div className="matchup">
					       {this.props.game.awayTeam.name} at {this.props.game.homeTeam.name}
				       </div>
				       <div className="date-and-time">
					       {moment(this.props.game.date).format('MMMM D, h:mm a')}
				       </div>
						 </div>
						 <img src={homeLogoUrl} />
		       </div>;
	}
}