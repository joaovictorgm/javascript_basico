let spaceship = prompt("Qual o nome da Aeronave?")
let counterSpaceship = ""

// S u p e r n o v a 
// 0 1 2 3 4 5 6 7 8 (-1 pega todos os caracteres)

for(let i = spaceship.length -1 ; i >= 0;  i-- ){
    if(spaceship[i] == "e"){
        break
           
    }
     counterSpaceship += spaceship[i]
    }
    alert("Nome original da nave: " + spaceship + "\nNome após ocultação:" + counterSpaceship)

