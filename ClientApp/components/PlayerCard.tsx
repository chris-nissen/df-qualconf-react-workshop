import * as React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { Player, Rating } from 'models';
import { PlayerPicture } from 'components';

interface PlayerCardProps {
	player: Player;
	rating: Rating;
	upVote: (rating: Rating) => void;
	downVote: (rating: Rating) => void;
}

export function PlayerCard(props: PlayerCardProps) {
	return <div className="player-card">
		       <div className="player-rating">
			       {props.rating.rating}
		       </div>
		       <Button bsStyle="success" onClick={() => props.upVote(props.rating)}>
			       <Glyphicon glyph="thumbs-up"/>
		       </Button>
		       <Button bsStyle="danger">
			       <Glyphicon glyph="thumbs-down" onClick={() => props.downVote(props.rating)}/>
		       </Button>
		       <div className="player-details">
			       <PlayerPicture player={props.player}/>
			       <div>
				       <div className="player-name">
					       {props.player.name}
				       </div>
				       <div className="player-number">
					       #{props.player.number}
				       </div>
			       </div>
		       </div>
	       </div>;
}