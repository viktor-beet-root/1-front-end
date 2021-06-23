/* 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

поле, хранящее радиус окружности;
get-свойство, возвращающее радиус окружности;
set-свойство, устанавливающее радиус окружности;
get-свойство, возвращающее диаметр окружности;
метод, вычисляющий площадь окружности;
метод, вычисляющий длину окружности.
Продемонстрировать работу свойств и методов. 
*/
class Circle1 {
    constructor(rad) {
        this._radius = rad;
    }
    getCircleWidth() {
        return Math.ceil(this.radius * 2 * Math.PI);
    };
    getCircleArea() {
        return Math.ceil(this.radius ** 2 * Math.PI);
    };
    get radius() {
        return this._radius;
    }
    get diam() {
        return this._radius * 2;
    }
    set newRad(newRadius) {
        if (newRadius <= 0) alert('Wrong!');
        this._radius = newRadius;
    }
}
const newCircle1 = new Circle1(10);

console.log(newCircle1.radius, newCircle1.diam, newCircle1.getCircleWidth())

newCircle1.newRad = 100;
console.log(newCircle1.radius)
/*
2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

поле, которое хранит цвет маркера;
поле, которое хранит количество чернил в маркере (в процентах);
метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.

Продемонстрировать работу написанных методов. 
*/
class Marker {
    constructor(options) {
        this._color = options.color;
        this._ink = options.ink;
    }
    print(text) {
        const p = createElement('p', 'div');
        p.setAttribute('style', `color: ${this._color}`);
        let arr = text.split('')
        let indexOfSpace = getArrayFromStr(arr)
        getQtyItem(indexOfSpace, arr);
        let result = getText(this, arr, text);
        p.textContent = result;
    }
}

function getArrayFromStr(array) {
    let indexArr = [];
    array.forEach(function (item, index) {
        if (item === ' ') indexArr.push(index);
    });
    return indexArr;
}

function getText(defaultArray, arr, text) {
    let result = getQtyInk(defaultArray, arr);
    addSpace(text, result);
    return result.join('');;
}

function getQtyInk(defaultArray, arr) {
    let result = [];
    let ink = 0;
    let i = 0;
    while (ink < defaultArray._ink) {
        ink = result.length * 0.5
        result.push(arr[i])
        i++;
    }
    return result;
}

function addSpace(text, result) {
    let index = getArrayFromStr(text.split(''));
    index.forEach(function (item) {
        result.splice(item, 0, ' ');
        for (let i = 0; i < index.length; i++) {
            index[i];
        }
    });
}

function createElement(name, id) {
    const element = document.createElement(name);
    const div = document.getElementById(id);
    div.prepend(element);
    return element;

}


function getQtyItem(index, array) {
    index.forEach(function (item) {
        array.splice(item, 1);
        for (let i = 0; i < index.length; i++) {
            index[i]--;
        }
    });
}

const newMarker = new Marker({
    color: 'red',
    ink: 35,
})
newMarker.print('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum');

/*
3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.
Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().
Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().*/


function Employee(options) {
    this.employeeList = [];
}
Employee.prototype.setNewEmployee = function (options) {
    if (!options) return;
    const employee = new ConstrutEmployee(options);
    this.employeeList.push(employee)
}

function ConstrutEmployee(options) {
    this.name = options.name;
    this.age = options.age;
    this.state = options.state;
    this.position = options.position;
}
const employeeList = new Employee()
employeeList.setNewEmployee({
    name: 'Valera',
    age: 19,
    state: 'male',
    position: 'banker'
})
employeeList.setNewEmployee({
    name: 'Stepa',
    age: 28,
    state: 'male',
    position: 'banker'
});
console.log(employeeList);
/*class EmpTable {
    constructor(options) {
        this._array = options;
    }
    getHtml() {
        const table = createElement('table', 'div2');
        table.setAttribute('id', 'table');
        const tr = createElement('tr', 'table');
        tr.setAttribute('id', 'tr');
    }
}
*/
