//VARIABLES
//----Create JS-specific & DOM variables.  Initialize. 
const Output = document.querySelector("#outputText")

let numInput = ""
let leftSide = 0
let operator = ""
let rightSide = 0
let operatorCount = 0

Output.innerText = ""

//FUNCTIONS
//-----Function to evaluate & perform math equation based on the user-input operator string.  
function doTheMath(mathSignVar) {
    if (mathSignVar === "+"){
        leftSide = leftSide + rightSide
        return leftSide
    } else if (mathSignVar === "-") {
        leftSide = leftSide - rightSide
        return leftSide
    } else if (mathSignVar === "*") {
        leftSide = leftSide * rightSide
        return leftSide
    } else {
        leftSide = leftSide / rightSide
        return leftSide
    }
}

//EVENT LISTENERS
//----Event listener uses event objects to map to data values.  Math operations are then performed with the user-input values.
document.querySelector(".container").onclick = function(e) {
    if ((e.target.id) === "1" || (e.target.id) === "2" || (e.target.id) === "3" || (e.target.id) === "4" || (e.target.id) === "5" || (e.target.id) === "6" || (e.target.id) === "7" || (e.target.id) === "8" || (e.target.id) === "9" || (e.target.id) === "0") {
        numInput+=(e.target.id)
        console.log(numInput)
        Output.innerText = numInput

    } else if ((e.target.id) === "+" || (e.target.id) === "-" || (e.target.id)=== "*" || (e.target.id)=== "/") {
        operatorCount = operatorCount + 1
        if (operatorCount > 1 ) {
            rightSide = parseInt(numInput)
            doTheMath(operator)
            rightSide = 0
            operator = (e.target.id)
        } else {
            operator = (e.target.id)
            leftSide = parseInt(numInput)
        }
        numInput = ""
        
    } else if ((e.target.id) === "=" ){
        rightSide=parseInt(numInput)
        doTheMath(operator)
        numInput = ""
        Output.innerText = leftSide.toString()
    
    //----Final else statement resets the variable values when the user clicks "CLR" button.
    } else {
        numInput = ""
        leftSide = 0
        operator = ""
        rightSide = 0
        operatorCount = 0

        Output.innerText = ""
    }
}