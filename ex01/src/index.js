let myArr = [];
// Only change code below this line
function* multiplication(x) {
    for(var i = 0; i <= x; i++) {
        yield x *= 2;
        myArr.push(x);
    }
}
var num = multiplication(3);
for(i = 0; i < 3; i++) {
    console.log(num.next().value);
}
// Only change code above this line
module.exports = multiplication;