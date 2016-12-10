import React from 'react';
import { Game } from 'models';
import TeamBadge from './TeamBadge';

interface GameProps {
	game: Game;
	navigateToGame: (game: Game) => void;
}

export default class GameBadge extends React.Component<GameProps, void> {
	render() {
		return <div className="game" onClick={() => this.props.navigateToGame(this.props.game)}>
			       <TeamBadge team={this.props.game.awayTeam}/>
			       <span>at</span>
			       <TeamBadge team={this.props.game.homeTeam}/>
		       </div>;
	}
}