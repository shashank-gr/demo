// Create a constructor function Student which takes in first name, last name , roll number , Sex and
// Student's age
// Make 2 students objects
// Console log the full name (first name + last name) of the student object with greater age
// Write a function inside the constructor to getBirthYear and fullName of the student
// Write a function outside which takes minimum age to be egligible as arguments and return whether
// the student is egligible or not by calculating his age from dob .
// If student's age greater than or equal to minimum age to be egligible => he is egligible, else he is
// not egligible

function Student(fn, ln, rn, sex, age) {
  this.fn = fn;
  this.ln = ln;
  this.rn = rn;
  this.sex = sex;
  this.age = age;
  this.date = new Date();
}
Student.prototype.getBirthYear = function () {
  return this.date.getFullYear() - this.age;
};
Student.prototype.fullName = function () {
  return this.fn + " " + this.ln;
};
Student.prototype.isEligible = function (age = 18) {
  return this.age >= age ? `He is Eligible` : `He is not Eligible`;
};

const s1 = new Student("shashnk", "gopal", 45, "male", 24);
const s2 = new Student("prasanth", "neel", 40, "male", 22);

console.log(s1.age > s2.age ? `${s1.fn} ${s1.ln}` : `${s2.fn} ${s2.ln}`);

console.log(s1.getBirthYear());
console.log(s2.fullName());
console.log(s1.isEligible(35));

//using date object
function dateObj(dob) {
  this.dob = new Date(dob);
}

const obj1 = new dateObj("1998-12-07"); // date string format "YYYY-MM-DD"
console.log(obj1.dob.toDateString());

//---------------using ES6 classes which is syntatic sugar-----------------
class Student1 {
  constructor(firstName, lastName, rollNo, sex, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.rollNo = rollNo;
    this.sex = sex;
    this.age = age;
    this.date = new Date();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getBirthYear() {
    return `Birth Year is: ${this.date.getFullYear() - this.age}`;
  }
  isEligible(minAge = 18) {
    return this.age >= minAge ? `Eligible` : `Not Eligible`;
  }
}

const p1 = new Student1("Prakash", "Raj", 123, "Male", 22);
console.log(p1.getBirthYear());
console.log(p1.isEligible());
console.log(p1.getFullName());
