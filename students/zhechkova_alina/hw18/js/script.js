// node.append(...nodes or strings) – вставляет в node в конец,
// node.prepend(...nodes or strings) – вставляет в node в начало,
// node.before(...nodes or strings) – вставляет прямо перед node,
// node.after(...nodes or strings) – вставляет сразу после node,
// node.replaceWith(...nodes or strings) – заменяет node.
// node.remove() – удаляет node.

function createElem(options) {
    if (!options || !options.tagName) return;
    const tag = document.createElement(options.tagName);

    addClass(tag, options.classList)
    addAttributes(tag, options.attributes);
    addContent(tag, options.content);
    if (options.events) addEvents(tag, options.events)

    return tag;

}

function addEvents(node, events) {
    if (!node && !events) return;
    node.addEventListener(events.eventName, events.handler);
}

function addClass(node, classList) {
    if (!classList && !node) return;
    classList.split(' ').forEach(element => {
        node.classList.add(element)
    });
    //  node.classList.add(...classList.split(' '))
}

function addAttributes(node, options) {
    if (!options && !node) return;
    for (let key in options) {
        node.setAttribute(key, options[key])
    }
}

function addContent(node, content) {
    if (!content) return;

    if (typeof content === 'string') {
        node.textContent = content;
    } else if (content.nodeType === 1) {
        node.append(content)
    } else if (Array.isArray(content)) {
        content.forEach(element => {
            addContent(node, element);
        });
    }
}
const div1 = createElem({
    tagName: 'div',
    classList: 'my-div active center',
    attributes: {
        id: 'div',
        title: 'my div',
    },
    content: 'Text',
});

(function () {
    function getConstructorTask() {
        let count = 0;
        class Task {
            constructor(options) {
                this.id = count++;
                this.name = options.name;
                this.date = options.date;
                this.status = false;
            };

            info() {
                console.log(`Task name: ${this.name}.\nStatus: ${this.status}.\nDate: ${this.date}.\n`)
            };

            changeStatus() {
                this.status = !this.status;
            };
        }
        return Task;
    }
    const Task = getConstructorTask();

    class ToDo {
        constructor(options) {
            this.taskList = [];
            this.init(options);
        };

        init(options) {
            this.defaultClass = options.defaultClass || 'to-do';
            const defaultClass = this.defaultClass;
            this.$element = document.querySelector(options.parentSelector);
            this.$popupElement = document.querySelector(options.popupSelector);
            addEvents(this.$popupElement.querySelector('#popupBtn'), {
                eventName: 'click',
                handler: this.validatePopupData.bind(this)
            })

            this.$taskListElement = createElem({
                tagName: 'ul',
                classList: `${defaultClass}__list`,
            });

            const divAction = createElem({
                tagName: 'div',
                classList: `${defaultClass}__control`,
                content: createElem({
                    tagName: 'button',
                    classList: `${defaultClass}__add btn`,
                    attributes: {
                        type: 'button',
                    },
                    content: 'Add',
                    events: {
                        eventName: 'click',
                        handler: this.openPopUp.bind(this),
                    }
                })
            });
            addClass(this.$element, defaultClass);

            this.$element.append(this.$taskListElement, divAction);

        };
        validatePopupData() {
            const nameInput = this.$popupElement.querySelector('#name');
            const dateInput = this.$popupElement.querySelector('#date');
            const taskName = nameInput.value;
            const taskDate = dateInput.value;
            if (!taskName || !taskDate) {
                alert('Вы не ввели данные')
            } else {
                this.addTask({
                    name: taskName,
                    date: taskDate,
                });
                nameInput.value = '';
                dateInput.value = '';
                this.closePopUp()
            }
        };
        openPopUp() {
            this.$popupElement.classList.add('active');
        }
        closePopUp() {
            this.$popupElement.classList.remove('active')
        }
        addTask(options) {
            if (!options) return;
            const task = new Task(options);
            this.taskList.push(task);
            this.addTaskElem(options);
            return this.taskList;
        };

        addTaskElem(task) {
            const listItem = createElem({
                tagName: 'li',
                classList: `${this.defaultClass}__item`,
                content: [createElem({
                    tagName: 'span',
                    classList: `${this.defaultClass}__name`,
                    content: task.name,
                }), createElem({
                    tagName: 'span',
                    classList: `${this.defaultClass}__date`,
                    content: task.date,
                }), createElem({
                    tagName: 'span',
                    classList: `${this.defaultClass}__action`,
                    content: createElem({
                        tagName: 'button',
                        classList: `${this.defaultClass}__remove btn`,
                        attributes: {
                            type: 'button',
                            id: 'removeBtn'
                        },
                        content: 'Remove',
                    }),
                }), ]
            });
            this.$taskListElement.append(listItem)
        };

        removeTask(taskId) {
            const indexTask = this.findTaskIndex(taskId);
            if (indexTask === -1) return;
            return this.taskList.splice(indexTask, 1);
        };

        findTaskIndex(taskId) {
            return this.taskList.map(task => task.id).indexOf(taskId);
        };
    }
    const toDoFirst = new ToDo({
        parentSelector: '#app',
        defaultClass: 'to-do',
        popupSelector: '.popup',
    });
    toDoFirst.addTask({
        name: 'Go to home',
        date: '25.06.2021',
    });
    toDoFirst.addTask({
        name: 'Finish hw',
        date: '26.06.2021',
    });
    toDoFirst.addTask({
        name: 'Watch tv series',
        date: '22.06.2021',
    });
})();
(function () {
    /*1. Создать страницу, которая выводит нумерованный список песен:

var playList = [

{

 author: "LED ZEPPELIN",

 song:"STAIRWAY TO HEAVEN"

},

{

 author: "QUEEN",

 song:"BOHEMIAN RHAPSODY"

},

{

 author: "LYNYRD SKYNYRD",

 song:"FREE BIRD"

},

{

 author: "DEEP PURPLE",

 song:"SMOKE ON THE WATER"

},

{

 author: "JIMI HENDRIX",

 song:"ALL ALONG THE WATCHTOWER"

},

{

 author: "AC/DC",

 song:"BACK IN BLACK"

},

{

 author: "QUEEN",

 song:"WE WILL ROCK YOU"

},

{

 author: "METALLICA",

 song:"ENTER SANDMAN"

}

];
*/
    //2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.

    //3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.*/
})()
