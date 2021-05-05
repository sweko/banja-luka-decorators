export class Calculator {
    constructor (public first: number, public second: number) {}

    public add() {
        return this.first + this.second;
    }

    public subtract() {
        return this.first - this.second;
    }

    public multiply() {
        return this.first / this.second;
    }

    public divide() {
        return this.first / this.second;
    }
}