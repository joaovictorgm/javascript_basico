//fora da função é considerado escopo externo
//as variáveis externas podem ser usadas no escopo interno
let pokemon = "Charmander"

function evoluir() {
    //dentro da função é considerado escopo interno
    pokemon ="Charmeleon"
}



console.log(pokemon)
evoluir()
console.log(pokemon)

//variaveis que são declaradas no escopo interno nao funcionam no escopo interno

//variaveis declaradas com "var" elas funcionam quando são chamadas no escopo externo, não é aconselhavel pois pode prejudicar o código em questão de leitura, o var dentro de uma função não se aplica 
