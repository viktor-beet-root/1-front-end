//1)Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

const userAge = +prompt('Який Ваш вік?');
let ageMessage;
if (userAge >= 0 && userAge <= 12) {
    ageMessage = 'Ви-дитина.';
} else if (userAge >= 12 && userAge < 18) {
    ageMessage = 'Ви-підліток.';
} else if (userAge >= 18 && userAge <= 60) {
    ageMessage = 'Ви-дорослий.';
} else if (userAge > 60 && userAge <= 120) {
    ageMessage = 'Ви-пенсионер.';
} else if (Number.isNaN(userAge)) {
    putmessage = 'Введить цифри,будь ласка.';
} else {
    ageMessage = 'Дані неправильні,спробуйте ще раз';
}
console.log(ageMessage);
// 2) Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

const userNumber = +prompt('Введіть число від 0 до 9.');
let specSymbol;
switch (userNumber) {
    case 0:
        specSymbol = ')';
        break
    case 1:
        specSymbol = '!';
        break
    case 2:
        specSymbol = '@';
        break
    case 3:
        specSymbol = '#';
        break
    case 4:
        specSymbol = '$';
        break
    case 5:
        specSymbol = '%';
        break
    case 6:
        specSymbol = '^';
        break
    case 7:
        specSymbol = '&';
        break
    case 8:
        specSymbol = '*';
        break
    case 9:
        specSymbol = '(';
        break
    default:
        specSymbol = ('Введіть корректне число');
}
console.log(specSymbol);

// 3)Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры

const userThreeNum = +prompt('Введіть трьохзначне число.');
const num_1 = ~~(userThreeNum / 100);
const num_2 = ~~(userThreeNum / 10) % 10;
const num_3 = userThreeNum % 10;

let threeNumMessage;
if (num_1 === num_2 || num_2 === num_3 || num_1 === num_3) {
    threeNumMessage = ('Присутні одинакові числа');
} if (Number.isNaN(userThreeNum)) {
    threeNumMessage = 'Введить цифри,будь ласка.';
} else {
    threeNumMessage = "В числі немає одинакових цифр."
}
console.log(threeNumMessage);

// 4)Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

const userYear = +prompt('Введіть рік:');
let leapYear;
if (userYear % 400 === 0 || userYear % 4 === 0 && userYear % 100 !== 0) {
    leapYear = ('Цей рік є високосним');
} else if ((Number.isNaN(userYear))) {
    leapYear = ('Введіть цифри,будь ласка');
} else {
    leapYear = ('Цей рік не є високосним');
}
console.log(leapYear);
//5)Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

const userNum__5 = +prompt('Введіть пятизначне число:');
const num__1 = ~~(userNum__5 / 10000);
const num__2 = ~~(userNum__5 / 1000) % 10;
const num__4 = ~~(userNum__5 / 10) % 10;
const num__5 = userNum__5 % 10;
let numPalindrom;
if (num__1 === num__5 && num__2 === num__4) {
    numPalindrom = ('Ваше число є паліндромом.')
} if ((Number.isNaN(userNum__5))) {
    numPalindrom = ('Введіть цифри,будь ласка.');
} else {
    numPalindrom = ('Ваше число не є паліндромом.')
}
console.log(numPalindrom);

//6)Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
const amuontUsd = +prompt('Введіть сумму в доларах:');
const typeСurrency = prompt('Введіть в яку валюту виконати конвертацію: EUR, UAH, AZN');
let exchange;
if (typeСurrency === 'EUR') {
    exchange = amuontUsd * 0.82;
} else if (typeСurrency === 'UAH') {
    exchange = amuontUsd * 27.3;
} else if (typeСurrency === 'AZN') {
    exchange = amuontUsd * 1.7;
} else if ((Number.isNaN(amuontUsd))) {
    exchange = ('Введіть цифри,будь ласка.')
} else {
    exchange = ('Введіть коректні дані.');
}
console.log(exchange);


//7)Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

const userCash = +prompt('Введіть суму покупки:');
let discountAmount;

if (userCash >= 200 && userCash < 300) {
    discountAmount = userCash - (userCash * 0.03);
} else if (userCash >= 300 && userCash < 500) {
    discountAmount = userCash - (userCash * 0.05);
} else if (userCash >= 500) {
    discountAmount = userCash - (userCash * 0.07);
} else if ((Number.isNaN(userCash))) {
    discountAmount = ('Введіть цифри,будь ласка.');
} else {
    discountAmount = ('У Вас немає знижки.')
}
console.log(discountAmount);

//8)Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

const circumference = +prompt('Введіть значення окружності:');
const squareP = +prompt('Введіть значення периметру квадрата:');
const circleD = circumference / Math.PI;
let squareD;
let answer;
if (circleD <= squareP / (2 * Math.sqrt(2))) {
    answer = ('Ваш круг поміститься у квадрат.')
} else if (circumference < 0 || squareP < 0) {
    answer = ('Введіть значення,що більше нуля.')
} else if ((Number.isNaN(circumference))) {
    answer = ('Введіть цифрові значення.')
} else if ((Number.isNaN(squareP))) {
    answer = ('Введіть цифрові значення.')
} else {
    answer = ('Круг не помістяться у квадрат');
}
console.log(answer);

//9)Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

const q1 = +prompt('Введіть відповідь 1, 2 або 3 на питання:яка столиця України? 1-Київ,2-Львів,3-Харків.')
let answer1;
switch (q1) {
    case 1:
        answer1 = true
        break
    case 2:
        answer1 = false
        break
    case 3:
        answer1 = false
        break
    default:
        answer1 = false;
}
const q2 = +prompt('Введіть відповідь 1, 2 або 3 на питання:яка столиця Польщі? Варіанти відповіді:1-Вроцлав,2-Варшава,3-Краків.')
let answer2;
switch (q2) {
    case 1:
        answer2 = true
        break
    case 2:
        answer2 = false
        break
    case 3:
        answer2 = false
        break
    default:
        answer2 = false
}
const q3 = +prompt('Введіть відповідь 1, 2 або 3 на питання:яка столицея Франції? Варіанти відповіді:1-Париж,2-Марсель,3-Ліон.')
let answer3;
switch (q3) {
    case 1:
        answer3 = true
        break
    case 2:
        answer3 = false
        break
    case 3:
        answer3 = false
        break
    default:
        answer3 = false;
}
let useranswer = 0;
if (answer3 === true || answer2 === true || answer1 === true) {
    useranswer += 2
} if (answer1 == true && answer2 == true || answer1 == true && answer3 == true || answer2 == true && answer3 == true) {
    useranswer += 2;
} if (answer1 === true && answer2 === true && answer3 === true) {
    useranswer += 2
}
console.log("Набрано балів: " + useranswer);





