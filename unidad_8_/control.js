const divInfo = document.querySelector('.divInfo');
const help = document.querySelector('.help');
const form = document.querySelector('form');
const close = document.querySelector('.close');
const usuario = document.getElementById('usuario');
const clave = document.getElementById('clave');

const closeInfo = () => {
    divInfo.style.display = 'none';
}
close.onclick = closeInfo;

const showInfo = info => {
    console.log(info)
    divInfo.style.display = 'block'
    help.innerHTML = info;
}

let infoCallback = info =>
() => showInfo(info);

const setupInfo = () => {
    const infoText = [
        {
            'id': 'usuario',
            'info': 'Nombre de usuario debe tener @'
        },
        {
            'id': 'clave',
            'info': 'Su clave debe tener mas de 4 digitos'
        }
    ];

    for(let i=0; i<infoText.length; i++) {
        let obj = infoText[i];
        console.log(obj.info)
        document.getElementById(obj.id).onfocus = infoCallback(obj.info) ;
    }
}

setupInfo();

const toVerify = e => {
    divInfo.style.display = 'block'
    if(usuario.value === '' || clave.value === '') {
        e.preventDefault();
        help.innerHTML = 'Ambos campos son obligatorios!'
    }
    
    if (clave.value.length < 5 && clave.value != '') {
        e.preventDefault();
        help.innerHTML = 'Su clave debe tener mas de 4 digitos';
    }
    
    if(!usuario.value.includes('@') && usuario.value !== '') {
        e.preventDefault();
        help.innerHTML = 'Nombre de usuario debe tener @';

    }
}

form.onsubmit = toVerify;

