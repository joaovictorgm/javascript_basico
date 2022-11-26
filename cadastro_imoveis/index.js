let interativeMenu = ""
let list = ""

let houses = []

do{
    interativeMenu = parseFloat(prompt("Bem vindo ao cadastro de Imoveis.\nImoveis cadastrados: " + houses.length + "\n\nO que você deseja fazer?\n>>Opção 1 - Cadastrar Imóveis\n>>Opção 2 - Mostrar Imoveis cadastrados\n>>Opção 3 - Sair"))

    switch(interativeMenu){
      case 1:
        const house = {}

        house.name = prompt("Qual o nome do propietário?")

         house.rommQuantity = parseFloat(prompt("Qual a quantidade de quartos?"))

         house.bathroomQuantity = parseFloat(prompt("Qual a quantidade de banheiros?"))

         house.garage = prompt("Possui garagem?")

         const ok = confirm("Salvar este imóvel?\nproprietário: " + house.name + "\nQuartos: " + house.rommQuantity + "\nBanheiros: " + house.bathroomQuantity + "\nPossui garagem: " + house.garage )

         if(confirm){
           houses.push(house)
         alert("imóvel cadastrado com sucesso")
                    }  
      break
           
                 
      case 2:
         if(houses.length === 0){
          alert("Não há imóveis cadastrados. ")
           }else{
         for(let i = 0; i < houses.length; i++){
            alert ("Imóvel:" + (i + 1) + "\nNome do proprietario: " + houses[i].name + "\nQuantidadedequartos: " + houses[i].rommQuantity + "\nQuantidade de banheiros: " + houses[i].bathroomQuantity + " \nPossui garagem? " + houses[i].garage + "\n\n")
            
           } 
                       
        }
           
            
        
        break
      case 3:
        alert("Programa encerrado")
        break
      default:
        alert("Opção invalida")

    }

   
} while(interativeMenu !== 3)