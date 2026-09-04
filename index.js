let homePoint = document.getElementById("home-point")
let guestPoint = document.getElementById("guest-point")
let firstNum = 0
let secondNum = 0

function homeAdd1(){
    firstNum = firstNum + 1
    homePoint.textContent = firstNum
}

function homeAdd2(){
    firstNum = firstNum + 2
    homePoint.textContent = firstNum
}

function homeAdd3(){
    firstNum = firstNum + 3
    homePoint.textContent = firstNum
}

function guestAdd1(){
    secondNum = secondNum + 1
    guestPoint.textContent = secondNum
}

function guestAdd2(){
    secondNum = secondNum + 2
    guestPoint.textContent = secondNum
}

function guestAdd3(){
    secondNum = secondNum + 3
    guestPoint.textContent = secondNum
}


