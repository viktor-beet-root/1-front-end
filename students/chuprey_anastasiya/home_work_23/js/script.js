//1)Подсчитать сумму всех чисел в заданном пользователем диапазоне.

let userNumStart = +prompt('Ведіть перше число діапезону:');
let userNumFinish = +prompt('Ведіть друге число діапезону:');
let userNumResult = 0;
for (userNumStart; userNumStart <= userNumFinish; userNumStart++) {
    userNumResult = userNumStart + userNumResult;

}
console.log(userNumResult);

//2) Запросить 2 числа и найти только наибольший общий делитель.
let userNum_1 = +prompt('Ведіть перше число:');
let userNum_2 = +prompt('Ведіть друге число:');
let userNummin = 0;
let userNumDivider = 0;
if (userNum_1 <= userNum_2) {
    userNummin = userNum_1;
}
else {
    userNummin = userNum_2;
}
for (let i = 1; i <= userNummin; i++) {
    if (userNum_1 % i === 0 && userNum_2 % i === 0) {
        userNumDivider = i;
    }
}

console.log(userNumDivider);
//3)Запросить у пользователя число и вывести все делители этого числа.

let userNumber = +prompt('Введіть число');
let userNumberDivider = 1;
for (; userNumberDivider <= userNumber; userNumberDivider++) {
    if (userNumber % userNumberDivider === 0) {
        console.log(userNumberDivider)
    }
}

//4)Определить количество цифр в введенном числе.
let numberCalc = +prompt('Введіть число:');
let counter = 0;
let a;
let z = 10;
do {
    a = ~~(numberCalc / z);
    z = z * 10;
    counter++;
}
while (a !== 0);
console.log(counter);

//5) Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

let zero = 0;
let plus = 0;
let minus = 0;
let even = 0;
let odd = 0;

for (let i = 0; i < 10; i++) {
    let number_10 = +prompt('Введіть 10 чисел:');
    if (number_10 === 0) {
        zero++;
    }
    else if (number_10 > 0) {
        plus++;
    }
    else {
        minus++;
    }
    if (number_10 === 0) {

    } else if (number_10 % 2 === 0) {
        even++;
    } else {
        odd++;
    }

}
console.log("кількість нулів:" + zero);
console.log("кількість позитивних чисел:" + plus);
console.log("кількість негативних чисел:" + minus);
console.log("кількість парних чисел:" + even);
console.log("кількість непарних чисел:" + odd);

