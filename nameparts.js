
const aName = "Peter Heronimous Lind";

const firstSpace = aName.indexOf(" ");
const lastSpace = aName.lastIndexOf(" ");

console.log(`First name is ${aName.substring(0, firstSpace)}`);

console.log(`middle name is ${aName.substring(firstSpace + 1, lastSpace)}`);

console.log(`Last name is ${aName.substring(lastSpace + 1)}`);

