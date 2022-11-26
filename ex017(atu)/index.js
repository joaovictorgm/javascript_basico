/*function ola(){
    alert("Olá mundo!!")
}

ola()
ola()
ola()*/

//parametro de uma função

function dobro(x){
    alert("O dobro de " + x + " é " + (x *2))
}


/*dobro(5)
dobro(7)*/

function dizerOla(name = "mundo"){
    alert("Olá, " + name + "!")
}

//dizerOla("João Victor")
//dizerOla()

function soma(a, b){
    alert("O resultado da soma é " + (a + b))
}

/*soma(7, 8)
soma(1000, 500)*/

function criarUsuario(nome, email, senha, tipo = "admin"){
    const usuario = {
        nome, // mesmo que nome:nome
        email,
        senha,
        tipo
    }
    console.log(usuario)
}

//criarUsuario("João Victor", "João Victor@gmail.com", "1234")

//simplificando as funçôes

function muitosParametros(nome, telefone, endereco, aniversario, email, senha ) {
    //...
}

function objetoComoParametro(usuario){
    usuario.nome
    usuario.email
}

muitosParametros("nome", "telefone", "endereco", "aniversario", "email", "senha")

const dadosDoUsuario = {
    nome:"",
    telefonoe:"",
    endereco:"",
    aniversario:"",
    email:"",
    senha:"",
}

//objetoComoParametro(dadosDoUsuario)

//Retorno de uma função

//return permite que trabalhe com resultados de funções fora da função
function calcularMedia(a, b){
    const media = (a + b) / 2
    return media
}
const resultado = calcularMedia(6, 2)

//console.log(resultado)

function criarProduto(nome, preco){
    const produto = {
        nome, //nome: nome
        preco,//preco: preco
        estoque: 1 
    }
    return produto
}
/*const notebook = criarProduto("Notebook Intel Core i3 8GB", 2500)

console.log(notebook)*/

//console.log(criarProduto("Notebook Intel Core i3", 2500))

function areaRetangular(base, altura){
    //return pode funcionar como variável
    return base * altura
    
}

function areaQuadrada(lado){
    // chama outra função adicionando novos parâmetros
    return areaRetangular(lado, lado)
}

//console.log(areaRetangular(3, 5))

//console.log(areaQuadrada(9))

//Uma função só pode retornar uma única vez 

//Funções com ramificações podem ter mais de um return "if" e "switch" por exemplo

function maioridade(idade){
    if(idade >= 18){
        return "Maior de idade"
    }else{
        return "Menor de idade"
    }
}

console.log(maioridade(29))
console.log(maioridade(14))