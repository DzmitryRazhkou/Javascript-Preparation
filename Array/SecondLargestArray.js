const arr = [750, 50, 3, 195, 350];

// 1) First Method:
function secondLargeNumberMethod1(str) {
    let sorted = str.sort((x, y) => x - y)
    let secondMax = sorted[sorted.length - 2]
    console.log("First Method is: " + secondMax)
}

secondLargeNumberMethod1(arr)

// 2) Second Method:
function secondLargeNumberMethod2(str) {
    let sorted = str.sort((x, y) => y - x)
    let secondMax = sorted[1]
    console.log("Second Method is: " + secondMax)
}

secondLargeNumberMethod2(arr)




