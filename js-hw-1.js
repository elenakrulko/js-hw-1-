// 1.  Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
// (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

const Hamburger = 1;
const Frytki = true;
if(Hamburger >= 4 && Frytki){console.log('Ми поїли');}else{
    console.log('Ми йдемо в інше кафе')}

// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару
// між 1000 та 1900 включно. Результат виводити в консоль.

const Cena = 1500;
if(Cena > 1000 && Cena <= 1900) {console.log('Ok')};

// 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000
// та 1900 включно. Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.

const Cena = 1500;
if (Cena < 1000 || Cena >= 1900){console.log('Ok')};

const Cena = 1500;
if (!(Cena > 1000 && Cena <= 1900)){console.log('Ok')};

// 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.

let time = 'nonono';

if(time === 'lito'){
    console.log(time)
} else if (time === 'zima'){
    console.log(time)
} else if (time === 'osin'){
    console.log(time)
} else if (time === 'vesna'){
    console.log(time)
} else {
    console.log('no')
}

// 5.  Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє між цими трьома числами
// (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням)
// використовуючи оператор if-else. Використати вкладені оператори if
//     Результат виводити в консоль.

let a = 300;
let b = 5;
let c = 1000;

if (a > b) {
    if (a < c) {
        console.log(a);
    } else if (b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
} else {
    if (b < c) {
        console.log(b);
    } else if (a > c) {
        console.log(a);
    } else {
        console.log(c);
    }
}

// 6.  Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.

let day = 10;
switch (day){
    case 1:
        console.log('pn');
        break;
    case 2:
        console.log('vt');
        break;
    case 3:
        console.log('sr');
        break;
    case 4:
        console.log('cht');
        break;
    case 5:
        console.log('pt');
        break;
    case 6:
        console.log('sub');
        break;
    case 7:
        console.log('vs');
        break;
    default:
        console.log('no');
        break;
}

// 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр,
// символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.

let znak = "7";
let number1 = 25;
let number2 = 11;
let fakt;

switch (znak) {
    case "+":
        fakt = number1 + number2;
        break;
    case "-":
        fakt = number1 - number2;
        break;
    case "*":
        fakt = number1 * number2;
        break;
    case "/":
        fakt = number1 / number2;
        break;
    default:
        console.log("no");
        break;
}

console.log(fakt);

// 13.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression)
// видалити голосні букви зі слова.

function deleteBukva(text) {
    let regularExpression = /[уеіаоєяиюї]/gi;
    let fakt = text.replace(regularExpression, '');

    return fakt;
}

let text = "Гелікоптер";
let fakt = deleteBukva(text);
console.log(fakt);
//вариант 2
// let text = "Гелікоптер";
// let regularExpression = /[уеіаоєяиюї]/gi;
// let fakt = text.replace(regularExpression, '');
// console.log(fakt);


// 14.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закінченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.
//
// Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)

function metersToKilometers(meters) {
    const kilometers = meters / 1000;
    let unit = 'кілометр';
    const roundedKilometers = Math.round(kilometers * 1000) / 1000;
    if (roundedKilometers % 1 === 0) {
        if (roundedKilometers === 1) {
            unit = 'кілометр';
        } else if (roundedKilometers > 1 && roundedKilometers < 5) {
            unit = 'кілометри';
        } else {
            unit = 'кілометрів';
        }
    } else {
        unit = 'кілометра';
    }

    console.log(`${meters} метрів це ${roundedKilometers} ${unit}`);
}
metersToKilometers(105);
metersToKilometers(3000);
metersToKilometers(100);
metersToKilometers(789);