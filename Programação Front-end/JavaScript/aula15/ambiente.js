let num = [5, 8, 3, 4]

/* [4] serve para adicionar o número 6 na posição 4 */
num[4] = 6

/* .push é para adicionar a última posição o número 9 */
num.push(9)

console.log(`Nosso vetor é -> ${num}`)

/* Posições do vetor entra [0 , 1 , 2 , 3 , ...] */
console.log(`O Segundo valor do vetor é ${num[1]}`)

/* .length para medir o comprimento da nossa array */
console.log(`Há ${num.length} de elementos dentro do nosso array`)

console.log(`Os vetores posicionados de formar crescente -> ${num.sort()}`)

/* .indexOf(8) Faz com que procure no vetor em qual posição o número 8 está */
let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
}
else {
    console.log(`O valor está na posição ${pos}, segundo o vetor crescente!`)
}
