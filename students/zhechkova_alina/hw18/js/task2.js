function createElem(options) {
    const tag = document.createElement(options.tagName);
    addClass(tag, options.classList);
    addAttributes(tag, options.attributes);
    if (options.content) addContent(tag, options.content);
    addStyle(tag, options.styleList);
    if (options.events) addEvents(tag, options.events);
    return tag;
}

function addAttributes(node, attributes) {
    if (!node && !attributes) return;
    for (let key in attributes) {
        node.setAttribute(key, attributes[key])
    }
}

function addEvents(node, events) {
    if (!node && !events) return;
    node.addEventListener(events.eventName, events.handler);
}

function addClass(node, classList) {
    if (!node && !classList) return;
    if (typeof classList === 'string') {
        node.classList.add(...classList.split(' '));
    } else if (Array.isArray(classList)) {
        addClass(node, classList.join(' '));
    }
}

function addContent(node, content) {
    if (!node && !content) return;
    if (typeof content === 'string') {
        node.textContent = content;
    } else if (content.nodeType == 1) {
        node.append(content);
    } else if (Array.isArray(content)) {
        content.forEach(function (item) {
            addContent(node, item)
        })
    }
}

function addStyle(node, styleList) {
    if (!node || !styleList) return;
    for (let key in styleList) {
        node.style[key] = styleList[key];
    }
}


//2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.

function ModalWindowConstructor() {
    let count = 0;

    class Modal {
        constructor(options) {
            this.id = count++;
            this.init(options);
        }
        init(options) {
            this.$defaultElement = document.getElementById('app');
            this.defaultClass = options.defaultClass || 'modal';
            this.$btnOpen = createElem({
                tagName: 'button',
                classList: 'btn',
                attributes: {
                    id: `btnOpen${this.id}`,
                    type: 'button'
                },
                content: 'Open',
                events: {
                    eventName: 'click',
                    handler: this.togglePopUp.bind(this),
                }
            });
            this.$modalObj = createElem({
                tagName: 'div',
                classList: this.defaultClass,
                content: createElem({
                    tagName: 'div',
                    classList: `${this.defaultClass}-dialog`,
                    content: createElem({
                        tagName: 'div',
                        classList: `${this.defaultClass}-content`,
                        content: [createElem({
                                tagName: 'h3',
                                classList: `${this.defaultClass}-title`,
                                content: options.title,
                            }), createElem({
                                tagName: 'p',
                                classList: `${this.defaultClass}-text`,
                                content: options.text,
                            }),
                            createElem({
                                tagName: 'button',
                                classList: 'btn',
                                attributes: {
                                    id: `btnClose${this.id}`,
                                    type: 'button'
                                },
                                content: 'close',
                                events: {
                                    eventName: 'click',
                                    handler: this.togglePopUp.bind(this),
                                }
                            })
                        ],
                    })
                })
            });
            this.$defaultElement.append(this.$btnOpen, this.$modalObj);
        }
        togglePopUp() {
            this.$modalObj.classList.toggle('active');
        }
    }
    return Modal;
};

const ModalWindow = new ModalWindowConstructor();

const modal = new ModalWindow({
    title: 'New modal window',
    text: 'Hello, My name is Alina and this is my new modal window'
});

const modal1 = new ModalWindow({
    title: 'Lkasj',
    text: 'ksjdnfs'
});
const modal3 = new ModalWindow({
    title: 'sedds',
    text: 'ksjdnfs'
});
