// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–12), подростком (12–18), взрослым (18-60) или пенсионером (60– ...).
const userAge = +prompt('Введите свой возраст');
let userAgeMessage = null;

if (userAge >= 0 && userAge < 12) {
    userAgeMessage = 'Вы являетесь ребенком';
} else if (userAge >= 12 && userAge < 18) {
    userAgeMessage = 'Вы являетесь подростком';
}  else if (userAge >= 18 && userAge < 60) {
    userAgeMessage = 'Вы являетесь взрослым';
}  else if (userAge >= 60 && userAge <= 120){
    userAgeMessage = 'Вы являетесь пенсионером';
} else if (Number.isNaN(userAge)) {
    userAgeMessage = 'Некорректные данные, введите число';
} else {
    userAgeMessage = 'Некорректные данные';
}
console.log(userAgeMessage);


// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

const num1 = +prompt('Введите цифру от 0 до 9');
let numSpec = null;

switch (num1) {
    case 1:
        numSpec = '!';
        break;
    case 2:
        numSpec = '@';
        break;
    case 3:
        numSpec = '#';
        break;
    case 4:
        numSpec = '$';
        break;
    case 5:
        numSpec = '%';
        break;
    case 6:
        numSpec = '^';
        break;
    case 7:
        numSpec = '&';
        break;
    case 8:
        numSpec = '*';
        break;
    case 9:
        numSpec = '(';
        break;
    case 0:
        numSpec = ')';
        break;
    default:
        numSpec = 'Введите цифру от 0 до 9';
}
console.log(numSpec);


// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
const num2 = +prompt('Введите трехзначное число');
const numFirst = ~~(num2 / 100);
const numSecond = ~~(num2/ 10) % 10;
const numThird = num2 % 10;
let numSame = null;

if (numFirst === numSecond && numSecond === numThird && numFirst === numThird || numFirst === numSecond || numFirst === numThird || numSecond === numThird)  {
    numSame = 'В это числе есть одинаковые цифры';
} else if (Number.isNaN(num2)) {
    numSame = 'Некорректные данные, введите число';
} else {
    numSame = 'В этом числе нет одинаковых цифр';
}
console.log(numSame);

// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

const yearToCheck = +prompt('Введите год');
let yearVisokosny;
if (yearToCheck % 400 === 0 || yearToCheck % 4 === 0 && yearToCheck % 100 !== 0) {
    yearVisokosny = 'Высокосный год'
}  else if (Number.isNaN(yearToCheck)) {
    yearVisokosny = 'Некорректные данные, введите число';
} else {
    yearVisokosny = 'Невысокосный год'
}
console.log(yearVisokosny);

// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

const fiveNumb = +prompt('Введите пятиразрядное число');
let palindrome;
const n1 = ~~(fiveNumb / 10000);
const n2 = ~~(fiveNumb / 1000) % 10;
const n4 = ~~(fiveNumb / 10) % 10;
const n5 = fiveNumb % 10;
if (n1 === n5 && n2 === n4) {
    palindrome = 'Данное число является палиндромом';
} else if (Number.isNaN(fiveNumb)) {
    palindrome = 'Введите число';
} else {
    palindrome = 'Данное число не является палиндромом';
}
console.log(palindrome);

// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

const usdAmount = +prompt('Введите сумму в долларах');
let chooseCurrency = prompt('Введите, в какую валюту Вы хотите перевести: EUR, UAH или AZN');
let exchange;

if (chooseCurrency.toUpperCase () === 'EUR') {
    exchange = usdAmount * 0.82;
} else if (chooseCurrency.toUpperCase () === 'UAH') {
    exchange = usdAmount * 27.38;
} else if (chooseCurrency.toUpperCase () === 'AZN') {
    exchange = usdAmount * 1.70;
} else if (Number.isNaN(usdAmount)) {
    exchange = 'Некорректные данные. Введите число';
}
console.log(exchange);


// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

const sum = +prompt('Введите сумму покупки');
let sumWDiscount = null;
let discount;
let discountMessage;
if (sum < 200 && sum >= 0) {
    sumWDiscount = sum * 1;
    discountMessage ='Сумма к покупке: ' + sumWDiscount + '.';
} else if (sum >= 200 && sum < 300) {
    sumWDiscount = sum * 0.97;
    discount = '3 %';
    discountMessage = 'На данную сумму действует скидка в ' + discount + '. Старая цена: ' + sum + '. Цена со скидкой: ' + sumWDiscount + '.';
} else if (sum >= 300 && sum < 500 ) {
    sumWDiscount = sum * 0.95;
    discount = '5 %';
    discountMessage = 'На данную сумму действует скидка в ' + discount + '. Старая цена: ' + sum + '. Цена со скидкой: ' + sumWDiscount + '.';
} else if (sum < 0 || Number.isNaN(sum) ) {
    discountMessage = 'Некорректные данные';
} else {
    sumWDiscount = sum * 0.93;
    discount = '7 %';
    discountMessage = 'На данную сумму действует скидка в ' + discount + '. Старая цена: ' + sum + '. Цена со скидкой: ' + sumWDiscount + '.';
}
console.log(discountMessage);


// Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

const circleW = +prompt('Введите длину окружности');
const squareP = +prompt ('Введите периметр квадрата');
const diameter = circleW / Math.PI;
const sideQ = squareP / 4;
let circleInSquare;

// Квадрат поместится в круге, если диаметр окружности меньше или равен стороне квадрата.

if (diameter <= sideQ) {
    circleInSquare = 'Круг поместится в квадрат';
} else if (circleW < 0 || squareP < 0 || Number.isNaN(circleW) || Number.isNaN(squareP)) {
    circleInSquare = 'Некорректные данные';
} else {
    circleInSquare = 'Круг не поместится в квадрат'
}
console.log(circleInSquare);

// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
const question1 = prompt('Какой тип данных хранится в переменной user Age? var userAge = "32": \n а) floating point number; \n б) integer; \n в) string (Выберите букву с верным ответом)');
const question2 = prompt('Какая из команд выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмёт «ОК»? \n а) document.write(); \n б) alert(); \n в) console.log (Выберите букву с верным ответом)');
const question3 = prompt('Для чего используется оператор "&&"? \n а) для умножения; \n б) оператор И,возвращает true, если оба аргумента истинны, а иначе – false; \n в) означает тип данных (Выберите букву с верным ответом)');
let answerCheck = 0;

if (question1.toLowerCase () === 'в') {
    answerCheck += 2;
} 
if (question2.toLowerCase () === 'б')  {
    answerCheck += 2;
} 
if (question3.toLowerCase () === 'б') {
    answerCheck += 2;
} 

const messageQuestion = 'У вас ' + answerCheck + ' баллов.';
console.log(messageQuestion);

// Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.


const day = +prompt ('Введите день');
const month = +prompt ('Введите месяц');
const year = +prompt ('Введите год');
let nextDate;
let newDay;
let newMonth;
let newYear;
if (day === 31 && month !== 12) {
    newDay = 1;
    newMonth = month + 1;
    nextDate = 'Следующий день: ' + newDay + '.' + newMonth + '.' + year; 
    if (month === 4 || month === 6 || month === 9 || month === 11 || month > 12) {
        nextDate = 'Некорректные данные';
    }
}   else if (month === 12) {
    newDay = 1;
    newMonth = 1;
    newYear = year + 1;
    nextDate = 'Следующий день: ' + newDay + '.' + newMonth + '.' + newYear;

}  else if (day === 30 && (month === 4 || month === 6 || month === 9 || month === 11))  {
    newDay = 1;
    newMonth = month + 1;
    nextDate = 'Следующий день: ' + newDay + '.' + newMonth + '.' + year;

}   else if (month === 2) {

    if (day === 28 && year % 4 != 0 || year % 100 == 0 && year % 400 != 0) {
        newDay = 1;
        newMonth = month + 1;
        nextDate = 'Следующий день: ' + newDay + '.' + newMonth + '.' + year;
    } else if (day === 28){
        newDay = day + 1;
        nextDate = 'Следующий день: ' + newDay + '.' + month + '.' + year;
    } else if (day === 29 && year % 4 === 0 || year % 100 === 1 && year % 400 === 0) {
    newDay = 1;
    newMonth = month + 1;
    nextDate = 'Следующий день: ' + newDay + '.' + newMonth + '.' + year;
    } else if (day === 29) {
        nextDate = 'Некорректные данные';
    }

}   else if (Number.isNaN(day) || Number.isNaN(month) || Number.isNaN(year) || day > 31 || day <= 0 || month <= 0 || year < 0) {
        nextDate = 'Некорректные данные';
}   else {
    newDay = day + 1;
    nextDate = 'Следующий день: ' + newDay + '.' + month + '.' + year;
}

console.log(nextDate);
