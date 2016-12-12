import * as React from 'react';
import { Team, Rating } from 'models';
import { Row, Col } from 'react-bootstrap';
import { PlayerCard } from 'components';

interface RosterProps {
	team: Team;
	ratings: Rating[]
}

export class Roster extends React.Component<RosterProps, void> {
	public render() {
		return <div className="roster">
			{this.props.team.players.map(p => {
					const playerRating = this.props.ratings.filter(r => r.playerId === p.id)[0];
					return <PlayerCard key={p.id} player={p} rating={playerRating}/>;
})}
		</div>;
	}
}