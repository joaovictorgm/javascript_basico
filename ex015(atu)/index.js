const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"] 

console.log(arr)

// Adicionar Elementos 
// push
//final do array
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

//unshift
//começo do array

tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)

//pop
//remove o último elemento

let UltimateElement = arr.pop()
console.log(arr)
console.log(UltimateElement)

//shift
//remove o primeiro elemento

 UltimateElement = arr.shift()
 console.log(arr)
 console.log(UltimateElement)

 //Pesquisa por Elemento
 //includes 
 const inclui = arr.includes("Gandalf")
 console.log (inclui)

 //Pesquisa por indice
 //indexOf
 const indice = arr.indexOf("Gandalf")
 console.log(indice)

 //Cortar 
 //Slice
 const hobbits = arr.slice(0, 4)
 const outros = arr.slice(-4)
 console.log(arr)
 console.log(hobbits)
 console.log(outros)

 //Concatenar
 //concat
 const sociedade = hobbits.concat(outros, "Boromir")
 console.log(sociedade)

 //Substituição dos Elementos 
 //splice

 const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
 console.log(sociedade)
 console.log(elementosRemovidos)

 //Iterar(navega) pelos elementos do array
 for(let indice = 0; indice < sociedade.length;indice++){
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição "+ indice)
 }