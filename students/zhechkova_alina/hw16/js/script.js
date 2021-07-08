// 1. Создать массив« Список покупок».Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет.Написать несколько функций для работы с таким массивом.

const shoppingList = [{
        name: 'Milk',
        qty: 2,
        buy: 'No',
    }, {
        name: 'Chocolate',
        qty: 3,
        buy: 'No',
    }, {
        name: 'Wine',
        qty: 1,
        buy: 'Yes',
    }, {
        name: 'Bread',
        qty: 3,
        buy: 'No',
    },
    {
        name: 'Water',
        qty: 5,
        buy: 'Yes',
    }, {
        name: 'Pineapple',
        qty: 2,
        buy: 'Yes',
    },
];

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом– купленные.
function getAllList() {
    let notBought = [];
    let bought = [];
    let result = [];
    this.forEach(function (item) {
        if (item.buy === 'No') {
            notBought.push(item)
        } else if (item.buy === 'Yes') {
            bought.push(item)
        }
    });
    return result.concat(notBought, bought);
};

const getAllListRes = getAllList.call(shoppingList);
console.log(getAllListRes);

// Покупка продукта.Функция принимает название продукта и отмечает его как купленный.
function buyProduct(prodName) {
    this.forEach(function (item) {
        if (item.name === prodName) {
            item.buy = 'Yes';
        };
    });
};
buyProduct.call(shoppingList, 'Milk');
console.log(shoppingList);

// Добавление покупки в список.Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
function addProduct(options) {
    if (!options) return;
    const trueFalse = this.forEach(element => {
        if (element.name === options.name) return true;
    });
    switch (trueFalse) {
        case undefined:
            this.push(options);
            break;
        default:
            trueFalse.qty++;
    }
}

addProduct.call(shoppingList, {
    name: 'Chocolate1',
    qty: 1,
    buy: 'No'
});
console.log(shoppingList);

// 2. Создать массив, описывающий чек в магазине.Каждый элемент массива состоит из названия товара, количества и цены за единицу товара.Написать следующие функции:

const shopCheck = [{
        name: 'Milk',
        qty: 2,
        price: 12,
    }, {
        name: 'Chocolate',
        qty: 3,
        price: 33,
    }, {
        name: 'Wine',
        qty: 1,
        price: 44,
    }, {
        name: 'Bread',
        qty: 3,
        price: 23,
    },
    {
        name: 'Water',
        qty: 5,
        price: 12,
    }, {
        name: 'Pineapple',
        qty: 2,
        price: 20,
    },
]
// Распечатка чека на экран
function getOnScreen(property) {
    let result = ``;
    this.forEach(function (item) {
        for (let key in item) {
            result += `${key}: ${item[key]}\n`;
            if (key === property) result += `\n`
        }
    });
    return result;
}
const resultCheck = getOnScreen.call(shopCheck, 'price')
console.log(resultCheck);
const arr1 = [1, 2, 4, 5];



// Подсчет общей суммы покупки;
function forEachItem(property, array) {
    let result = 0;
    result = array.reduce((prev, item) => {
        return prev + item[property];
    }, 0);
    return result;
}

function getWholePrice() {
    return forEachItem('price', this);
}
const resultPrice = getWholePrice.call(shopCheck)
console.log(resultPrice);

// Подсчет средней стоимости одного товара в чеке.
function getAveragePrice() {
    let result = forEachItem('price', this);
    return result / this.length;
}
const resultAveragePrice = getAveragePrice.call(shopCheck)
console.log(resultAveragePrice);


// Получение самой дорогой покупки в чеке;
function getBigPrice() {
    let price = [];
    this.forEach(function (item) {
        price.push(item.price);
    })
    return Math.max.apply(null, price);
}
console.log(getBigPrice.call(shopCheck))


// 3. Создать массив CSS - стилей(цвет, размер шрифта, выравнивание, подчеркивание и т.д.).Каждый элемент массива– это объект, состоящий из двух свойств: название стиля и значение стиля.Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах < p > < /p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
const arrCss = [{
    name: 'color',
    value: 'red',
}, {
    name: 'text-transform',
    value: 'uppercase',
}, {
    name: 'font-style',
    value: 'italic',
}, {
    name: 'text-align',
    value: 'center',
}, ]

function docStyle(styleName, text) {
    if (!text) return;
    const p = document.createElement('p');
    p.textContent = text;
    const cssStyle = this.find(function (item) {
        return item.name === styleName;
    });
    p.setAttribute('style', `${cssStyle.name}: ${cssStyle.value}`);
    const div = document.getElementById('div');
    div.prepend(p);
}

const docStyleRes = docStyle.call(arrCss, 'text-transform', 'sdfsdfsdf');
const docStyleRes2 = docStyle.call(arrCss, 'color', 'sdfsdfsdf');


// 4. Создать массив аудиторий академии.Объект - аудитория состоит из названия, количества посадочных мест(от 10 до 20) и названия факультета, для которого она предназначена.Написать несколько функций для работы с ним ^

const auditory = [{
    title: '144b',
    place: 13,
    faculty: 'FMM',
}, {
    title: '155',
    place: 15,
    faculty: 'FEA',
}, {
    title: '119a',
    place: 15,
    faculty: 'FMM',
}, {
    title: '17-b',
    place: 20,
    faculty: 'FTI',
}, {
    title: '12',
    place: 10,
    faculty: 'FMM',
}, {
    title: '122D',
    place: 18,
    faculty: 'FEA',
}, ]
// Вывод на экран всех аудиторий;

console.log(getOnScreen.call(auditory, 'faculty'));

// Вывод на экран аудиторий для указанного факультета;
function getForFaculty(faculty) {
    if (!faculty) return;
    let result = [];
    this.find(function (item) {
        if (item.faculty === faculty) result.push(item);
    })
    return getOnScreen.call(result, 'faculty');
}
console.log(getForFaculty.call(auditory, 'FMM'))
/* Вывод на экран только тех аудиторий, которые подходят для переданной группы.Объект - группа состоит из названия, количества студентов и названия факультета;
Функция сортировки аудиторий по количеству мест;
Функция сортировки аудиторий по названию(по алфавиту).
*/
