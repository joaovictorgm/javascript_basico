let spaceship = {
    name: prompt('Digite o nome da sua nave:'),
    type: prompt('Digite o tipo da sua nave:'), 
    maxVelocity:Number(prompt('Qual a velocidade maxima da nave?')),
    velocity: 0,
    acceleration: function(Speed){
        if(this.velocity <= this.maxVelocity){
            this.velocity += Speed
        }
        if(this.velocity > this.maxVelocity){
            alert('Você está ultrapassando a velocidade máxima, incializando parada de segurança e diminuindo velocidade.')
            this.velocity = this.maxVelocity
        }

    }
}

let option = Number(prompt('O que você deseja fazer?\n\n1-Acelerar Nave\n2-Parar Nave\n3-Sair'))

while(option!=3){
    switch(option){
        case 1:
            let Speed = Number(prompt('Quantos KM/s iremos acelerar?'))
            spaceship.acceleration(Speed)
            break
        
        case 2:
            alert('Nave parando.\nNome:'+ spaceship.name + '\nTipo:' + spaceship.type+ '\nVelocidade:' + spaceship.velocity)
            break
                   

    }
    option = Number(prompt('O que você deseja fazer?\n\n1=Acelerar Nave\n2-Parar Nave\n3-Sair'))

}

// Versão Resolução do Professor

/*

let spaceship = {
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration
    }
}

function registerSpaceship() {
    spaceship.name = prompt('Informe o nome da nave')
    spaceship.type = prompt('Informe o tipo da nave')
    spaceship.maxVelocity = Number(prompt('Informe a velocidade máxima da nave (km/s)'))
}

function acelerate() {
    let acceleration = Number(prompt('Quanto você quer acelerar?(km/s)'))
    spaceship.speedUp(acceleration)
    if(spaceship.velocity > spaceship.maxVelocity){
     alert('VELOCIDADE MÁXIMA ULTRAPASSADA!' + '\nVelocidade da Nave: ' + spaceship.velocity + 'km/s'+ '\nVelocidade máxima da Nave: ' + spaceship.maxVelocity + 'km/s' )
  }

}

function stop() {
    alert( 'Nome: ' + spaceship.name + '\nTipo: ' + spaceship.type + '\nVelocidade da nave: ' + spaceship.velocity + '\nMáxima da Nave: ' + spaceship.maxVelocity)
    spaceship.velocity = 0
} 

function showMenu() {
    let chosenOption
    do{
        chosenOption = prompt('Você deseja:\n1- Acelerar\n2- Parar')
        switch(chosenOption) {
            case "1":
                acelerate()
                    break
            case "2":
                stop()
                break
            default:
                alert('Opção invalida')

                
        }
    }while(chosenOption != "2")
}

registerSpaceship()
showMenu
*/


 
    