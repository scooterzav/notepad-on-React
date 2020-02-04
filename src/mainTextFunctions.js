export function setMainText(text) {
    document.querySelector('.MainInput').value = text;
}

export function getMainText() {
    return document.querySelector('.MainInput').value;
}