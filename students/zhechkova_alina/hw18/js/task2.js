//2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.
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
    if (!node && !styleList) return;
    for (let key in styleList) {
        node.style[key] = styleList[key];
    }
}





function modalW() {
    const popUp = document.getElementById('openModal');
    openPopUp(popUp);
    closePopUp(popUp);
}

function openPopUp(node) {
    const btnOpen = document.getElementById('btnOpen');
    addEvents(btnOpen, {
        eventName: 'click',
        handler: node.classList.add('active'),
    });
}

function closePopUp(node) {
    const btnClose = document.getElementById('btnClose');
    addEvents(btnClose, {
        eventName: 'click',
        handler: node.classList.remove('active'),
    });
}
modalW()
