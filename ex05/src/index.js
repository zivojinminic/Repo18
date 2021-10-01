// Only change code below this line
let shoppingList = new Map([
    ["Banana", 2],
    ["Pineapple", 1],
    ["Pear", 5],
    ["Carrot", 4],
    ["Apple", 7]
]);
let arrKey = [];
let arrValue = [];
for(let col of shoppingList.entries()) {
    arrKey.push(`groceries: ${col[0]}`);
    arrValue.push(`amount: ${col[1]}`);
}
console.log(arrKey);
console.log(arrValue);
for(let [key, value] of shoppingList) {
    console.log([value, key]);
}
// Only change code above this line
module.exports = { shoppingList, arrKey, arrValue };