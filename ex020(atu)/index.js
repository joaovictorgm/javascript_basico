//função recursiva é uma função que chama ela mesma

function dividir(num){
    console.log(num)
    if(num % 2 === 0){
        dividir(num / 2)
    }else{
        return num
    }
}

//dividir(80)

//exemplo de função que se chama infinitamente
/*function dobrar(num){
    console.log(num)
    dobrar(num * 2)
}

dobrar(1)*/

//fatorial de 5: !5 === 5 * 4 * 3 * 2 * 1 === 5 * !4
function fatorial(num){
    console.log("Numero:" + num)
    if (num === 0 ) {// caso base, serve para dar um fim na função nao deixando ela infinita
        return 1
    } else if (num ===1) {
        return 1
    } else {
        console.log(num + " * !" + (num - 1))
        return num * fatorial(num - 1)
    }
}

console.log(fatorial(7))