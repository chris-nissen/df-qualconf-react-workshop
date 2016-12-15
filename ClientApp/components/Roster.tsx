import * as React from 'react';
import { Team, Rating, Player } from 'models';
import { Row, Col } from 'react-bootstrap';
import { PlayerCard } from 'components';

interface RosterProps {
	team: Team;
	ratings: Rating[],
	//upVote: (rating: Rating) => void;
	//downVote: (rating: Rating) => void;
}

export class Roster extends React.Component<RosterProps, void> {
	public render() {
		const playersWithRatings = this.props.team.players.map(p => {
			return {
				player: p,
				rating: this.props.ratings.filter(r => r.playerId === p.id)[0]
			};
		});

		//const sortedList = playersWithRatings.sort((pwr1, pwr2) => pwr2.rating.rating - pwr1.rating.rating);

		return <div className="roster">
			      {/* {sortedList.map(pwr => 
				<PlayerCard key={pwr.player.id} player={pwr.player} rating={pwr.rating} 
						upVote={this.props.upVote} downVote={this.props.downVote}/>)}*/}
						{playersWithRatings.map(pwr => 
				<PlayerCard key={pwr.player.id} player={pwr.player} rating={pwr.rating}/>)}
		       </div>;
	}
}