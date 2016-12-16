import React from 'react';
import { Game } from 'models';
import { TeamLogo } from 'components';
import moment from 'moment';

interface GameProps {
    game: Game;
}

export function GameBadge(props: GameProps) {
    return <div className="game-badge">
               <div className="game-details">
                   <div className="matchup">
                       {props.game.awayTeam.name} at {props.game.homeTeam.name}
                   </div>
                   <div className="date-and-time">
                       {moment(props.game.date).format('MMMM D, h:mm a')}
                   </div>
               </div>
           </div>;
}