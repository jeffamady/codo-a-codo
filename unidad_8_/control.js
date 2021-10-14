const info = document.querySelector('.info');
const help = document.querySelector('.help');
const form = document.querySelector('form');
const close = document.querySelector('.close');
const usuario = document.getElementById('usuario');
const clave = document.getElementById('clave');


const closeInfo = () => {
    info.style.display = 'none';
}
close.onclick = closeInfo;

