import { audit } from "./ccc-audit";
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
  }

  public showBalance() {
    console.log(`The current value is ${this.balance}`);
  }

  public accumulate(value: number, direction: "up" | "down") {
    audit("AccountBalance.accumulate", value, direction);
    startDuration("AccountBalance.accumulate");
    try {
      if (isAuthorized()) {
        if (isAmmountValid(value, direction, this.innerBalance)) {
          if (direction === "up") {
            this.innerBalance += value;
          } else {
            this.innerBalance -= value;
          }
        } else {
          throw Error("Parameter validation failed")
        }
      } else {
        throw Error("Authorization failed");
      }
    } finally {
      stopDuration("AccountBalance.accumulate");
    }
  }
}
