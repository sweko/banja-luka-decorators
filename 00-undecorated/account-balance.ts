import { audit } from "./ccc-audit";

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
    if (direction === "up") {
      this.innerBalance += value;
    } else {
      this.innerBalance -= value;
    }
  }

}
