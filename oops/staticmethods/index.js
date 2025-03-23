// static methods are those which are associated with class not with instances

class Person {
  constructor(name, dob, gender) {
    this.name = name;
    this.dob = dob;
    this.gender = gender;
  }
  calAge = function () {
    let age = new Date().getFullYear() - this.dob;
    console.log(age);
  };

  static greet() {
    console.log("Hey there! How are you?");
  }
}

let john = new Person("John", 1990, "Male");
console.log(john);

Person.greet();

// let Person = function(name,gender,dob)
