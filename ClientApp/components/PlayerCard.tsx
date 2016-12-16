import * as React from 'react';
import classNames from 'classnames';
import { Button, Glyphicon } from 'react-bootstrap';
import { Player, Rating } from 'models';
import { PlayerPicture } from 'components';

interface PlayerCardProps {
    player: Player;
}

export function PlayerCard(props: PlayerCardProps) {
    return <div className="player-card">
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