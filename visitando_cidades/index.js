    const name = prompt("Qual é o seu nome viajante?")

    let visitedCitys = prompt("Você já visitou alguma cidade?\n1.Sim 2.Não")

    let citysquantity = 0

    let citys = ""

    //repetirá enquanto o usuário confirmar que sim
    while(visitedCitys === "1") {
    //adicionará as cidades informadas na variável "citys" até a resposta ser ao contrario
    citys += prompt("Informe a cidade que você visitou?") + "  " + " - " 
    //adicionará ao contador de cidades +1
    citysquantity++
    //voltará a fazer a mesma pergunta novamente
    visitedCitys= prompt("Você visitou outra cidade?\n1.Sim 2.Nâo")


} 

    alert("Nome: " + name + "\nCidades visitadas: " + citys+ "\nQuantidade de Cidade Visitadas: "+ citysquantity)