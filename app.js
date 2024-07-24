// declare binding to counter 
let count = 0; 

// declare const for value and buttons 
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const target = e.currentTarget.classList;
        if (target.contains('dcrease')) {
            count--;
        }
        else if (target.contains('incrse')) {
            count++;
        }
        else {
            count = 0;
        }
        if (count > 1){
            value.style.color = "green";
        }
        value.textContent = count;
    });
});