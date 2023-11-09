// const { isInteger } = require("lodash");

// function isSastry(number) {
//   console.log(number);
//   var temp = number.toString() + (number + 1).toString();
//   console.log(temp);
//   console.log(Math.sqrt(parseInt(temp)) % 1 == 0);
// }

// isSastry(183);

const numbers = [1, 4, 9, 16];

function subtractTwo(numbers) {
  for (var i = 0; i < numbers.length; i++) numbers.map((x) => x - 2);

  console.log(numbers);
}

console.log(subtractTwo(numbers));
