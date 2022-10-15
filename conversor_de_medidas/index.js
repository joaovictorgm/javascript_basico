const valueMeters = parseFloat(prompt("Insira o valor em metros:"))

const converted = prompt("Escolha a unidade de medida para conversão: \n(mm)milímetro \n(cm)centímetro\n(dm)decímetro\n(dam)decâmetro\n(hm)hectômetro\n(km)quilômetro") 

switch(converted){
    case "mm":
        const valueMilimeters = valueMeters * 1000
        alert("O valor convertido em mm, ficou " + valueMilimeters +"mm")
        break
    case "cm":
        const valueCentimeters = valueMeters * 100
        alert("O valor convertido em cm, ficou " + valueCentimeters+"cm")
        break
    case "dm":
        const valueDecimeters = valueMeters * 10
        alert("O valor convertido em dm, ficou " + valueDecimeters + "dm")
        break
    case "dam":
        const valueDecameter = valueMeters / 0.1
        alert("O valor convertido em dam, ficou " + valueDecameter +"dam")
        break
    case "hm":
        const valueHectameter = valueMeters * 0.01
        alert("O valor convertido em hm, ficou " + valueHectameter + "hm")
        break
    case "km":
        const valueKilometer = valueMeters * 0.001
        alert("O valor convertido em km, ficou " + valueKilometer + "km")
        break
        default:
            alert("Opção inválida") 
}