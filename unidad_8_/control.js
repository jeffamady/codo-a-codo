const divInfo = document.querySelector('.divInfo');
const help = document.querySelector('.help');
const form = document.querySelector('form');
const close = document.querySelector('.close');
const usuario = document.getElementById('usuario');
const clave = document.getElementById('clave');

let visibleStyles = `
    visibility:visible;
    width:100%;
    height:4em;
    opacity:1;
    transition:visibility .5s, opacity .5s linear;
`;

let invisibleStyles = `
    visibility:hidden;
    opacity:0.5;
    transition:visibility 1.5s, opacity 1.5s linear;
`;



const closeInfo = () => {
    divInfo.style= invisibleStyles;
}
close.onclick = closeInfo;

const showInfo = info => {
    console.log(info)
    divInfo.style = visibleStyles;
    help.innerHTML = info;
    setTimeout(closeInfo, 9000)
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
    divInfo.style = visibleStyles;
    setTimeout(closeInfo, 9000)

}

form.onsubmit = toVerify;

