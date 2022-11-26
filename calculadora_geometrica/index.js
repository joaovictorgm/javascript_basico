let interativeMenu = ""

do{
    interativeMenu = parseFloat(prompt("Bem vindo a calculadora geométrica, escolha a opção que você deseja calcular?\n\n>>Opção - 1 Área do triângulo\n>>Opção - 2 Área do retângulo\n>>Opção - 3 Área do quadrado\n>>Opção - 4 Área do trapézio\n>>Opção - 5 Área do circulo\n>>Opção - 6 Sair"))

    switch(interativeMenu){
        case 1:
             function triangle(baseTriangle, heightTriangle){
              
                 return alert ("A área do triângulo é " +  baseTriangle * heightTriangle / 2)
            }
                                    
             let baseTriangle = prompt("Qual a base do triângulo?")
           
            let heightTriangle = prompt("Qual a altura do triângulo?")
            
            
            triangle(baseTriangle, heightTriangle)
            
            break
        case 2:
               function Rectangle(baseRectangle, heightRectangle){
                return alert("A área do retângulo é  " + (baseRectangle * heightRectangle))
               }    
        let baseRectangle = prompt("Qual a base do retângulo?")

        let heightRectangle = prompt("Qual a altura do retângulo?")
                  
           Rectangle(baseRectangle, heightRectangle)     
           break
        case 3:
                function square(side){
                return alert("A área do quadrado é  " + (side**2))
            }

            let side = prompt("Qual o lado do quadrado?")
            square(side)            
            break
        case 4:
                function trapeze(largerBase, smallerBase, height){
               return alert("A área do trápezio é  " + ((largerBase + smallerBase) * (height / 2)))
            }

            let largerBase = parseInt(prompt("Qual a  base maior?"))

            let smallerBase = parseInt(prompt("Qual a base menor?"))

            let height = parseInt(prompt("Qual a altura?"))

            trapeze(largerBase, smallerBase, height)
                        
            break
        case 5:
            function circle(radius){
                alert("A área do circulo é  " + (3.14 * radius**2) )
            }
            let radius = prompt("Qual o raio do circulo?")

            circle(radius)
            break
        case 6:
            alert("Encerrando programa...")
            break
        default:
            alert("Opção inválida!!")
    }


} while(interativeMenu !== 6)

// Resolução Professor 

/*function calcularAreaRetangulo(){
    const base = prompt("Informe a base do retângulo:")
    const altura = prompt("Informe a altura do retângulo:")
    return base * altura
}

function calcularAreaQuadrado(){
    const lado = prompt("Informe o lado do quadrado:")
    return lado * lado
}

function calcularAreaTrapezio() {
    const baseMaior = prompt("Informe a base maior do trapézio:")
    const baseMenor = prompt("Informe a base menor do trapézio:")
    const altura = prompt("Informe a altura do trapézio")
}

function calcularAreaTriangulo() {
    const base = prompt("Informe a base do triângulo:")
    const altura = prompt("Informe a altura do triângulo")
    return base * altura 

}

function calcularAreaCirculo() {
const raio = prompt("Informe o raio do círculo:")
return (3.14 * raio * raio)
}

function exibirMenu() {
    return prompt(
      "Calculador Geométrica\n" + 
      "1. Calcular área de triângulo\n" + 
      "2. Calcular área do retângulo\n" + 
      "3. Calcular área do quadrado\n" + 
      "4. Calcular área do trapézio\n" + 
      "5. Calcular área do circulo\n" + 
      "6. Sair\n" 
    )
}

function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()
        let resultado

        switch (opcao) {
            case "1":
                resultado = calcularAreaTriangulo()
                break
            case "2":
                resultado = calcularAreaRetangulo()
                break
            case "3":
                resultado = calcularAreaQuadrado()
                break
            case "4":
                resultado = calcularAreaTrapezio()
                break
            case "5":
                resultado = calcularAreaCirculo()
                break
            case "6":
                alert("Saindo...")
            default:
                alert("Opção inválida")
        }
    }while (opcao !== "6")
}*/