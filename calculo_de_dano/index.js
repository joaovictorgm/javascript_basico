let character1 = prompt("Qual o nome do  personagem atacante?")

let attackPower = Number(prompt("Qual é o seu poder de ataque?"))

let character2 = prompt("Qual o nome do  personagem defensor?")

let defensivePower = Number(prompt("Qual o poder de defesa?"))

let hp = Number(prompt("Quantos pontos de vida tem seu personagem?"))

let shield = prompt("Ele possui um escudo? S/N")



if (attackPower > defensivePower && (shield == "N" || shield == "n")) {
    
   hit = attackPower - defensivePower

   hp -= hit

    alert("O personagem " + character2 + " tomou " + hit + " de dano e ficou com " + hp + " de vida.")

} else if ( attackPower > defensivePower && (shield == "S" || shield == "s")){

    hit = (attackPower - defensivePower) / 2 

    hp -= hit

    alert("O personagem " + character2 + " tomou " + hit + " de dano e  ficou com " + hp + " de vida.")


} else if (attackPower <= defensivePower){
    alert("O personagem " + character2 + " nao sofreu dano.")
}