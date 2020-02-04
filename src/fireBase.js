const dbUrl = 'https://notepad-react-39de1.firebaseio.com';

export async function get() {
    const res = await fetch(`${dbUrl}/main.json`);
    const data = await res.json();
    return data;
}

export async function post(data) {
    fetch(`${dbUrl}/main.json`, {
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(res=>res.json())
        .then(data=>{})
        .catch(()=>alert('Что-то пошло не так!'))    
}