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

// console.log(age1, age2, age3);

// coding challenge

const calAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// console.log(calAvg(22, 21, 23));

const checkWinner = function (s1, s2, s3, b1, b2, b3) {
  const avg1 = calAvg(s1, s2, s3);
  const avg2 = calAvg(b1, b2, b3);
  if (avg1 > 2 * avg2) {
    console.log('Team 1 wins');
  } else if (avg2 > 2 * avg1) {
    console.log('Team 2 wins');
  } else {
    console.log('No team wins');
  }
};

// checkWinner(89, 74, 23, 45, 223, 232);

// arrays
const friends = ['friend1', 'friend2', 'friend3'];
console.log(friends);

const arr = new Array(2343, 23423, 23, 'sdf');

console.log(arr);

console.log(friends[0], friends[2]);

const anu = {
  firstName: 'Anu',
  lastName: 'Priya',
  birthYear: 1996,
  salary: 625000,
  dob: '17/09/1996',
  location: 'India',
  'twitter - handle ': 'anu',
  calcAge: function (birthYear) {
    console.log(this);
    return 2022 - birthYear;
  },
};

console.log(anu);
console.log(anu['calcAge'](1996));
