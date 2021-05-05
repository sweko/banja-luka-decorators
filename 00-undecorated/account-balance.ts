import { audit, decorateWithAudit } from "./ccc-audit";
import { isAuthorized } from "./ccc-auth";
import { startDuration, stopDuration } from "./ccc-logduration";
import { isAmmountValid } from "./ccc-validation";

export class AccountBalance {

  private innerBalance: number;

  public get balance () {
    return this.innerBalance;
  }

  public set balance (value: number) {
    this.innerBalance = value;
  }

  constructor(initialAmmount: number = 0) {
    this.innerBalance= initialAmmount;
    //this.accumulate = decorateWithAudit(this.accumulate).bind(this);
  }

  public showBalance() {
    console.log(`The current value is ${this.balance}`);
  }

  public accumulate(value: number, direction: "up" | "down") {
    audit("AccountBalance.accumulate", value, direction);
    startDuration("AccountBalance.accumulate");
    try {
      if (isAuthorized()) {
        if (isAmmountValid(value, direction, this.balance)) {
          if (direction === "up") {
            this.innerBalance += value;
          } else {
            this.innerBalance -= value;
          }
        } else {
          throw Error("Invalid parameters");
        }
      } else {
        throw Error("Not Authorized");
      }
    } finally {
      stopDuration("AccountBalance.accumulate");
    }
  }

}
