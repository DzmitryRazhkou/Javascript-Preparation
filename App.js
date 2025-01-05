function min(array) {
    let min = Math.min(...array)
    let f = array.filter((el) => el === min)
    console.log(f)
}

min([12, 90, 87, 56, 45])
