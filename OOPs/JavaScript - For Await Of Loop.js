const getPromise = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Promise Resolved in ${time}ms. `)
        }, time)
    })
}

let asyncArray = [getPromise(4000), getPromise(3000), getPromise(2500)]
const loopAsync = async () => {
    for await (let s of asyncArray) {
        console.log(s)
    }
}

loopAsync().then()