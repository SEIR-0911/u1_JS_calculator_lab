function () {
    
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorall('.button');
    let operation = document.querySelector('.operation');
    let equal = document.querySelector('.equal');

buttons.forEach(function(button) {
    button.addEventListner ("click", function(e) {
        let value = e.target.dataset.num;
        screen.value += value
    })
})
}
