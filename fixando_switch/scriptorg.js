let distanceInlY = prompt("Digite a distância em anos-luz?")

let chosenOption = prompt("Para qual unidade deseja converter?\n1. Parsec(pc)\n2. Unidade Astronômica (AU) \n3. Quilômetros (km)\n\n(Digite o número da opção desejada)")

let chosenUnity

let convertedDistance

switch(chosenOption) {
    case "1":
        chosenUnity = "Parsec"
        convertDstance = distanceInLy * 0.306601
        break
    case "2":
        chosenUnity="Unidade Astronômica"
        convertedDistance = distanceInLy * 63241.1
        break
    case "3":
        chosenUnity = "Quilômetros"
        convertedDistance = distanceiNlY * 9.5 * Math.pow(10, 12)
        break
    default:
        chosenUnity = "Unidade não identificada"
        convertedDistance= "Conversão fora do escopo"
}

alert("Distância em Anos-Luz: " + distanceInLy + "\n" + chosenUnity + ": + convetedDistance)
