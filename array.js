let student1 = "Daniel";
const student2 = "Peter";
const student3 = "Richard";
const student4 = "Sunday";

function book(people) {
  let index = 0;

  while (index < people.length) {
    console.log(
      people[index].slice(0, 3).toUpperCase() + people[index].slice(3)
    );
    index++;
  }
}

const students = ["Daniel", "Peter", "John"];
const persons = ["Emeka", "Grace", "Emma"];
const personses = ["Emka", "race", "Emma"];

// book(students);
// book(persons);
// book(personses);

function addTwo(num1, num2) {
  let hold = num1 + num2;
  if (num1 % 2 == 0) {
    return "even";
  }
  return "odd";
}

// console.log(addTwo(5, 2));

const obj = {
  name: "Daniel",
  course: "Web development",
  email: "daniel@mail.com",
  print: function () {
    console.log(this.name + " is studying " + this.course);
  },
};
obj.name = "John";

obj.print();

// function test() {
//   console.log(this);
// }

// test();

const studs = [
  {
    name: "Richard",
    course: "Web development",
    email: "daniel@mail.com",
    print: function () {
      console.log(this.name + " is studying " + this.course);
    },
  },
  {
    name: "Martins",
    course: "Web development",
    email: "daniel@mail.com",
    print: function () {
      console.log(this.name + " is studying " + this.course);
    },
  },
  {
    name: "John",
    course: "Web development",
    email: "daniel@mail.com",
    print: function () {
      console.log(this.name + " is studying " + this.course);
    },
  },
];
for (let index of studs) {
  console.log(index.name);
}

for (let index = 0; index < studs.length; index++) {
  console.log(studs[index].name);
}

function takeename(nameee) {
  let uppercasee = nameee.substring(0, 4).toUpperCase() + nameee.slice(4);

  console.log(uppercasee);
}

takeename("chelsea");
takeename("osborben");
takeename("benrahma");
takeename("odegarrd");
takeename("macanthony");
takeename("benjamin");

function takenum(nummm) {
  let first8 = nummm.slice(8);
  let rem = first8.padStart(12, "*");
  return rem;
}

console.log(takenum("123456789127"));

const numArr2 = [
  "20",
  "600",
  "280",
  "300",
  "290",
  "400",
  "760",
  "670",
  "419",
  "900",
];

function sorty(a, b) {
  return a - b;
}

let sorted = numArr2.sort(sorty);

console.log(sorted);
let descending = sorted.reverse();
console.log(descending);

function getmin(a, b) {
  return a - b;
}
const sorrtt = numArr2.sort(getmin);
const min = sorrtt[0];

const max = sorrtt.slice(-1);
console.log(min);
console.log(max);

// for max
// function mini(sorte) {
//   const numb = numArr2.sort(sorte)(function (a, b) {
//     return a - b;
//   });

//   const mini = numb[0];

//   return mini;
//   console.log(sorte);
// }

// mini(numb);
//
