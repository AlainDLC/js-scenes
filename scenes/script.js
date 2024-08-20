'use strict';

/*
function calcAge(birthYear) {
  const age = 2026 - birthYear;

  console.log(king);
  function printAge() {
    const king = 'Leon';
    const output = `${king} you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = ` you are millenial ${king}`;
      console.log(str);
    }
  }

  printAge();
  return age;
}

 ändras i scopet kommer alltid leta efter närmaste obs det är inte
 samma variabel som lever i minnet därför går det med samma namn 
const king = 'Alain';

calcAge(1981);
*/

// hosting TDZ

/*
undefined
script.js:33 Uncaught ReferenceError: Cannot access 'job' before initialization
at script.js:33:13
*/
console.log(me);
//console.log(job);
//console.log(year);

var me = 'King';
let job = 'Frontend';
const year = 1981;

// function hosting

// denna är en var kommmer åt överallt
/* function addDec(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;
*/
// function exp this

const king = {
  year: 1981,
  bestTime: 100,
  calcAdd: function () {
    console.log(2053 - this.year / this.bestTime);
  },
};

king.calcAdd();
