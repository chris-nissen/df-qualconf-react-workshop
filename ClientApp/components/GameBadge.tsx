import React from 'react';
import { Game } from 'models';
import { TeamLogo } from 'components';
import moment from 'moment';

interface GameProps {
	game: Game;
	navigateToGame: (game: Game) => void;
}

export function GameBadge(props: GameProps) {
	return <div className="game-badge" onClick={() => props.navigateToGame(props.game)}>
		<TeamLogo team={props.game.awayTeam} />
		<div className="game-details">
			<div className="matchup">
				{props.game.awayTeam.name} at {props.game.homeTeam.name}
			</div>
			<div className="date-and-time">
				{moment(props.game.date).format('MMMM D, h:mm a')}
			</div>
		</div>
		<TeamLogo team={props.game.homeTeam} />
	</div>;
}