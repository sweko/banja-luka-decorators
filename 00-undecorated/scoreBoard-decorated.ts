import { audit } from "./audit";
import { isAuthorized } from "./auth";
import { arePointsValid } from "./validation";
import { logDuration } from "./logduration";

export class ScoreBoard {
  private homeScore: number = 0;
  private awayScore: number = 0;

  constructor(private homeTeam: string, private awayTeam: string) {}

  public showScore() {
    console.log(
      `${this.homeTeam} ${this.homeScore} : ${this.awayScore} ${this.awayTeam}`
    );
  }

  @audit
  @isAuthorized("can-change-score")
  @logDuration
  @validate
  public addPoints(@validNumber(1,3) points: number, isHomeScore: boolean) {
      if (isHomeScore) {
        this.homeScore += points;
      } else {
        this.awayScore += points;
      }
  }
}
