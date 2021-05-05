import { Person } from "./person";
import { createCounts } from "./class-counter";
import { callCounts } from "./method-counter";

const weko = new Person("Wekoslav", "Stefanovski");

console.log(weko.getFullName());

console.log(callCounts);