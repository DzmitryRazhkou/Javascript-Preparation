function randomBetween(min, max, length) {
    let arr = [];
    while (arr.length < length) {
        let randomInt = Math.floor(Math.random() * (max - min + 1) + min);
        arr.push(randomInt);
    }
    console.log(arr);
    console.log(arr.sort());
    console.log(arr.reverse());
}

randomBetween(12, 75, 5);
