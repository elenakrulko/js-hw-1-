// Домашка:
//
// 1.  Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
//     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

function TakeFood(Hamburger,Frytki) {
    if(Hamburger >= 4 && Frytki){console.log('Ми поїли');}else{
        console.log('Ми йдемо в інше кафе')}
}
TakeFood(9,1);
TakeFood(0,10);

// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль.

function Meaning(Cena) {
    if(Cena > 1000 && Cena <= 1900) {console.log('Ok')};
}
Meaning(900);
Meaning(1500);
Meaning(2000);

// 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.

function Meaning2(Cena) {
    if (Cena < 1000 || Cena >= 1900){console.log('Ok')};
}

Meaning2(900);
Meaning2(1500);
Meaning2(2000);

function Meaning3(Cena) {
    if (!(Cena > 1000 && Cena <= 1900)){console.log('Ok')};
}
Meaning3(900);
Meaning3(1500);
Meaning3(2000);

// 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.

function TimeOfTheYear(time) {
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
}
TimeOfTheYear('lito');
TimeOfTheYear('zima');
TimeOfTheYear('osin');
TimeOfTheYear('vesna');
TimeOfTheYear('nonono');

// 5.  Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє мід цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//     Використати вкладені оператори if
//     Результат виводити в консоль.

function Average(a,b,c) {
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
}
Average(105,2,1000);

// 6.  Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.

function DayOfTheWeek(day) {
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
}
DayOfTheWeek(7);

// 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.

function Solution(znak,number1,number2) {
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
}
Solution('+',34,5);

// 8. Використовуючи цикл for перемістити значення від 1 до 5 у масив myArray.

function Array(num1,num2) {
    let myArray = [];
    for (let i = num1; i <= num2; i++) {
        myArray.push(i);
    }
    console.log(myArray);
}
Array(1,5)


// 9. Напишіть 2 цикли.
//    За допомогою першого передайте парні числа від 1 до 9 у myArray за допомогою циклу for.
//    За допомогою другого передайте непарні числа від 1 до 9 у myArray за допомогою циклу for.

function Array2(num1,num2) {
   let myArray = [];
   for (let i = num1; i <= num2; i++) {
       if (i % 2 === 0) {
           myArray.push(i);
       }
   }
    console.log(myArray);
 }
 Array2(1,9)

function Array3(num1,num2) {
    let myArray = [];
    for (let i = num1; i <= num2; i++) {
        if (i % 2 !== 0) {
            myArray.push(i);
        }
    }
    console.log(myArray);
}
Array3(1,9);

// 10. Оголоcіть та ініціалізуйте змінну total = 0.
//     Використовуйте цикл for, щоб додати значення кожного елемента масиву myArr до підсумку.
//     const myArr = [2, 3, 4, 5, 6];

function Array4(total,num1,num2) {
    let myArr = [];
    for (let i = num1; i <= num2; i++) {
        myArr.push(i);
    }
    for (let i = 0; i <myArr.length; i++) {
        total += myArr[i];
    }
    console.log(total);
}
Array4(0,2,6);

// 11. Напишіть код, котрий виведе в консоль кожен піделемент в arr по одному.
//
//     const arr = [ [1, 2], [3, 4], [5, 6] ];
//
//     Console output:
//     1
//     2
//     3
//     4
//     5
//     6
function Array5(num1,num2) {
    let arr = [];
    for (let i = num1; i <= num2; i += 2) {
        arr.push([i, i + 1]);}
    for (let i=0; i <arr.length; i++) {
        for (let l = 0; l <arr[i].length; l++) {
            console.log(arr[i][l]);
        }
    }
}
Array5(1,6);

// 12. Доповніть код нижче, так щоб в консоль повертався результат множення усіх чисел у підмасивах arr.
//     Використайте для цього вкладені цикли for.
//
//     Наприклад:
//     const arr = [[1], [2], [3]]  >  console.log(product) має повернути 6
//     const arr = [[1, 2], [3, 4], [5, 6, 7]]  >  console.log(product) має повернути 5040
//     const arr = [[5, 1], [0.2, 4, 0.5], [3, 9]]  >  console.log(product) має повернути 54

function Array6(arr) {
 let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let l = 0; l < arr[i].length; l++) {
            product *=arr[i][l];
        }
    }
    console.log(product);
}
Array6([[5, 1], [0.2, 4, 0.5], [3, 9]]);

// 13.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

function deleteBukva(text) {
    let regularExpression = /[уеіаоєяиюї]/gi;
    let fakt = text.replace(regularExpression, '');

    return fakt;
}

let text = "Гелікоптер";
let fakt = deleteBukva(text);
console.log(fakt);

// 14.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закінченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.
//
//     Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
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