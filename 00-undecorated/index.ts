import { AccountBalance } from "./account-balance-ccc";

const account = new AccountBalance();

account.accumulate(100, "up");
account.accumulate(1000, "up");
account.showBalance();
account.accumulate(200, "down");
account.showBalance();