// High-Order Functions são funções que tem outras funções como parâmetro

//Exemplo de High-Order Functions

/*function calcular (a, b, operacao) {
    console.log("Realizando uma operação.")
    const resultado = operacao(a, b) //somar(3, 5)
    return resultado
}

function somar(x, y) {
    console.log("Realizando uma soma.")
    return x + y
}

console.log(calcular(3, 5, somar))
//função anônima dentro da propria chamada high-order function
console.log(calcular(8, 4,function (x, y){
    console.log("Realizando uma subtração.")
    return x - y
}))
//funções que são passadas como parâmetro geralmente são chamadas de callbacks
function exibirElemento(elemento, indice, array) {
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ["Maça", "Banana", "Limão" , "Uva"]

for (let i = 0; i < lista.length; i++) {
     exibirElemento(lista[i], i, lista)
}
//forEach é uma função que percorre todo o elemento como a estrutura for
lista.forEach(exibirElemento)

lista.forEach(function(elemento, indice, array){
    console.log({
       elemento,
    indice,
    array  
    })
   })*/

   const personagens = [
    { nivel: 42, nome: "Thral", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro"},
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro"},
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino"},
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga"},
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa"},
    { nivel: 29, nome: "Muradin", raca: "Anao", classe: "Guerreiro"}
   ]

   // Map faz o mapeamento de arrays e permite obter um novo array a partir de um novo existente

   /*const nomes = []

   for (let i = 0; i < personagens.length; i++){
    nomes.push(personagens[i].nome)
   }

   console.log(nomes)*/

   const nomes = personagens.map(function(personagens) {
    return personagens.nome
   })

   //console.log(nomes)

   //filter filtra elementos especificos no array e obtem um novo array

   /*-const orcs = []

   for (let i = 0; i < personagens.length; i++ ){
    if (personagens[i].raca === "Orc") {
        orcs.push(personagens[i])
    }
   }

   console.log(orcs)*/

   const orcs = personagens.filter(function(personagens){
    return personagens.raca === "Orc"
   })

   //console.log(orcs)

   //Reduce serve para reduzir um array existente a um valor final qualquer.

   const nivelTotal = personagens.reduce(function (valorAcumulado, personagens){
    return valorAcumulado + personagens.nivel
   }, 0)

   console.log(nivelTotal)

   const racas = personagens.reduce(function(valorAcumulado, personagens){
    if (valorAcumulado[personagens.raca]) {
        valorAcumulado[personagens.raca].push(personagens)
    } else {
        valorAcumulado[personagens.raca] = [personagens]
    }

    return valorAcumulado
   }, {})

   //console.log(racas)

   //Sort ordena os elementos de um array a partir de comparações entre duplas de elementos 

   // com slice é criado uma novo array com os niveis ordenados
   const personagensOrdenados = personagens.slice().sort(function (a, b){
     return b.nivel - a.nivel
   })

   console.log(personagens)
   console.log(personagensOrdenados)

