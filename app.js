const Output = document.querySelector("#outputText")

let numInput = ""
let leftSide = 0
let operator = ""
let rightSide = 0
let operatorCount = 0

Output.innerText = ""

document.querySelector(".container").onclick = function(e) {
    if ((e.target.id) === "1" || (e.target.id) === "2" || (e.target.id) === "3" || (e.target.id) === "4" || (e.target.id) === "5" || (e.target.id) === "6" || (e.target.id) === "7" || (e.target.id) === "8" || (e.target.id) === "9" || (e.target.id) === "0") {
        numInput+=(e.target.id)
        console.log(numInput)
        //** POPULATE NUMINPUT TO HTML OUTPUT */
        Output.innerText = numInput
    } else if ((e.target.id) === "+" || (e.target.id) === "-" || (e.target.id)=== "*" || (e.target.id)=== "/") {
        operatorCount = operatorCount + 1
        if (operatorCount > 1 ) {
            rightSide = parseInt(numInput)
            
            // Ready to evaluate your expression and set it to leftSide, then set rightSide to 0.
            if (operator === "+"){
                leftSide = leftSide + rightSide
            } else if (operator === "-") {
                leftSide = leftSide -rightSide
            } else if (operator === "*") {
                leftSide = leftSide * rightSide
            } else {
                leftSide = leftSide / rightSide
            }

            rightSide = 0
            operator = (e.target.id)

        } else {
            operator = (e.target.id)
            leftSide = parseInt(numInput)
        }
        numInput = ""
        
    } else if ((e.target.id) === "=" ){
        rightSide=parseInt(numInput)
        if (operator === "+"){
            leftSide = leftSide + rightSide
        } else if (operator === "-") {
            leftSide = leftSide -rightSide
        } else if (operator === "*") {
            leftSide = leftSide * rightSide
        } else {
            leftSide = leftSide / rightSide
        }
        console.log(leftSide)
        numInput = ""
        Output.innerText = leftSide
        //**POPULATE leftSide TO HTML CALC
        
    } else {
        numInput = ""
        leftSide = 0
        operator = ""
        rightSide = 0
        operatorCount = 0

        Output.innerText = ""
        
        /**POPULATE LS TO HTML CALC */
        console.log("clear")
    }
}