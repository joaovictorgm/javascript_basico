
let interativeMenu = ""


let pacient = ["Mateus", "João", "Gabriel", "Marcos", "Raquel"]

do{
     // Com essa estrutura sera possivel mostra no menu os nomes dentro do array
     let listPacient = ""
     for(let i = 0; i < pacient.length;i++){
          listPacient += (i + 1) + "° - " + pacient[i] + "\n"
     }
    


interativeMenu = parseFloat(prompt("Bem vindo ao menu hospitalar.\nPacientes:\n " + listPacient + "\n   escolha uma das opções:\n\n>>Opção 1 - Consultar paciente \n >>Opção 2 - Adicionar novo paciente \n >>Opção 3 - Encerrar menu" ))





switch (interativeMenu){
   
    case 1:
         const consultPacient = pacient.shift()
         //nessa estrutura considerará o valor como booleano
         if(consultPacient){
          alert("O paciente " + consultPacient + " foi consultado")
           }else{
               alert("Não há pacientes na fila")
           }
          break
    case 2:
        let newPacient = prompt("Qual o nome do novo paciente?")
        pacient.push(newPacient)
        alert("O paciente " + newPacient + " foi adicionado a fila ")
              
       
        break
     case 3:
          alert("Programa encerrado")
          break
    default:
        alert("Opção invalida.")    

     }
 }while(interativeMenu !== 3)


 
