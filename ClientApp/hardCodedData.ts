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
				{
					id: 11,
					name: "Nikita Kucherov",
					number: 86
				},
				{
					id: 12,
					name: "Steven Stamkos",
					number: 91
				},
				{
					id: 13,
					name: "Victor Hedman",
					number: 77
				},
				{
					id: 14,
					name: "Valtteri Filppula",
					number: 51
				},
				{
					id: 15,
					name: "Jonathan Drouin",
					number: 27
				},
				{
					id: 16,
					name: "Ondrej Palat",
					number: 18
				},
				{
					id: 17,
					name: "Alex Killorn",
					number: 17
				},
				{
					id: 18,
					name: "Anton Stralman",
					number: 6
				},
				{
					id: 19,
					name: "Tyler Johnson",
					number: 9
				},
				{
					id: 20,
					name: "Ben Bishop",
					number: 30
				},
			]
		},
		{
			id: 3,
			name: "St. Louis Blues",
			players: [				
			{
					id: 21,
					name: "Vladimir Tarasenko",
					number: 91
				},
				{
					id: 22,
					name: "Kevin Shattenkirk",
					number: 22
				},
				{
					id: 23,
					name: "Jaden Schwartz",
					number: 17
				},
				{
					id: 24,
					name: "Robby Fabbri",
					number: 15
				},
				{
					id: 25,
					name: "Alexander Steen",
					number: 20
				},
				{
					id: 26,
					name: "Paul Stastny",
					number: 26
				},
				{
					id: 27,
					name: "Alex Pietrangelo",
					number: 27
				},
				{
					id: 28,
					name: "Colton Parayko",
					number: 55
				},
				{
					id: 29,
					name: "David Perron",
					number: 57
				},
				{
					id: 30,
					name: "Jake Allen",
					number: 34
				},
			]
		},
		{
			id: 4,
			name: "Arizona Coyotes",
			players: [	{
					id: 31,
					name: "Radim Vrbata",
					number: 17
				},
				{
					id: 32,
					name: "Max Domi",
					number: 16
				},
				{
					id: 33,
					name: "Oliver Ekman-Larsson",
					number: 23
				},
				{
					id: 34,
					name: "Jordan Martinook",
					number: 48
				},
				{
					id: 35,
					name: "Alex Goligoski",
					number: 33
				},
				{
					id: 36,
					name: "Tobias Rieder",
					number: 8
				},
				{
					id: 37,
					name: "Martin Hanzal",
					number: 11
				},
				{
					id: 38,
					name: "Lawson Crouse",
					number: 67
				},
				{
					id: 39,
					name: "Christian Dvorak",
					number: 18
				},
				{
					id: 40,
					name: "Mike Smith",
					number: 41
				},
			]
		}
	];

	return teams.filter(t => t.name.indexOf(name) !== -1)[0];
}

export function fetchHardCodedGame(gameId: number) {
	const games = fetchHardCodedSchedule();
	return games.filter(g => g.id === gameId)[0];
}