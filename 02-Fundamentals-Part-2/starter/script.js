'use strict';

console.log('hi');

// logger('sd', 'sdf');
// const se = logger(34);
// console.log(se);

// function declaration

function calcAge1(birthYear) {
  const age = 2022 - birthYear;
  return age;
}

// function expression
const calcAge2 = function (birthYear) {
  const age = 2022 - birthYear;
  return age;
};

// arrow function
const calcAge3 = (birthYear) => 2022 - birthYear;

const age1 = calcAge1(1996);
const age2 = calcAge2(1996);
const age3 = calcAge3(1996);

console.log(age1, age2, age3);
