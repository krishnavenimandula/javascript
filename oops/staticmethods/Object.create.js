let Person = {
  calcAge() {
    return new Date().getFullYear() - this.birthyear;
  },

  greet() {
    return "Have a nice day!";
  },
};

let Rahul = Object.create(Person);
Rahul.name = "Rahul";
Rahul.gender = "Male";
Rahul.birthyear = 1990;

console.log(Rahul);
console.log(Rahul.calcAge());
console.log(Rahul.greet());

let kavya = Object.create(Person, {
  name: { value: "Kavya" },
  gender: { value: "Female" },
  birthyear: { value: 1995 },
});

console.log(kavya);
console.log(kavya.calcAge());
console.log(kavya.greet());
