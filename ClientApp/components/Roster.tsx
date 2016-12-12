import * as React from 'react';
import { Team } from 'models';
import { Row, Col } from 'react-bootstrap';
import { PlayerCard } from 'components';

interface RosterProps {
	team: Team;
}

export class Roster extends React.Component<RosterProps, void> {
	public render() {
		return <div className="roster">
			{this.props.team.players.map(p => <PlayerCard key={p.id} player={p}/>)}
		</div>;
	}
}