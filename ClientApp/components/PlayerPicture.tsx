import React from 'react';
import { Player } from 'models';

interface PlayerPictureProps {
	player: Player;
}

export class PlayerPicture extends React.Component<PlayerPictureProps, void> {
	render() {
		const logoUrl = require(`../images/player-pictures/${this.props.player.name}.jpg`) as string;

		return <img className="player-picture" src={logoUrl}/>;
	}
}