
//Arrays bidimensionais
const hitchedSpaceships= [
    ["Fenix", 8, true],  //element
    ["Golias", 10, true], //element
    ["Helmet", 5, false],//element
    ["Elemenal", 3,true],//element
    ["Darwin", 15,false],//element
]

let filterSpaceships = hitchedSpaceships.filter(element =>{
    return element[1] > 9
}).map(element => {
    return element [0]
})
 //retorna nave com mais tripulantes

let firstSpaceships = hitchedSpaceships.findIndex(element =>{
    return element[2] == false
})
// retorna elementos com false

let upperCase = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})
// coloca as strings em letra maiúscula


let message = "Nave com mais tripulantes: " + filterSpaceships.join(",")
message += "\nNave que não está pronta: " + (firstSpaceships + 1)
message += "\n Nome das naves em Letras maiusculas:" + upperCase.join(",")
// O método join() junta todos os elementos de uma array em uma string e retorna esta string.

alert (message)