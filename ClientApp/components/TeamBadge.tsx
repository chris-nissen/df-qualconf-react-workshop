import React from 'react';
import { Team } from 'models';

interface TeamBadgeProps {
	team: Team;
	homeTeam: boolean;
}

export default class TeamBadge extends React.Component<TeamBadgeProps, void> {
	render() {
		const logoUrl = require(`../images/team-logos/${this.props.team.name}.png`) as string;

		return <div className="team-badge">
			{!this.props.homeTeam ? <img src={logoUrl}/> : null }
			<span className="team-name">
				{this.props.team.name}
			</span>
			{this.props.homeTeam ? <img src={logoUrl} /> : null}
		</div>;
	}
}