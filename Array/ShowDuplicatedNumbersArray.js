let arr = [12, 75, 50, 50, 25, 12];

// 1st Method:
function showDuplicatedNumbersSetMethod(str) {
    let set = new Set()
    let count = 0;

    for (let s of set) {
        for (let l of str) {
            if (s === l) {
                count++;
            }
        }
        if (count > 1) {
            console.log("Set Method -> " + s)
        }
    }
}
showDuplicatedNumbersSetMethod(arr)

// 2nd Method:
function showDuplicatedNumbersFilterMethod(str) {
    let result = str.filter((el, index, arr) => arr.indexOf(el) != index).sort((x, y) => x - y)
    console.log("Filter Method -> " + result)
}
showDuplicatedNumbersFilterMethod(arr)
