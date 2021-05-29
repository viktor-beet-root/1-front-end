// 1)   Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
const userName = prompt('Введите Ваше имя');
const messageForUser = 'Привет, ' + userName;
console.log(messageForUser);

// 2)   Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
const birthYear = +prompt('Введите Ваш год рождения');
const year = 2020;
const userAge = year - birthYear;
console.log(userAge);

// 3)   Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
const side = +prompt('Введите сторону квадрата');
const perimeter = side * 4;
console.log(perimeter);

//4)   Запросите у пользователя радиус окружности и выведите площадь такой окружности.
const radius = +prompt('Введите радиус окружности');
const area = Math.PI * radius ** 2;
console.log(area);

// 5)   Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
const km = +prompt('Введите расстояние между городами А и Б');
const time = +prompt('За сколько часов вы хотите добраться из города А в город Б')
const speed = km / time;
const messsageSpeed = 'Необходимая скорость: ' + speed + ' км/час.';
console.log(messsageSpeed);

// 6)   Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
const usd = +prompt('Введите сумму в долларах');
const usdEur = 0.82;
const eur = usd * usdEur;
console.log(eur);

// 7)   Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.
const gb = +prompt('Введите объем флешки в ГБ');
const mb = (gb * 1024) / 820;
const messageMb = 'В вашей флешке столько файлов размером в 820 Мб помещается: ' + mb;
console.log(messageMb);

// 8) Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.
const inVallet = +prompt('Введите вашу сумму денег в кошельке');
const chocolatePrice = +prompt('Введите цену одной шоколадки');
const mayBuy = ~~(inVallet / chocolatePrice);
const revenue = mayBuy * chocolatePrice;
const willRemain = inVallet - revenue;
const messageBuy = 'На эту сумму можно купить ' + mayBuy + ' шоколадок.';
const messageRemain = 'У Вас останется ' + willRemain + ' денег после покупки.';
console.log(messageBuy, messageRemain);

// 9)   Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
const number = +prompt('Введите трехзначное число');
const reverse1 = (number % 10)*100;
const reverse2 = (number % 100 - number % 10) ;
const reverse3 = ~~(number / 100);
const messageReverse = reverse1 + reverse2 + reverse3;
console.log(messageReverse);

// 10) Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.
const depositSum = +prompt('Введите сумма вклада на 2 месяца');
const depRate = 0.05*2/12;
const rate = depositSum * depRate;
console.log(rate);
