// function MarksList(list) {
//   this.list = list;

//   this.average = function () {
//     var sum = 0;
//     this.list.forEach(function (ele) {
//       sum += ele;
//     });
//     return Number((sum / this.list.length).toFixed(1));
//   };

//   this.lowest = function () {
//     return Math.min.apply(null, list);
//   };

//   this.highest = function () {
//     return Math.max.apply(null, list);
//   };
// }

// function MarksList(list) {
//   this.list = list;
// }

// MarksList.prototype.average = function () {
//   var sum = 0;
//   this.list.forEach(function (ele) {
//     sum += ele;
//   });
//   return Number((sum / this.list.length).toFixed(1));
// };

// MarksList.prototype.lowest = function () {
//   return Math.min.apply(null, this.list);
// };

// MarksList.prototype.highest = function () {
//   return Math.max.apply(null, this.list);
// };

// var m = new MarksList([67, 80, 95, 65, 79, 99]);

// console.log(m.average()); // 80.8
// console.log(m.lowest()); // 65
// console.log(m.highest()); // 99

var nums = [100, 9, 80, 2, 0, -1, -50];
// var nums = null;
console.log(typeof nums);
console.log(
  nums.sort(function (a, b) {
    return a - b;
  })
);
