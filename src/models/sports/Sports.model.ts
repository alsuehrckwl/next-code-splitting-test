export interface IScore {
  period: number,
  score: number
}

export interface ISoccer {
  id: number;
  sportsType: string;
  score: IScore
}

export interface IBaseball {
  id: number;
  sportsType: string;
  score: IScore
}
