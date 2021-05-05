console.log("Before import");
import { Person } from "./person";
console.log("After import");
import { createCounts } from "./class-counter";

console.log("Before instance");
const weko = new Person("Wekoslav", "Stefanovski");
console.log("After instance");
console.log(weko.getFullName());

console.log(createCounts);

// --------------------

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

console.log(createCounts);