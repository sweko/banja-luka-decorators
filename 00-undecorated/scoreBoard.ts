export class ScoreBoard {
  private homeScore: number = 0;
  private awayScore: number = 0;

  constructor(private homeTeam: string, private awayTeam: string) {}

  public showScore() {
    console.log(
      `${this.homeTeam} ${this.homeScore} : ${this.awayScore} ${this.awayTeam}`
    );
  }

  public addPoints(points: number, isHomeScore: boolean) {
    if (isHomeScore) {
      this.homeScore += points;
    } else {
      this.awayScore += points;
    }
  }
}
