import * as React from 'react';
import classNames from 'classnames';
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
               <div className={classNames('player-rating',
 {
                'positive': props.rating.rating > 0,
                'negative': props.rating.rating < 0
 })}>
                   {props.rating.rating}
               </div>
               <Button bsStyle="success" onClick={() => props.upVote(props.rating)}>
                   <Glyphicon glyph="thumbs-up"/>
               </Button>
               <Button bsStyle="danger" onClick={() => props.downVote(props.rating)}>
                   <Glyphicon glyph="thumbs-down"/>
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