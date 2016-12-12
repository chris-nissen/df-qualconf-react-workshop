import * as React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { Player, Rating } from 'models';
import { PlayerPicture } from 'components';

interface PlayerCardProps {
	player: Player;
	rating: Rating;
}

export class PlayerCard extends React.Component<PlayerCardProps, void> {
	public render() {
		return <div className="player-card">
			       <Button bsStyle="success">
				       <Glyphicon glyph="thumbs-up"/>
			       </Button>
			       <Button bsStyle="danger">
				       <Glyphicon glyph="thumbs-down"/>
			       </Button>
			       <div className="player-details">
				       <PlayerPicture player={this.props.player}/>
				       <div>
					       <div className="player-name">
						       {this.props.player.name}
					       </div>
					       <div className="player-number">
						       #{this.props.player.number}
					       </div>
				       </div>
			       </div>
			       <div className="player-rating">
				       {this.props.rating.rating}
			       </div>
		       </div>;
	}
}