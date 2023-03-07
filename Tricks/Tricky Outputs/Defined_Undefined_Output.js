(function(){
    const a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined')); // a - undefined
console.log("b defined? " + (typeof b !== 'undefined')); // b - defined