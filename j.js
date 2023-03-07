let psw = (length) => {
    let char = "abcdefghijklmnopqrstuvwxyz`~1234567890-_+=!@#$%^&*(){}[]|"
    let psw = "";
    for (let i = 0; i < length; i++) {
        let ranNum = Math.floor(Math.random() * char.length)
        psw += char[ranNum]
    }
    console.log(psw)
}

psw(75);

let y = [5, 45, 150, 163, 95, 12, 12.5];

function max(arr) {
    return arr.reduce((x, y) => {
        return x > y ? x : y;
    })
}

console.log(max(y))

const arr = ["Java", "JS", "Python", "C++", "C#"];

function reverseWs(arr) {
    let rev = arr.map((s) => s.split("").reverse().join(""))
    console.log(rev.join(" "))
}

reverseWs(arr)

const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "monday"];
for (let day of days) {
    day = day.charAt(0).toUpperCase() + day.substring(1)
    console.log(day)
}

let str = "Leo Olly"

function palindrome(syr) {
    let rev = "";
    for (let i = syr.length - 1; i >= 0; i--) {
        rev += syr.charAt(i)
    }
    if (syr.toLowerCase() == rev.toLowerCase()) {
        console.log("Y")
    } else {
        console.log("N")
    }
}
palindrome("loL")

let alphabet = String.fromCharCode(...Array(123).keys()).slice(97);
console.log(alphabet)

let pl = [12, 25, 12, 75, 50, 50]

function countDuplicate(str) {
    let res = str.reduce((x, y) => {
        if (x[y] === undefined) {
            x[y] = 1
            return x
        } else {
            x[y]++;
            return x
        }
    }, {})
    for (let [x, y] of Object.entries(res)) {
        if (y > 1) {
            console.log(`${x} -> ${y}`)
        }
    }
}

countDuplicate(pl)

let p = "SelenUm"

function capLetters(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) >= 'A' && str.charAt(i) <= 'Z') {
            count++
        }
    }
    console.log(count)
}

capLetters(p)