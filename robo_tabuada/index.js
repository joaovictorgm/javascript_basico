const number = parseFloat(prompt("Informe um número que deseja calcular a tabuada:"))

let result =""

for( let i= 0; i <= 20;i++){
    result += " >> " + number + " x " + i + " = " + (number *i)+ "\n"
}

alert("Resultado da tabuada de " + number + ":\n\n" + result)