// Only change code below this line
let one = new Set([1, 2, 3, 4, 5]);
let two = new Set([1, 2, 3, 4, 5]);
let unionSet = new Set([...one, ...two]);
let intersectionSet = new Set();
let differenceSet = new Set();
console.log(unionSet);
// Only change code above this line
module.exports = { unionSet, intersectionSet, differenceSet };