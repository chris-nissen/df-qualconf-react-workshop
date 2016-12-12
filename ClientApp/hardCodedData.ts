import { Game, Team, Player } from 'models';
import moment from 'moment';

export function fetchHardCodedSchedule(): Game[] {
	return [
		{
			id: 1,
			date: moment('2016-12-17 20:00').toDate(),
			awayTeam: getTeam('Lightning'),
			homeTeam: getTeam('Oilers')
		},
		{
			id: 2,
			date: moment('2016-12-19 18:00').toDate(),
			awayTeam: getTeam('Oilers'),
			homeTeam: getTeam('Blues')
		},
		{
			id: 3,
			date: moment('2016-12-21 19:30').toDate(),
			awayTeam: getTeam('Oilers'),
			homeTeam: getTeam('Coyotes')
		}
	];
}

function getTeam(name: string): Team {
	const teams: Team[] = [
		{
			id: 1,
			name: "Edmonton Oilers",
			players: [
				{
					id: 1,
					name: "Connor McDavid",
					number: 97
				},
				{
					id: 2,
					name: "Leon Draisaitl",
					number: 29
				},
				{
					id: 3,
					name: "Jordan Eberle",
					number: 14
				},
				{
					id: 4,
					name: "Milan Lucic",
					number: 27
				},
				{
					id: 5,
					name: "Ryan Nugent-Hopkins",
					number: 93
				},
				{
					id: 6,
					name: "Oscar Klefbom",
					number: 77
				},
				{
					id: 7,
					name: "Andrej Sekera",
					number: 2
				},
				{
					id: 8,
					name: "Cam Talbot",
					number: 33
				},
				{
					id: 9,
					name: "Adam Larsson",
					number: 6
				},
				{
					id: 10,
					name: "Patrick Maroon",
					number: 19
				},
			]
		},
		{
			id: 2,
			name: "Tampa Bay Lightning",
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

export function fetchHardCodedGame(gameId: number) {
	const games = fetchHardCodedSchedule();
	return games.filter(g => g.id === gameId)[0];
}