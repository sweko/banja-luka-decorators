
import { Person } from "./person";
import { counter } from "./class-counting";
import { mcounter } from "./method-counting";

const weko = new Person("Wekoslav", "Stefanovski");

console.log(weko.getFullName());

for (let index = 0; index < 1000; index++) {
    weko.getFullName();
}

console.log(counter);
console.log(mcounter);

const authors = [
    new Person("Frederick", "Pohl"),
    new Person("Larry", "Niven"),
    new Person("Anne", "McCaffrey"),
    new Person("Ray", "Bradbury"),
    new Person("Frank", "Herbert"),
    new Person("Philip", "Dick"),
    new Person("Robert", "Heinlein"),
    new Person("Isaac", "Asimov"),
    new Person("Neil", "Gaiman"),
    new Person("Neal", "Stephenson"),
];

for (const author of authors) {
    console.log(author.getFullName());
}

console.log(counter);
console.log(mcounter);
