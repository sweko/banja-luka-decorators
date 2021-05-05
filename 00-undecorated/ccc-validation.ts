export const isAmmountValid = (value : number, direction: "up" | "down", balance: number) => {
    console.log(`[validation] started`);
    if (value <= 0) {
        console.log(`[validation] zero or negative ammount ${value}`)
        return false;
    }
    if (direction === "down" && value > balance) {
        console.log(`[validation] unable to withdraw ${value} on a balance of ${balance}`);
        return false;
    }
    console.log(`[validation] the operation is valid`)
    return true
}
