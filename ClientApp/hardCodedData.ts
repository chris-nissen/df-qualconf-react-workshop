import { Game, Team, Player } from 'models';
import moment from 'moment';

export function fetchHardCodedSchedule(): Game[] {
	return [
		{
			id: 1,
			date: moment('2016-12-17').toDate(),
			awayTeam: getTeam('Lightning'),
			homeTeam: getTeam('Oilers'),
			ratings: []
		},
		{
			id: 2,
			date: moment('2016-12-19').toDate(),
			awayTeam: getTeam('Oilers'),
			homeTeam: getTeam('Blues'),
			ratings: []
		}
		//,
		//{
		//	id: 3,
		//	date: moment('2016-12-21').toDate(),
		//	awayTeam: getTeam('Oilers'),
		//	homeTeam: getTeam('Coyotes'),
		//	ratings: []
		//}
	]
}

function getTeam(name: string): Team {
	const teams: Team[] = [
		{
			id: 1,
			name: "Edmonton Oilers",
			players: [
			]
		},
		{
			id: 2,
			name: "Lightning",
			players: [
			]
		},
		{
			id: 3,
			name: "St. Louis Blues",
			players: [
			]
		},
		{
			id: 4,
			name: "Arizona Coyotes",
			players: [
			]
		}
	];

	return teams.filter(t => t.name.indexOf(name) !== -1)[0];
}

