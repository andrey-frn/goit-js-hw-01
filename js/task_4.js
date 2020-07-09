'use strict';

let credits = 23580;
const pricePerDroid = 300;
let quantityDroid = prompt ('Сколько дроидов Вы желаете купить?');
let totalPrice;

if (quantityDroid === null) {
    quantityDroid = 'Отменено пользователем!';
    console.log (quantityDroid);
} else {
    totalPrice = quantityDroid*pricePerDroid;
    if (totalPrice>=credits) {
        quantityDroid = 'Недостаточно средств на счету!';
        console.log (quantityDroid);
    } else {
        credits = credits - totalPrice;
            quantityDroid = `Вы купили ${quantityDroid} дроидов, на счету осталось ${credits} кредитов.`;
            console.log (quantityDroid);
    }
    
} 




