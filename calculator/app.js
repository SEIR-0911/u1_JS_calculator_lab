let total = 0.0
const nums = [0,1,2,3,4,5,6,7,8,9]
const symbols = ['/', '-', 'x', '+']

let currentOperator = ''
let screenChange = false

document.querySelectorAll('.column').forEach(button => {
    button.addEventListener('click', () => {
        let currentScreen = document.querySelector('#screen').innerHTML
        let buttonPress = button.innerHTML
        if (nums.includes(parseInt(buttonPress)) || buttonPress == '.') {
                if ((currentScreen == '0' ) &&  (currentOperator != ''  || screenChange == false)) {
                    document.querySelector('#screen').innerHTML = buttonPress
                } else if (screenChange == true) {
                    total += parseFloat(document.querySelector('#screen').innerHTML)
                    document.querySelector('#screen').innerHTML = buttonPress
                    screenChange = false
                } else {
                    document.querySelector('#screen').innerHTML += buttonPress
                }
        } else if (symbols.includes(buttonPress)) {
            currentOperator = buttonPress
            screenChange = true
            console.log(currentOperator)
        } else if (button.innerHTML == '=') {
            if (currentOperator == '/') {
                document.querySelector('#screen').innerHTML = parseFloat(total) / parseFloat(document.querySelector('#screen').innerHTML) 
            } else if (currentOperator == '+') {
                document.querySelector('#screen').innerHTML = parseFloat(total) + parseFloat(document.querySelector('#screen').innerHTML) 
            } else if (currentOperator == 'x') {
                document.querySelector('#screen').innerHTML = parseFloat(total) * parseFloat(document.querySelector('#screen').innerHTML) 
            } else if (currentOperator == '-') {
                document.querySelector('#screen').innerHTML = parseFloat(total) - parseFloat(document.querySelector('#screen').innerHTML) 
            }
            // total = document.querySelector('#screen').innerHTML
            screenChange = true
        } else if (button.innerHTML == 'ac') {
            total = 0
            currentOperator = ''
            screenChange = false
            document.querySelector('#screen').innerHTML = '0'
        }

        console.log(`button pressed ${button.innerHTML}`)

    })
});

