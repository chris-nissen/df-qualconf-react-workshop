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

export class PlayerCard extends React.Component<PlayerCardProps, void> {
	public render() {
		return <div className="player-card">
						       <div className="player-rating">
				       {this.props.rating.rating}
			       </div>
			       <Button bsStyle="success" onClick={() => this.props.upVote(this.props.rating)}>
				       <Glyphicon glyph="thumbs-up"/>
			       </Button>
			       <Button bsStyle="danger">
				       <Glyphicon glyph="thumbs-down" onClick={() => this.props.downVote(this.props.rating)}/>
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
		       </div>;
	}
}