isPrime(14)
function isPrime(number) {
    if (number == 2)
        return true
    if (number % 2 == 0 || number < 2) {
        return false
    }
    let max_range = parseInt(math.sqrt(number)) + 1
    for (let i = 3; i < max_range; i++) {
        if (number % value == 0)
            return false
        return true
    }

}