//object {key:value}
const person = {
  name: "Shashanka",
  age: 24,
  hobbies: ["Music", "Movies", "formula1"],
  address: {
    doorNum: 399,
    street: "14th main",
    area: "Mysuru",
  },
};

console.log(person.hobbies[2]);
console.log(person.address.area);

//set new property

person.working = true;
console.log(person);

//Destructuring- basically pulling items from objects

const {
  name,
  working,
  address: { doorNum }, // destructuring object inside one another
} = person;
console.log(`name: ${name} ; currently working: ${working}`);

console.log(doorNum);
