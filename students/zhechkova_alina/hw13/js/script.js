/*// Первая задача
const num = +prompt('Введите число');
let i = 0;
let string = '';
while (i++ < num) {
    string = string + '#';
    console.log(string)
}

// Вторая задача
const num2 = +prompt('Введите число');
let string2 = '';
for (let j = num2 - 1; j > 0; j--) {
    string2 = ' ' + string2;
    for (let i = 0; i < num2; j++) {
        string2 = string2 + '#';
    }
    console.log(string2)
}

// Подсчитать сумму всех чисел в заданном пользователем диапазоне.

let startDiap = +prompt('Начало диапазона');
let endDiap = +prompt('Конец диапазона');
let sum = 0;
while(startDiap <= endDiap) {
    sum = sum + startDiap++;
}
console.log(sum);

// Запросить 2 числа и найти только наибольший общий делитель

let firstNum = +prompt('Первое число');
let secondNum = +prompt('Второе число');
let i = 0;

while (i++ < firstNum || i++ < secondNum) {
    if (firstNum % i === 0 && secondNum % i === 0) console.log(i);
}

//    Запросить у пользователя число и вывести все делители этого числа.
let number = +prompt('Введите число');
i = 0;
let delitel;
while (i++ < number) {
    if (number % i === 0) console.log(i);
}


// Определить количество цифр в введенном числе.
let num1 = +prompt('Введите число');
i = 0;
let r;
while (i < 10) {
    i++;
    r = ~~(num1 / 10);
    if (r === 0) console.log(i);
}

// Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей .При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран.

let tenNum;
let res;
i = 0;
let p = 0;
let k = 0;
let j = 0;
let b = 0;
let l = 0;
while(i++ < 10) {
    tenNum = +prompt('Введите число');
    if (tenNum < 0) {
        p++;
    }  else if (tenNum > 0) {
        k++;
    } else {
        j++;
    }
    if (tenNum % 2 === 0) {
        b++;
    } else  if ( tenNum % 2 !== 0 ){
        l++;   
     }
} 
res = 'Отрицательных чисел: ' + p + '; \n' + 'Положительных чисел: ' + k + '; \n' + 'Нулей: ' + j + '; \n' + 'Четных чисел: ' + b + '; \n' + 'Нечетных чисел: ' + l + '.';
console.log(res);

// Зациклить калькулятор.Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример.И так до тех пор, пока пользователь не откажется.
let calc1;
let calc2;
let sign;
let question;
let resCalc = 'Ваш результат: ';
do {
    calc1 = +prompt('Введите первое число');
    sign = prompt('Введите знак');
    calc2 = +prompt('Введите второе число');
    if (sign == '+') resCalc += calc1 + calc2;
    if (sign == '-') resCalc += calc1 - calc2;
    if (sign == '*') resCalc += calc1 * calc2;
    if (sign == '/') resCalc += calc1 / calc2;    
    alert (resCalc);
    question = confirm('Хотите ли решить еще один пример?');
} while (question == true);

// Запросить у пользователя число и на сколько цифр его сдвинуть.Сдвинуть цифры числа и вывести результат(если число 123456 сдвинуть на 2 цифры, то получится 345612).
const num3 = +prompt('Введите число');
let numChange = +prompt('На сколько цифр сдвинуть?');


// Зациклить вывод дней недели таким образом: «День недели.Хотите увидеть следующий день ? »и так до тех пор, пока пользователь нажимает OK. 
let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let confirmQue;
let i = 0;
let result;
do {
    result = days[i++];
    alert(result);
    confirmQue = confirm('Хотите увидеть следующий день?');
    if (i > 7) {
        i = 0;
        i++;
        result = days[i++];
        alert(result);
        confirmQue = confirm('Хотите увидеть следующий день?');
    }
} while (confirmQue == true);

// Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
let multiply = '';
for (let i = 2; i < 10; i++) {
    for (let k = 1; k < 11; k++) {
        multiply += `${i} умножить на ${k} = ` + i * k + '\n';
    }
}
console.log(multiply);
*/

/*  Игра« Угадай число».Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом:
             каждую итерацию цикла делите диапазон чисел пополам,
             записываете результат в N и спрашиваете у пользователя« Ваше число > N, < N или == N ? »
             .В зависимости от того, что указал пользователь, уменьшаете диапазон.Начальный диапазон от 0 до 100,
             поделили пополам и получили 50. Если пользователь указал, что его число > 50,
             то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N. 
        let border = 100;
        let expected;
        const numGuess = +prompt(`Загадайте число от 0 до ${border}`);
        do {
            expected = prompt(`Ваше число > ${border / 2}, < ${border / 2} или = ${border / 2}`)
        } while (numGuess !== expected)
        
*/
