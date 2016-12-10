import React from 'react';
import { Game, Team } from 'models';

interface TeamBadgeProps {
	team: Team;
}

export default class TeamBadge extends React.Component<TeamBadgeProps, void> {
	render() {
		return <div className="team-badge">
			<img src="/Content/images/team-logos/{team.name}.png" />
			<span className="team-name">
				{this.props.team.name}
			</span>
		</div>;
	}
}