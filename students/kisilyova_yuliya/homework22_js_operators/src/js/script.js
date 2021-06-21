//1)   Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
const askAge = +prompt("Введите свой возраст");
let answerAge;
if (askAge >= 0 && askAge <= 12) {
    answerAge = "Ребенок"
}
else if (askAge >= 13 && askAge <= 18) {
    answerAge = "Подросток"
}
else if (askAge >= 19 && askAge <= 60) {
    answerAge = "Взрослый"
}
else if (askAge >= 61) {
    answerAge = "Пенсионер"
}
else if (Number.isNaN(askAge)) {
    answerAge = "Можно ввести только число"
}
console.log(answerAge);


//2)   Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
const askNum = +prompt("Введите число от 0 до 9");
let answerNum;
switch (askNum) {
    case 0:
        answerNum = ")";
        break;
    case 1:
        answerNum = "!";
        break;
    case 2:
        answerNum = "@";
        break;
    case 3:
        answerNum = "#";
        break;    
    case 4:
        answerNum = "$";
        break;   
    case 5:
        answerNum = "%";
        break;
    case 6:
        answerNum = "^";
        break;
    case 7:
        answerNum = "&";
        break;    
    case 8:
        answerNum = "*";
        break;   
    case 9:
        answerNum = "(";
        break;     
}
if (Number.isNaN(askNum)) {
    answerNum = "Можно ввести только число"
}
console.log(answerNum);


//3)   Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
const askNumber3 = +prompt("Введите трехзначное число");
let answerNumber3;
let num1 = parseInt(askNumber3 / 100)
let num2 = parseInt(askNumber3 % 100 / 10);
let num3= parseInt(askNumber3 % 10);
if (Number.isNaN(askNumber3)) {
    answerNumber3 = "Можно ввести только число"
}
else if (num1 === num2 || num1 === num3 || num2 === num3) {
    answerNumber3 = "Найдено совпадение!"
}
else if (num1 !== num2 || num1 !== num3 || num2 !== num3) {
    answerNumber3 = "Совпадений не найдено!"
}
console.log(answerNumber3);


//4)   Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
const askYear = +prompt("Введите пожалуйста год");
let answerYear;
if (askYear % 400 === 0 || askYear % 4 === 0 && askYear % 100 !== 0 )
{
    answerYear = askYear + "  - год високосный";
}
else if (Number.isNaN(askYear)) {
    answerYear = "Можно ввести только число"
}
else if (askYear <= 0) {
    answerYear = "Введите корректное число"
}
else {
    answerYear = askYear + "  - год невисокосный";
}
console.log(answerYear);


//5)   Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
const askNum5 = +prompt("Введите пожалуйста пятиразрядное число");
let askedNum1 = Math.floor(askNum5 / 10000);
let askedNum2 = Math.floor(askNum5 / 1000) % 10;
let askedNum3 = Math.floor(askNum5 / 100) % 10;
let askedNum4 = Math.floor(askNum5 / 10) % 10;
let askedNum5 = askNum5 % 10;
let answerNum5;
if (askedNum1 === askedNum5 && askedNum2 === askedNum4) {
    answerNum5 = "Число " + askNum5 + " палиндром";
}
else if (Number.isNaN(askNum5)) {
    answerNum5 = "Можно ввести только число"
}
else {
    answerNum5 = "Число " + askNum5 + " не палиндром";
}
console.log(answerNum5);


//6)   Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
const askAmountUsd = +prompt("Введите пожалуйста сумму в USD");
const askCurr = prompt("Введите пожалуйста валюту для конвертации - EUR, UAH, AZN");
let askCurrUp = askCurr.toUpperCase();
let USD = 27.09;
let EUR = USD / 33.02;
let AZN = USD / 15.94;
let answerAmounRez;
if (Number.isNaN(askAmountUsd)) {
    answerAmounRez = "Можно ввести только сумму";
}
else if (askCurrUp === "EUR") {
    answerAmounRez = (askAmountUsd * EUR).toFixed(2) + " EUR";
}
else if (askCurrUp === "UAH") {
    answerAmounRez = (askAmountUsd * USD).toFixed(2) + " UAH";
}
else if (askCurrUp === "AZN") {
    answerAmounRez = (askAmountUsd * AZN).toFixed(2) + " AZN";
}
else if (askCurrUp !== "EUR" || askCurrUp !== "UAH" || askCurrUp !== "AZN") {
    answerAmounRez = "Можно ввести только предложенные валюты";
}
console.log(answerAmounRez);


//7)   Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
const askAmountPurchase = +prompt("Введите пожалуйста сумму покупки");
let purchaseRez;
if (askAmountPurchase < 200) {
    purchaseRez = askAmountPurchase + " UAH";
}
else if (askAmountPurchase >= 200 && askAmountPurchase <= 300) {
    purchaseRez = (askAmountPurchase * 97) / 100 + " UAH";
}
else if (askAmountPurchase >= 301 && askAmountPurchase <= 500) {
    purchaseRez = (askAmountPurchase * 95) / 100 + " UAH";
}
else if (askAmountPurchase >= 501) {
    purchaseRez = (askAmountPurchase * 93) / 100 + " UAH";
}
else if (Number.isNaN(askAmountPurchase)) {
    purchaseRez = "Можно ввести только сумму";
}
console.log(purchaseRez);


//8)   Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
const longCircle = +prompt("Введите длинну окружности");
const perSquare = +prompt("Введите периметр квадрата");
let diametr = longCircle / Math.PI;
let sideSquare = perSquare / 4;
let answerCircleSquare;
if (sideSquare >= diametr) {
    answerCircleSquare = "Окружность может поместиться в квадрат";
}
else if (sideSquare < diametr) {
    answerCircleSquare = "Окружность НЕ может поместиться в квадрат";
}
else if (Number.isNaN(longCircle)) {
    answerCircleSquare = "Можно ввести только числовое значение";
}
else if (Number.isNaN(perSquare)) {
    answerCircleSquare = "Можно ввести только числовое значение";
}
console.log(answerCircleSquare);


//9)   Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
const firstQuestion = prompt("Введите букву только с одним правильным ответом. Столица Чехии? а) Прага; b) Барселона; c) Париж");
const secondQuestion = prompt("Введите букву только с одним правильным ответом.Столица Франции? а) Прага; b) Париж; c) Барселона");
const thirdQuestion = prompt("Введите букву только с одним правильным ответом.Столица Испании? а) Прага; b) Барселона; c) Мадрид");
let answerRez = 0;
if (firstQuestion === "a") {
    answerRez = answerRez + 2;
}
if (secondQuestion === "b") {
    answerRez = answerRez + 2;
}
if (thirdQuestion === "c") {
    answerRez = answerRez + 2;
}
else if (firstQuestion !== "a" && firstQuestion !== "b" && firstQuestion !== "c" && secondQuestion !== "a" && secondQuestion !== "b" && secondQuestion !== "c" && thirdQuestion !== "a" && thirdQuestion !== "b" && thirdQuestion !== "c") {
    alert("Введите только один предложенный вариант");
}
let testRez = answerRez + " points"
console.log(testRez);


//10)   Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.
const dayQuestion = +prompt("Введите день");
const monthQuestion = +prompt("Введите месяц");
const yearQuestion = +prompt("Введите год");
let dayRez = 0;
let monthRez = 0;
let yearRez = 0;
let dateResult;
if (dayQuestion < 0 || dayQuestion > 31) {
    dateResult = "Введите правильную дату";
}
else if (monthQuestion < 0 || monthQuestion > 12) {
    dateResult = "Введите правильный месяц";
}
else if (Number.isNaN(dayQuestion)) {
    dateResult = "Можно ввести только числовое значение";
}
else if (Number.isNaN(monthQuestion)) {
    dateResult = "Можно ввести только числовое значение";
}
else if (Number.isNaN(yearQuestion)) {
    dateResult = "Можно ввести только числовое значение";
}
if (dayQuestion === 31 && (monthQuestion == 1 || monthQuestion == 3 || monthQuestion == 5 || monthQuestion == 7 || monthQuestion == 8 || monthQuestion == 10)) {
    dayRez = 1;
    monthRez = monthQuestion + 1;
    yearRez = yearQuestion;
    dateResult = "Следующая дата - " + dayRez + "." + monthRez + "." + yearRez + ".";
}
else if (dayQuestion === 30 && (monthQuestion == 4 || monthQuestion == 6 || monthQuestion == 9)) {
    dayRez = 1;
    monthRez = monthQuestion + 1;
    yearRez = yearQuestion;
    dateResult = "Следующая дата - " + dayRez + "." + monthRez + "." + yearRez + ".";
}
else {   
    dayRez = dayQuestion + 1;
    monthRez = monthQuestion;
    yearRez = yearQuestion;
    dateResult = "Следующая дата - " + dayRez + "." + monthRez + "." + yearRez + ".";
}
if (dayQuestion === 29 && monthQuestion === 2 && (yearQuestion % 400 === 0 || yearQuestion % 4 === 0 && yearQuestion % 100 !== 0)) {
    dayRez = 1;
    monthRez = monthQuestion + 1;
    yearRez = yearQuestion;
    dateResult = "Следующая дата - " + dayRez + "." + monthRez + "." + yearRez + ".";
}
else if (dayQuestion === 28 && monthQuestion === 2 && (yearQuestion % 400 !== 0 || yearQuestion % 4 !== 0 && yearQuestion % 100 === 0)) {
    dayRez = 1;
    monthRez = monthQuestion + 1;
    yearRez = yearQuestion;
    dateResult = "Следующая дата - " + dayRez + "." + monthRez + "." + yearRez + ".";
}
if (dayQuestion === 31 && monthQuestion === 12) {
    dayRez = 1;
    monthRez = 1;
    yearRez = yearQuestion + 1;
    dateResult = "Следующая дата - " + dayRez + "." + monthRez + "." + yearRez + ".";
}
console.log(dateResult);
