import React from 'react';
import { Team } from 'models';

interface TeamLogoProps {
	team: Team;
}

export class TeamLogo extends React.Component<TeamLogoProps, void> {
	render() {
		const logoUrl = require(`../images/team-logos/${this.props.team.name}.png`) as string;

		return <img src={logoUrl}/>;
	}
}