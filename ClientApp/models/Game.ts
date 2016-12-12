import { Rating, Team } from 'models';

export class Game {
	id: number;
	date: Date;
	awayTeam: Team;
	homeTeam: Team;
}