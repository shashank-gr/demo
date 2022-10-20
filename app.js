class User {
  static count = 0;

  constructor(name, email, pass) {
    this.name = name;

    this.email = email;

    this.password = pass;

    User.count++;
  }

  static getUsers() {
    console.log(`Number of users : ${User.count}`);
  }
}

const abc = new User("abc", "abc@abc.com", "poadn");
const bca = new User("abc", "abc@abc.com", "poadn");
User.getUsers();
console.log(abc.email);
