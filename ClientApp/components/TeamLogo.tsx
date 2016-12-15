import React from 'react';
import { Team } from 'models';

interface TeamLogoProps {
	team: Team;
}

export function TeamLogo(props: TeamLogoProps) {
	const logoUrl = require(`../images/team-logos/${props.team.name}.png`) as string;
	return <img className="team-logo" src={logoUrl} />;
}