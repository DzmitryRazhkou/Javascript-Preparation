function sum_method1(x) {
    if (arguments.length == 2) {
        return arguments[0] + arguments[1];
    } else {
        return function(y) { return x + y; };
    }
}
function sum_method2(x, y) {
    if (y !== undefined) {
        return x + y;
    } else {
        return function(y) { return x + y; };
    }
}

console.log(sum_method2(2, 3))

