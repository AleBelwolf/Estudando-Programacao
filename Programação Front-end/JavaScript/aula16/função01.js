function parimpar(n) {
    if (n % 2 == 0) {
        return `O número ${n} é PAR`
    }
    else {
        return `O número ${n} é IMPAR`
    }
}
console.log(parimpar(5))