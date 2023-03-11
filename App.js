function alphabet(captal = false) {
    return [...Array(26)].map((_, y) =>
        String.fromCharCode(y, (captal ? 65 : 97))
    )
}

console.log(alphabet(true))