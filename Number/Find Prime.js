function findPrime(numbers){
    let primeNumbers = []
    numbers.forEach((num) => {
        if (isPrime(num)){
            primeNumbers.push(num)
        }
    })
    return primeNumbers
}

function isPrime(num){
    if (num<2){
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num%i == 0){
            return false
        }
    }
    return true;
}

console.log(findPrime([12, 899, 77, 7, 21, 33, 11]))