// métodos são funções atreladas a objetos
 let pessoa = {
    name:"João Victor",
    idade:26,
    //método
    dizerOla(){
     console.log("Olá mundo! Meu nome é  " + this.name)   
    }

 }

 console.log(pessoa)

 pessoa.dizerOla()