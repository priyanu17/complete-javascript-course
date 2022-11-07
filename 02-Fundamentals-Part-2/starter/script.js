'use strict';

console.log('hi');

function logger(se) {
  console.log('Log from logger function');
}

// logger('sd', 'sdf');
// const se = logger(34);
// console.log(se);

// console.log(console.assert('sdf'));

const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/india');

request.send();

request.addEventListener('load', function () {
  console.log(this.responseText);
});
