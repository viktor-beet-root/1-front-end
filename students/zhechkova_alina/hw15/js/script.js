/*function counter() {
    let counter = 0;
    return function () {
        return ++counter;
    }
}
console.log(counter()());
const counterRes = counter();
console.log(counterRes());
console.log(counterRes());

function add (a,b) {
    return a + b;
}
const addRes  = add (5,2);
console.log('Use add: ' + addRes);


function sum1(a,b,callback) {
    return callback (a,b);
}

const sumRes = sum1(5,2, function (a,b) {
    return a + b;
})

console.log('Use sum: ' + sumRes);


function info(name) {
    return function (surname) {
        return name + ' ' + surname;
    }
}

function calc(operator) {
    if (valid1(operator)) { 
        return function (a,b) {
        if (operator === '+') return a + b;
        if (operator === '-') return a - b;
        if (operator === '/') return a / b;
        if (operator === '*') return a * b;
       }   
    }  else return function(){
        alert('wrong operator');
    }
}
const calcRes = calc('+');
console.log(calcRes(3,5));
function valid1(a) {
    return (a === '+' || a === '-' ||  a === '/' ||  a === '*');
}

function message(name, fn) {
    return fn(name);
}
const m = console.log(message('Petya', function(a) {
    console.log(a);
}))

function num(a, valid, invalid) {
    if (a > 0 && a < 10) return valid(a)
    else return invalid(a);
}
function valid(a) {
    console.log(`Ura: ${a}`)
}
function invalid(a) {
    console.log(`Beda: ${a}`);
    console.log(`Ожидалось от 1 до 9`);
}
const numRes = num(10, valid, invalid)


function factorial (n) {
    if (n === 1) return 1

}

*/
// Вариант с циклами
function multi(a, valid, invalid, validator) {
    if (validator(a)) return valid(a)
    else return invalid(a);
}

function validator(a) {
    return (a > 0 && a < 10);
}
function createTable(a) {
    let result;
        for (let i = 1, k = 0; i < 10; i++) {
        k = a * i;
        result = `${a} умножить на ${i} =  ${k}`;
        console.log(result);
    }
}
function error(a) {
    console.log('Неправильно! Введите цифру от 1 до 9')
}
const multiRes = multi(9, createTable, error, validator);
