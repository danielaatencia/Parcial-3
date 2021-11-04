const mensajes = [
    {
        mensaje: 'Sin embargo, aunque no podemos adivinar el mundo que será, bien podemos imaginar el que queremos que sea. El derecho de soñar no figura entre los treinta derechos humanos que las Naciones Unidas proclamaron a fines de 1948. Pero si no fuera por él, y por las aguas que da de beber, los demás derechos se morirían de sed',
        autor: 'Eduardo Galeano.'
    },
    {
        mensaje: 'La educación es algo admirable, pero es bueno recordar de cuando en cuando que nada de lo que merece la pena saber puede ser enseñado',
        autor: 'Oscar Wilde'
    }, 
    {
        mensaje: 'Cuando es verdadera, cuando nace de la necesidad de decir, a la voz humana no hay quien la pare. Si le niegan la boca, ella habla por las manos, o por los ojos, o por los poros, o por donde sea',
        autor: 'Eduardo Galeano'
    },
    {
        mensaje: 'Nunca pensé que en la felicidad hubiera tanta tristeza',
        autor: 'Mario Benedetti'
    },
    {
        mensaje: 'Las cosas simples son las más extraordinarias y sólo los sabios consiguen verlas',
        autor: 'Paulo Coelho'
    }
];

const onClickParar = () => {
    const botonParar = document.querySelector('#parar');
    const textoActial = botonParar.innerHTML;
    if (textoActial === 'Parar') {
        botonParar.innerHTML = 'Iniciar';
    }
    else {
        botonParar.innerHTML = 'Parar';
    }
}

const generarMensaje = () => {
    const botonParar = document.querySelector('#parar')?.innerHTML;
    if (botonParar === 'Iniciar') {
        return;
    }
    const contador = +(document.querySelector('#contador')?.innerHTML || 0);
    const main = document.querySelector('#main');
    const mensajeIndex = contador % mensajes.length;
    const { mensaje, autor } = mensajes[mensajeIndex];
    main.innerHTML = `<section class="section"><div><p class="frase">"${mensaje}"</p><p class="autor">- ${autor}</p></div><div class="botonContenedor"><button class="parar" id="parar" onClick="onClickParar()">Parar</button></button><div class="oculto" id="contador">${contador + 1}</div></section>`;
};

const mensajeInteral = () => setInterval(generarMensaje, 5000);

const init = () => {
    generarMensaje();
    mensajeInteral();
}

window.addEventListener("load", init, false);