// // function main(name) {
// //     console.log("hello how are you " + name)
// // }

// // main("fred")
// // main("philip")

// // //assigment 2

// // function num(fig, percent) {
// //     let result = (fig * percent) / 100
// // }

// // function Tenpercent(rate) {
// //     return (rate * 60) / 100
// // }

// // console.log(Tenpercent(45))
// //let rate = num()

// // function takename (name){
// //     console.log(name)
// // }

// // takename('daniel')
// // takename('peter')

// //assignment 2

// // function lower_UpperCase(name) {
// //     if (name.length < 3) {
// //         return name.tolowerCase();
// //     }
// //     first_3leters = (name.substring(0, 3)).toUpperCase();
// //     rest_letters = name.substring(3, name.length);
// //     return first_3leters + rest_letters;
// // }
// // console.log(lower_UpperCase("daniel"));
// // console.log(lower_UpperCase("macdonald"));
// // console.log(lower_UpperCase("johnson"));

// //number 2

// // const replaceNumWithAsteriqs = value => value.replace
// // (/.+(.{4})$/, "3456******* $1")

// // console.log(replaceNumWithAsteriqs('3456 3232 9999'))

// // function firstThree(name){
// // let firstTwo = name.substring(0,2).toUpperCase()
// // let remaining = name.slice(2)
// // let final = firstTwo+remaining
// // return final

// //     return name.slice(0,2).toUpperCase() + name.slice(2)
// // }

// // console.log("123456".padStart(7,"*"))

// // function hidePassword(num){
// //     let last4= num.slice(8)
// //     let final = last4.padStart(12,"*")
// //     return final
// // }

// // function addTwo(){

// //     return 1+1
// // }

// // console.log(addTwo())

// // console.log(hidePassword("123456789012"))
// // console.log(firstThree("Daniel"))

// // assignment 3

// // "function(sentence, word) => 5"

// let str = "this is a sentence word word word sentence sentence sentence sentence goat in blulaba "

// let numberofocc = str.match(/sentence/g)

// console.log(numberofocc.length)

// // class work

// // find the total words in the sentence below

// // hello is is found in this sentence twice

// //   solution

// let sentence = 'hello is is found in this sentence twice'

// let word

// let totlength = sentence.split(' ')

// console.log(totlength.length)

// // assignment 4

// // get an array of (10) numbers , sort in ascending and descending order

// const numArr = ['400', '30', '12', '76', '89', '40', '100', '65', '200', '5']

// function ascending(a, b) {
//     return a - b
// }

// let sorted = numArr.sort(ascending)

// console.log(sorted)

// function descending(b, c) {
//     return c - b
// }

// let sorted2 = numArr.sort(descending)

// console.log(sorted2)

// // number 2
// // write a function of array that has 10 values and return the max and min value

// const sortedArr = [10, 30,  4, 3, 22, 90, 78, 100, 200, 12, 99, 300]

// function min (a, b) {
//     return a - b
// }

// const sorted = sortedArr.sort(min)
//     // const min2 =sorted[0]
//     console.log(min2)
// return min

// return a - b

// function mini (sorted3){
//     const numb = sorted3.sort(function (a, b){
//         return a- b
//     })

//     const mini = numb [0]

//     // return mini

// }

// console.log(sorted3)
// mini(numb)
// console.log(Math.min('400', '30', '12', '76', '89', '40', '100', '65', '200', '5'))
// console.log(Math.max('400', '30', '12', '76', '89', '40', '100', '65', '200', '5'))

//     let str2=  'hello my friend'

//     let firstletter = str2.substring(0, 1)

// console.log(firstletter)

// let str3=  'hello how are you my friend'

// let firstletter2 = str3.substring(0, 1)

// console.log(firstletter2)

// function getFirst(word){
//     let firstletter2 = word.charAt(word.length-1)
//     return firstletter2
// }

// console.log("from function",getFirst('you my friend'))
// console.log("from function",getFirst('my friend'))

// let twelve = "123456789012"
// let slice = twelve.slice(-4)
// // let pad = slice.padStart(12,"*")

// function pad(twelve) {
//     let slice = twelve.slice(-4)
//     let pad = slice.padEnd(12, "*")

//     return pad
// }

// console.log(pad("1234665532212"))

// let number = [20, 30, 60, 100, 55, 22, 17, 90, 300, 1000];

// function anything(sor) {
//   const sort = sor.sort(function (a, b) {
//     return a - b;
//   });

//   return sort[0];
// }

// console.log (anything(number))
// anything (number)

// assignment

// print the odd numbers from  0 to 100 and the even numbers from 0 to 100

// ALGORITHM

// STEP 1 =  GET COUNTER
// STEP 2 = ASSIGN A CONDITION LESS OR EQUALTO 100
// STEP 3 = TO GET EVEN: ASSIGN INCREAMENT IN EVEN NUMBER
// STEP 4 = TO GET ODD: ASSIGN INCREAMENT IN ODD NUMBER

// SOLUTION FOR EVEN

// let counter = 0;

// while (counter <= 100) {
//   //   console.log(counter);

//   counter += 2;
// }

// for odd number
// let counter = 1;
// while (counter <= 100) {
//   console.log(counter);

//   counter += 2;
// }

// better way

// let counter = 0;

// while (counter <= 100) {
//   if (counter % 2 !== 0) {
//     console.log(counter);
//   }

//   counter++;
// }
// NUMBER 2

// WRITE A FUNCTION THAT TAKES IN A NAME AND RETURNS SAME MEANING WHEN REVERSED

// SOLUTION

// racecar;

// let name = "RACECAR";

// let Namerev = name.reverse();

// console.log(Namerev);

// word(Racecar);

// Assignment

//  count 1 to 100
// if a number is divisible by 3 log FIZZ
// if a number is divisible by 5 log BUZZ
// if a number is divisible by 3 and 5 log FIZZBUZZ

// solution

// algorithm

// step1 = get counter and set condition
// step2 = get numbers diviisble by 3 and replace with 'Fizz"
// step3 = get numbers diviisble by 5 and replace with 'Buzz"
// step4 = get numbers diviisble by 3 and 5 replace with 'FizzBuzz"
// step 5 = increment counter

let counter = 0;

while (counter <= 100) {
  if (counter % 3 == 0) {
    console.log("FIZZ");
  }

  if (counter % 5 == 0) {
    console.log("BUZZ");
  }

  if (counter % 3 === 0 && counter % 5 === 0) {
    console.log("FIZZBUZZ");
  }

  counter++;
}

// assignment 2

// print first two letters of array in cap

const names = ["daniel", "ben", "joshua", "simon"];

let first = 0;

console.log(first);
// const first = names.map((name) => {
//   return name[0].toUpperCase() + name.slice(1);
// });

// const second = names.map((name) => {
//   return name["1"].toUpperCase() + name.slice(2);
// });

// for (var d = 0; d < arr.length; d++) {
//   arr[d] = arr[d].charAt(0).toUpperCase() + arr[d].slice(1);
// }

// const final = arr.join(" ");
// }

// console.log(first);
// console.log(second);

// function lower_UpperCase(name) {
//   if (name.length < 2) {
//     return name.tolowerCase();
//   }
//   first_2leters = name.substring(0, 2).toUpperCase();
//   rest_letters = name.substring(2, name.length);
//   return first_2leters + rest_letters;
// }
// console.log(lower_UpperCase("names"));
// console.log(lower_UpperCase("macdonald"));
// console.log(lower_UpperCase("johnson"));
