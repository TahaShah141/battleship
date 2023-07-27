
export function newElement(tag, ...classes) {
    let element = document.createElement(tag);
    classes.forEach(cls => element.classList.add(cls));

    return element;
}

export function newPara(text, ...classes) {
    let para = newElement("p", ...classes);
    para.textContent = text;

    return para;
}

export function newInput(placeholderText) {
    let container = newElement("div", "input-container", "center");

    let label = newElement("label", "input-label");
    label.textContent = placeholderText;
    let input = newElement("input", "input-field");
    input.placeholder = placeholderText;

    container.appendChild(input);
    container.appendChild(label);

    return container;
}

export function setupLayout(main) {
    if (!main) return;
    const body = document.body;
    clearScreen();
    const header = getHeader();
    const footer = getFooter();

    body.appendChild(header);
    body.appendChild(main);
    body.appendChild(footer);
}

export function getHeader() {
    let header = newElement("header", "header", "center");

    let title = newElement("h1", "header-title");
    title.textContent = "Battleship";

    header.appendChild(title);
    return header;
}

export function clearScreen() {
    let header = document.querySelector(".header");
    removeDOM(header);
    let main = document.querySelector(".main");
    removeDOM(main);
    let footer = document.querySelector(".footer");
    removeDOM(footer);
}

function removeDOM(dom) {
    if (dom) dom.parentNode.removeChild(dom);
}

export function getFooter() {
    let footer = newElement("footer", "footer", "center");
    let text = "Copyright © Taha Shah 2023";

    footer.appendChild(newPara(text));
    return footer;
}

