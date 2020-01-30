export function save() {
    const mainInput = document.querySelector('.MainInput');
    console.log('send to server: ',mainInput.value);
}

export function saveAs() {
    const mainInput = document.querySelector('.MainInput');
    console.log('send to server as: ',mainInput.value);
}

export function open() {
    const mainInput = document.querySelector('.MainInput');
    let textFromServer = "this is text";
    mainInput.value = textFromServer;
}

export function clear() {
    const mainInput = document.querySelector('.MainInput');
    mainInput.value = ''; 
}


