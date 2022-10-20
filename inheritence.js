//creted a membership task using inheritance;

class User {
  static count = 0;
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    User.count = User.count + 1;
  }
  static regUsers() {
    console.log(`reg users: ${User.count}`);
  }
}

class Member extends User {
  constructor(name, email, password, membership) {
    super(name, email, password);
    this.membership = membership;
    let todayDate = new Date();
    this.membershipActiveTill = new Date(
      todayDate.getFullYear(),
      todayDate.getMonth() + 1,
      todayDate.getDate()
    );
  }
  membershipValid() {
    console.log(
      `The membership of ${this.name} is vaild till ${this.membershipActiveTill}`
    );
  }
  renewMembership(membership = this.membership) {
    this.membership = membership;
    if (membership == "Standard") {
      this.membershipActiveTill = new Date(
        this.membershipActiveTill.getFullYear(),
        this.membershipActiveTill.getMonth() + 1,
        this.membershipActiveTill.getDate()
      );
    } else {
      this.membershipActiveTill = new Date(
        this.membershipActiveTill.getFullYear() + 1,
        this.membershipActiveTill.getMonth(),
        this.membershipActiveTill.getDate()
      );
    }
  }
}

const shashanka = new Member(
  "Shashank",
  "shash@email.com",
  "123abc",
  "Standard"
);
shashanka.membershipValid();
shashanka.renewMembership("Yearly");
shashanka.membershipValid();
console.log(shashanka.membershipActiveTill);
console.log(shashanka.membership);
