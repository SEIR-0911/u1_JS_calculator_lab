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
let leftNumber = ''
let rightNumber = ''
let sideSwitch = true
let mainOperator = ''
array = [zero, one, two, three, four, five, six, seven, eight, nine]
//FUNCTIONS//
const screen1 = () => {
    screen.innerHTML = ''
    leftNumber = ''
    rightNumber = ''
    mainOperator = ''
    sideSwitch = true
}
function mainButtons(num) {
    screen.innerHTML += num
    screen.innerHTML +- num
    if (sideSwitch === true) {
        leftNumber = leftNumber + num
    } else {
        rightNumber = rightNumber + num
    }
}
function buttonOperators(bun) {
    sideSwitch = false
    mainOperator = bun
}
function equals() {
    if (mainOperator === '/') {
        screen.innerHTML = parseFloat(leftNumber)/parseFloat(rightNumber)
    } else if (mainOperator === 'x') {
        screen.innerHTML = parseFloat(leftNumber)*parseFloat(rightNumber)
    } else if (mainOperator === '-') {
        screen.innerHTML = parseFloat(leftNumber)-parseFloat(rightNumber)
    } else if (mainOperator === '+') {
        screen.innerHTML = parseFloat(leftNumber)+parseFloat(rightNumber)
    }
}
//EVENTS//
clear.addEventListener('click', screen1)
decimal.addEventListener('click', () => {mainButtons('.')})
equal.addEventListener('click', equals)
divide.addEventListener('click', () => {mainButtons('/'); buttonOperators('/');})
multiply.addEventListener('click', () => {mainButtons('x'); buttonOperators('x');})
subtract.addEventListener('click', () => {mainButtons('-'); buttonOperators('-');})
addition.addEventListener('click', () => {mainButtons('+'); buttonOperators('+');})
for (let i = 0; i < 10; i++) {
    array[i].addEventListener('click', () => {mainButtons([i])})
} 
for (let i = 0; i < 10; i++) {
    document.body.addEventListener('keydown', (ev) => {
    let keyss = i.toString()
    if (ev.key === keyss)
        mainButtons([i])})
} 
document.body.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') {
        equals();
    }
})
document.body.addEventListener('keydown', (ev) => {
    if(ev.key === 'Backspace') {
        screen1()
    }
})
document.body.addEventListener('keydown', (ev) => {
    if(ev.key === '/') {
        mainButtons('/');
        buttonOperators('/');
    }
})
document.body.addEventListener('keydown', (ev) => {
    if(ev.key === '*') {
        mainButtons('x');
        buttonOperators('x');
    }
})
document.body.addEventListener('keydown', (ev) => {
    if(ev.key === '-') {
        mainButtons('-');
        buttonOperators('-');
    }
})
document.body.addEventListener('keydown', (ev) => {
    if(ev.key === '+') {
        mainButtons('+');
        buttonOperators('+');
    }
})
document.body.addEventListener('keydown', (ev) => {
    if(ev.key === '.') {
        mainButtons('.');
        buttonOperators('.');
    }
})






