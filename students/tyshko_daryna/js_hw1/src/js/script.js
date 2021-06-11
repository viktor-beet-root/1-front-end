//1)   Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».

var yourName = prompt('Ваше ім`я');
var messageName = "Привіт, " + yourName + ".";

console.log(messageName); 

 //  2)   Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
 var thisYear = 2021;
 var userYear = +prompt('Введіть свій рік нaродження');
 var massageYear = "Вам " + (thisYear - userYear) + " роки.";

 console.log(massageYear); 

// 3)   Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
 var sideSquare = prompt('Введіть довжину сторони квадрата');
 var squarePerimeter = 4 * sideSquare;
 var count = "Периметр квадрата = " + squarePerimeter;

 console.log(count);

//  4)   Запросите у пользователя радиус окружности и выведите площадь такой окружности.
var numberPi = 3.14;
var radius = prompt('Введіть радіус');




