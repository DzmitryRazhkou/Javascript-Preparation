function countEachChar(str) {
    let map = new Map()

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i)

        if (map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }
    }
    console.log(map)
}

let y = "Selenium Cypress"
countEachChar(y)