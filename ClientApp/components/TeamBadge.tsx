import React from 'react';
import { Team } from 'models';

interface TeamBadgeProps {
	team: Team;
}

export default class TeamBadge extends React.Component<TeamBadgeProps, void> {
	render() {
		//const logoUrl: any = require(`../images/team-logos/${this.props.team.name}.svg`);
		const logoUrl: any = require(`../images/team-logos/Lightning.png`);

		return <div className="team-badge">
			{/*<img src={require(`../../Content/images/team-logos/${this.props.team.name}.svg`) as string} />*/}
			<img src={logoUrl}/>
			<span className="team-name">
				{this.props.team.name}
			</span>
		</div>;
	}
}