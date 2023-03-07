function countEachChar(str) {
    let map = new Map()

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i)

        if (map.has(char)) {
            let value = map.get(char)
            map.set(char, value + 1)
        } else {
            map.set(char, 1)
        }
    }
    console.log(map)
}

let y = "Selenium Cypress"
countEachChar(y)