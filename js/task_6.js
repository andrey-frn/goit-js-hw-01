'use strict';

let userInput;
let total = 0;

do {
    userInput = prompt ('Введите любое число');
    if (isNaN(userInput)) {
        alert ('Было введено не число, попробуйте еще раз!');
    } else {
        total += +userInput;
    }
} while (userInput !== null)

alert (`Общая сумма чисел равна ${total}`)