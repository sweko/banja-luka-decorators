import { decorateWithAudit } from "./ccc-audit";
import { decorateWithAuthorized } from "./ccc-auth";
import { decorateWithDuration } from "./ccc-logduration";
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
    this.accumulate = decorateWithAudit(this.accumulate, this);
    this.accumulate = decorateWithAuthorized(this.accumulate, this);
    this.accumulate = decorateWithDuration(this.accumulate, this);
  }

  public showBalance() {
    console.log(`The current value is ${this.balance}`);
  }

  public accumulate(value: number, direction: "up" | "down") {
      if (isAmmountValid(value, direction, this.balance)) {
        if (direction === "up") {
          this.innerBalance += value;
        } else {
          this.innerBalance -= value;
        }
      } else {
        throw Error("Invalid parameters");
      }
  }

}
