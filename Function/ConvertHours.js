function convertTo24HrsFormat(timeText) {
    let timeTextLower = timeText.toLowerCase();
    let [hours, min] = timeTextLower.split(":");

    // 12 o clock is the special case to be handled both for AM and PM
    if (timeTextLower.endsWith("am")) hours = hours == 12 ? "0" : hours;
    else if (timeTextLower.endsWith("pm"))
        hours = hours == 12 ? hours : String(+hours + 12);

    return hours.padStart(2, 0) + ":" + min.slice(0, -2).padStart(2, 0);
}
function convertTime(time) {
    let hours = time.substring(0, 2)
    let minutes = time.substring(3)

    // Determine if it's AM or PM
    let suffix = hours >= 12 ? "PM" : "AM"

    // Convert to 12-hour format
    hours = ((hours + 11) % 12 + 1);

    // Return the formatted string
    return hours + ':' + minutes + ' ' + suffix;
}

console.log(convertTo24HrsFormat("3:10PM"));
console.log(convertTime("15:35"))
