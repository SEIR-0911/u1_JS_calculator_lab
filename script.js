const buttons = document.querySelectorAll('.num-button')
const calcScreen= document.querySelector('.calc-screen')
// const keyPress = document.querySelectorAll('.num-button')
let mathTotal 
let mathStuff = []
const currentDate = new Date()
const timestamp = currentDate.getTime();


function calculate(button){
    console.log(button)

    const value = button.textContent
    if (value === 'C'){
        mathStuff = []
        calcScreen.textContent = '0'
    } else if (value === '='){
        calcScreen.textContent = eval(mathTotal)
        console.log(eval(mathTotal))
    } else{ 
        mathStuff.push(value)
        mathTotal = mathStuff.join('')
        calcScreen.textContent = mathTotal
        console.log(mathStuff)
    }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))

keyPress = (event) => {
    console.log(event)
    const value = event.textContent
    calculate(event)
}


setInterval(showTime, 1000);
 
// Defining showTime funcion
function showTime() {

    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
  
 
    if (hour >= 24) {
        if (hour > 24) hour -= 24;
    
    } else if (hour == 0) {
        hr = 24;
        
    } 
 
    hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime = hour + ":" + min + ":" + sec ;
      
 
    document.querySelector(".watch-feature").innerHTML = currentTime;
}
 
showTime();

// function clickCounter(){
//     if (localStorage.mathTotal) {
//         localStorage.mathTotal = Number(localStorage.mathTotal)+1;
//         console.log(localStorage.mathTotal)
//     } else {
//         localStorage.mathTotal = 1;
//     }
// }