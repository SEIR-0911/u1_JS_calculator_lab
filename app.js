//VARIABLES//
let clear = document.querySelector('#clear')
let screen = document.querySelector('#screen')
let zero = document.querySelector('#zero')
let one = document.querySelector('#one')
let two = document.querySelector('#two')
let three = document.querySelector('#three')
let four = document.querySelector('#four')
let five = document.querySelector('#five')
let six = document.querySelector('#six')
let seven = document.querySelector('#seven')
let eight = document.querySelector('#eight')
let nine = document.querySelector('#nine')
let divide = document.querySelector('#divide')
let multiply = document.querySelector('#mult')
let subtract = document.querySelector('#sub')
let addition = document.querySelector('#add')
let decimal = document.querySelector('#dec')
let equal = document.querySelector('#equal')

console.log(screen.innerHTML)
//FUNCTIONS//

const one1 = () => {
    screen.innerHTML += 1
}
const screen1 = () => {
    screen.innerHTML = ''
}


//EVENTLISTENERS//

one.addEventListener('click', one1)
clear.addEventListener('click', screen1)