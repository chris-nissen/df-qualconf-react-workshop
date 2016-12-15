import React from 'react';
import { Player } from 'models';

interface PlayerPictureProps {
	player: Player;
}

export function PlayerPicture(props: PlayerPictureProps) {
	const logoUrl = require(`../images/player-pictures/${props.player.name}.jpg`) as string;
	return <img className="player-picture" src={logoUrl}/>;
}