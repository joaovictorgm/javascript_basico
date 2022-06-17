

let pilot = prompt("Qual o seu nome piloto?")

let velocity = 0

let spaceship = prompt("Para qual velocidade você gostaria de acelerar a nave?")
let con = confirm("Está indo para a velocidade " + spaceship + "km/s")

if(con){
    velocity = spaceship
}

if (velocity <= 0){
    alert("Piloto: " + pilot + " \nVelocidade: " + velocity+ "\nNave está parada. Considere partir e aumentar a velocidade")
    
    }else if (velocity < 40){
        alert("Piloto: " + pilot + " \nVelocidade: " + velocity + "\nVocê está devagar. podemos aumentar mais")

    }else if (velocity >= 40 && velocity < 80){
        alert("Piloto: " + pilot + "\nVelocidade: " + velocity + "\nParece uma boa velocidade para manter")

    }else if (velocity >= 80 && velocity < 100){
       alert("Piloto: " + pilot + "\nVelocidade: " + velocity + "\nVelocidade alta. Considere diminuir.")

    } else {
        alert("Piloto: " + pilot + "\nVelocidade: " + velocity + "\nVelocidade perigosa. Controle automático forçado")
    }
   
  
 








