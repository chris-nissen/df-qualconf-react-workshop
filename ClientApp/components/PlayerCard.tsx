import * as React from 'react';
import { Player } from 'models';

interface PlayerCardProps {
	player: Player;
}

export class PlayerCard extends React.Component<PlayerCardProps, void> {
	public render() {
		return <div className="player-card">
			{this.props.player.name}
		</div>;
	}
}