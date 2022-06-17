var lightyears = prompt("Qual a distância em anos luz?")

alert("Escolha uma das opções:")

var option = prompt("[1] Parsec(pc)\n[2] Unidade astrônomica(AU)\n[3] Quilômetros(km)")
var parsec = lightyears*0.306601

var Unidade = lightyears*63241.1

var Quilometros = lightyears*9.5*Math.pow(10, 12) 

switch(option){
    case "1":
        alert(lightyears + " Distância em anos luz, convertidos para " + parsec + " parsec" )       
        break
    case "2": 
         alert(lightyears + " Distância em anos luz, convertidos para " + Unidade + " Unidade Astrônomica " )
        break
    case "3":
         alert(lightyears + " Distância em anos luz, convertidos para  " + Quilometros + "Km\s")
    default:
        console.log("Numero não listado.")

}

