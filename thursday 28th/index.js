// var student = {
//   name: "Nathan",
//   email: "nathan@gmail.com",

//   login() {
//     console.log(this.name, "has logged in");
//   },
//   logout() {
//     console.log(this.name, "has logged out");
//   },
// };
// var student1 = {
//   name: "Nathan Burugu",
//   email: "nathanbadman@gmail.com",

//   login() {
//     console.log(this.name, "has logged in");
//   },
//   logout() {
//     console.log(this.name, "has logged out");
//   },
// };

class Student {
  constructor(name = "nate", email = "nate@gmail.com", grade) {
    this.name = name;
    this.email = email;
    this.grade = grade;
  }
  login() {
    console.log(this.name, "has logged in");
    return this;
  }
  logout() {
    console.log(this.name, "has logged out");
    return this;
  }
  results() {
    if (this.grade >= 0 && this.grade >= 70 && this.grade < 100) {
      console.log(`you pased with a ${this.grade} this grade is an A`);
    } else if (this.grade >= 0 && this.grade >= 60 && this.grade < 69) {
      console.log(`you pased with a ${this.grade} this grade is a B`);
    } else if (this.grade >= 0 && this.grade >= 50 && this.grade < 59) {
      console.log(`you pased with a ${this.grade} this grade is a C`);
    } else if (this.grade >= 0 && this.grade >= 40 && this.grade < 49) {
      console.log(`you pased with a ${this.grade} this grade is a D`);
    } else if (this.grade >= 0 && this.grade < 39) {
      console.log(`you  failed with${this.grade} this grade is an E`);
    } else {
      // console.log{`please enter valid marks`}
    }
  }
}
var student1 = new Student("Nathan Burugu", "nathan@gmail.com", 50);
student1.login().logout();
var student2 = new Student("Badman Bad", "BadmAn@gmail.com", 70);
var student3 = new Student();

// class Teams extends Student {
//    constructor(){
//     super()
//    }
//  var team1 = new Teams('natey', 'natey@email.com')
// }
