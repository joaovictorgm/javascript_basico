let car1 = prompt("Primeiro Veiculo:")

let velocity1 = prompt("Qual a sua velocidade em Km/h?")

let car2 = prompt("Segundo Veiculo:")

let velocity2 = prompt("Qual a sua velocidade em Km/h?")

if(velocity1 > velocity2){
    alert(car1 + " têm mais velocidade com " + velocity1 + "km/h")
} else if (velocity2 > velocity1){
    alert(car2 + " têm mais velocidade com " + velocity2 + "km/h")
} else {
    alert("Eles possuem velocidades iguais.")
}
