let words = prompt("Digite uma palavra:")

let invertedWord = ""
// no código abaixo  o "-1" faz o for ler a ultima posição ate a primeira
for(let i = words.length -1; i>=0;i--){
    //aqui adiciona a ultima letra até a primeira 
    invertedWord +=words[i]
}

if (words === invertedWord){
    alert( words + " é um palíndromo")
}else{
    alert( words + " não é um palíndromo\n" + words + "\n" + invertedWord)
}



