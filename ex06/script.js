let velocityStart = 150

alert("Atenção, desacelerando!")

function slowDown(velocity, printer){
    while(velocity>0){
        let newVelocity= reduction(velocity)
        printer(newVelocity)
        velocity=newVelocity
    }
}

function reduction(velocity){
    return velocity -=5
}

let stateVel = velocity => {
    if(velocity>0){
        alert("Nave desacelerando, velocidade atual de " + velocity + "Km/s")
    }else{
        alert("Nave pronta para desembarque")
        
        
    }
}

let Vel = slowDown(velocityStart, stateVel)

alert(Vel)

//Outra versão

/*function slowDown(velocity, printer) {
    let deceleration = 20

    while(velocity > 0) {
        printer(velocity)
        velocity -= decelaration
    }

    alert("Nave parada. As comportas podem ser abertas.")
}

    let spaceshipVelocity= 150

    slowDown(spaceshipVelocity, function(velocity) {
        alert("Velocidade atual: " + velocity)
    })*/
