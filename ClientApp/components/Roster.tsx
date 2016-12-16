import * as React from 'react';
import { Team, Rating, Player } from 'models';
import { Row, Col } from 'react-bootstrap';
import { PlayerCard } from 'components';

interface RosterProps {
    team: Team;
}

export class Roster extends React.Component<RosterProps, void> {
    public render() {
        return <div className="roster">
               </div>;
    }
}