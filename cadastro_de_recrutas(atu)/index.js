

recruits = []

function showMenu()
   {
     const interativeMenu = prompt("Cadastro de Recrutas\n No total temos " + recruits.length + " cadastrados.\n O que você deseja fazer\n \n>>Opção 1 - Cadastrar recruta\n>>Opção 2 - Listar recrutas cadastrados\n>>Opção 3 - Sair" )
     return interativeMenu
   }

   function execute(){
    let interativeMenu = ""

    do{
        interativeMenu = showMenu()
        
        
        switch(interativeMenu){
            case "1":
                newRecruits()
                break
            case "2":
                showRecruits()
                break
            case "3":
                alert("Saindo...")
                break
            default:
                alert("Opção inválida")
        }
    } while(interativeMenu !== "3")
   }
   execute()


   function newRecruits(){
    recruit = {}
    recruit.firstName = prompt("Primeiro Nome:")
    recruit.lastName = prompt("Sobrenome:")
    recruit.studyCamp = prompt("Campo de Estudo:")
    const yearBirth = prompt("Nascimento:")
    recruit.birth = 2022 - yearBirth

    const confirmation = confirm("Você confirma as alterações?\nPrimeiro Nome: " + recruit.firstName + "\nSobrenome: " + recruit.lastName + "\nCampo de Estudo: " + recruit.studyCamp + "\nIdade:" + recruit.birth)

    if(confirm){
        recruits.push(recruit)
        alert("Novo Recruta cadastrado")
         
    } else{
        alert("Não foi possivel cadastrar")
    }

   }

   function showRecruits(){ 
    if(recruits.length === 0 ){
    alert("Não há recrutas cadastrados")
   } else {
   for(let i = 0; i < recruits.length;i++)
   alert("Recruta: " + (i + 1) + "\nNome " + recruits[i].firstName + "\nSobrenome: " + recruits[i].lastName + "\nCampo de estudo: " + recruits[i].studyCamp + "\nIdade: " + recruits[i].studyCamp )
   
   }
}
   











