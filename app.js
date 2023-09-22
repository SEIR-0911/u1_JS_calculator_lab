let numInput = ""
let leftSide = 0
let operator = ""
let rightSide = 0


document.querySelector(".container").onclick = function(e) {
    if ((e.target.id) === "1" || (e.target.id) === "2" || (e.target.id) === "3" || (e.target.id) === "4" || (e.target.id) === "5" || (e.target.id) === "6" || (e.target.id) === "7" || (e.target.id) === "8" || (e.target.id) === "9" || (e.target.id) === "0") {
        numInput+=(e.target.id)
        console.log(numInput)
    } else if ((e.target.id) === "+" || (e.target.id) === "-" || (e.target.id)=== "*" || (e.target.id)=== "/") {
        operator = (e.target.id)
        leftSide = parseInt(numInput)
        numInput = ""
        console.log(operator +" operator , leftSide "+ leftSide+", numInput "+numInput)
        
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
        
    } else {
        console.log("clear")
    }
}