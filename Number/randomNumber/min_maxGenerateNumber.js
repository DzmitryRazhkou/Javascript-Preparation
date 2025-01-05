function generateRandom(min, max) {
    let result = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(result)
}

generateRandom(1, 125);

