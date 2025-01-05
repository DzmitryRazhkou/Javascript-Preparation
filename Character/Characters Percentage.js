const string = "Blink 182 - What's my Age Again???"

function calculatePercentage(str) {
    let numberCount = 0;
    let upperCaseCount = 0;
    let lowerCaseCount = 0;
    let specCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (/[a-z]/.test(str[i])) {
            lowerCaseCount++;
        } else if (/[A-Z]/.test(str[i])) {
            upperCaseCount++;
        } else if (/[0-9]/.test(str[i])) {
            numberCount++;
        } else {
            specCount++
        }
    }
    let lowerPercentage = (lowerCaseCount * 100) / str.length
    let upperPercentage = (upperCaseCount * 100) / str.length
    let numberPercentage = (numberCount * 100) / str.length
    let specPercentage = (specCount * 100) / str.length

    console.log("Lower case % ---> " + lowerPercentage)
    console.log("Upper case % ---> " + upperPercentage)
    console.log("Number case % ---> " + numberPercentage)
    console.log("Spec case % ---> " + specPercentage)
}
calculatePercentage(string)