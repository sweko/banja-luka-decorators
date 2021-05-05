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

  public addPoints(points: number, isHomeScore: boolean) {
    // auditing
    audit("addPoints", points, isHomeScore);
    const start = Date.now();
    if (isAuthorized()) {
      if (arePointsValid(points)) {
        if (isHomeScore) {
          this.homeScore += points;
        } else {
          this.awayScore += points;
        }
      } else {
          // todo - invalid flow
      }
    } else {
        // todo - unauthorized flow
    }
    const end = Date.now();
    logDuration("addPoints", start, end);
  }
}
