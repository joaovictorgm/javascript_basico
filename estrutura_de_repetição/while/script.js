let spaceship = prompt("Qual o nome da nave?")

let warpSpace = prompt("Deseja entra em dobra espacial?\n\n1-Sim\n2-Não")

let cont = 0

 
while(warpSpace == "1"){
    
   warpSpace =  prompt("Deseja realizar a próxima dobra?\n\n1-Sim\n2-Não")
   cont += 1
   {
    alert(" Nave: " + spaceship + " \nDobras: " + cont )   
   }    
    
   
}


