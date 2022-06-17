let spaceship = prompt("Qual o nome da aeronave?")

let newSpaceship = ""

let hide = prompt("Qual o caracter que deseja substituir?")

let sub = prompt("Por qual caracter que deseja substituir?")

for(let i = 0; i < spaceship.length; i++){
    if(spaceship[i] == hide){
        newSpaceship += sub
} else {
    newSpaceship += spaceship[i]
}
}
alert("O novo nome da nave è " + newSpaceship)