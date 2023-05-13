// let year = +prompt('Введите год', 2000);
// if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
//     console.log('Год является високосным');
// } else {
//     console.log('Год не високосный');
// }

const button = document.querySelector('.button');
const total = document.querySelector('.total');
const sum = document.querySelector('.sum').value;

let year = +prompt('Введите год');
if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
    button.addEventListener('click', () => {
        var message = 'Год является високосным';
        total.textContent = (message); 
    });
} else {
    button.addEventListener('click', () => {
        var Message = 'Год не високосный';
        total.textContent = (Message); 
    });
}

