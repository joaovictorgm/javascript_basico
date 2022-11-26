// exemplo de funções anônimas

function somar (a, b){
    return a + b
}

const operacao = somar

console.log(operacao(4, 5))

const subtrair = function (a, b){// funções anônimas são funções que não precisam de nome
    return a - b
}

console.log(subtrair(41, 25))

//as funções anônimas só estarâo disponiveis depois da declaração da varíavel