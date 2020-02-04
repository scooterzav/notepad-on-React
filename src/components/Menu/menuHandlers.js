import * as fireBase from './../../fireBase'

function loadingVisible(visible) {
    const LoadingIcon = document.getElementById('LoadingIcon');
    LoadingIcon.style.display = visible ? 'inline-block' : 'none'
}

export function save() {
    alert('In developing');
}

export async function saveAs(popupDispatch) {
    loadingVisible(true);
    const serverData = await fireBase.get();
    loadingVisible(false);
    popupDispatch({handler:"SHOW", title:'SAVE TO SERVER', type:"server", data:{query:'post', serverData:serverData}});
}

export async function open(popupDispatch) {
    loadingVisible(true);
    const serverData = await fireBase.get();
    loadingVisible(false);
    popupDispatch({handler:"SHOW", title:'OPEN FROM SERVER', type:"server", data:{query:'get', serverData:serverData}});
}

export function clear() {
    document.querySelector('.MainInput').value = '';
}


