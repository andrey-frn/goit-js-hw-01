'use strict';

let deliveryCountry = prompt ('Укажите страну доставки');

const china = 'Китай';
const chinaDelivery = '100';

const chile = 'Чили';
const chileDelivery = 250;

const australia = 'Австралию'
const australiaDelivery = 170;

const india = 'Индию'
const indiaDelivery = 80;

const jamaica = 'Ямайку'
const jamaicaDelivery = 120;


if (deliveryCountry === null) {
    console.log ('Отменено пользователем');
    } else {
    switch (deliveryCountry.toLowerCase()) {
          case 'китай':
        alert (`Доставка в ${china} будет стоить ${chinaDelivery} кредитов`);
        break;

    case 'чили':
        alert (`Доставка в ${chile} будет стоить ${chileDelivery} кредитов`);
        break;

     case 'австралия':
        alert (`Доставка в ${australia} будет стоить ${australiaDelivery} кредитов`);
        break;

        case 'индия':
        alert (`Доставка в ${india} будет стоить ${indiaDelivery} кредитов`);
        break;

        case 'ямайка':
        alert (`Доставка в ${jamaica} будет стоить ${jamaicaDelivery} кредитов`);
        break;

    default:
        alert ('В вашей стране доставка не доступна');
  }
}
  






