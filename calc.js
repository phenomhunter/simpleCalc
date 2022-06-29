let displayIn = document.getElementById("log");


function mult() {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let result = num1 * num2
    displayIn.innerText = result
}

function sum() {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let result = parseInt(num1) + parseInt(num2)
    displayIn.innerText = result
}

function div() {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let result = num1 / num2
    displayIn.innerText = result
}