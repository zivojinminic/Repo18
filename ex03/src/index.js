// Only change code below this line
function* myGenerator() {
    yield* [1, 2, 3, 4, 5];
    yield* 'Arena';
    yield* arguments;
}

let iterator = myGenerator(6, 7, 8);
generatorArray = [];
for(var i = 0; i <= 12; i++) {
    generatorArray.push(iterator.next().value);
}
console.log(generatorArray);
// Only change code above this line
module.exports = { generatorArray, myGenerator };