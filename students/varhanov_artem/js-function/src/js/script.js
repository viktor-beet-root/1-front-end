// Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

function returns (first, second){
    if (first > second) return 1;
    if (first < second) return -1;
    if(first === second)return 0;
}
console.log(returns(1, 2))

//Написать функцию, которая вычисляет факториал переданного ей числа.
function factorial(value) {
    return(value != 1) ? value * factorial(value - 1) : 1;
}
console.log(factorial(11));
   
// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
//  Например: цифры 1, 4, 9 превратятся в число 149.

function iWouldGlue (a, b, c) {
    let num = a  *100 + b * 10 + c;
    return num;
}
console.log(iWouldGlue(5, 5, 5));

//Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

 function area (lengh, width) {
     if (lengh === undefined) return width **2;
     if (width === undefined) return lengh **2;
 return lengh * width;
 }
console.log(area(7));


// Написать функцию, которая проверяет, является ли переданное ей число совершенным.
//  Совершенное число – это число, равное сумме всех своих собственных делителей.

const num = 5;
const checkPerfectNumber = (num = 1) => {
   if(num === 1) {
      return false;
   };
   let sum = 1;
   for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
      if(num % i === 0) {
         sum = sum + i + num / i; if(sum > num) {
            return false;
         }
      };
   };
   return sum === num;
};
console.log(checkPerfectNumber(num));

// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

function hoursMinutesSeconds (h, m, s) {
    if (h === undefined || h >= 24) h = 0;
    if (m === undefined || m >= 60) m = 0;
    if (s === undefined || s >= 60) s = 0;
    let time;
    if (h < 10) {
        h = 0 + String(h);
    }
    if (m < 10) {
        m = 0 + String(m);
    }
    if (s < 10) {
        s = 0 + String(s);
    }
    return time = h + ':' + m + ':' + s;
}
let totaltime = hoursMinutesSeconds(23, 60, 3)
console.log (totaltime)

//// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
function returnsSeconds (h, m, s) {
    let second;
    return h * 3600 + m * 60 + s;
}
let second = returnsSeconds(2, 20 ,3);
console.log(second);

//Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

function hours (sec) {
    let hours = Math.floor(sec / 3600);
    let min = Math.floor(sec / 60) - hours * 60;
    let second = sec - (hours * 3600) - (min * 60);
    return hoursMinutesSeconds (hours, min, second);
}
let resHours = hours (40662);
console.log(resHours);
