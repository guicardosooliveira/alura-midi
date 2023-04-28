let listaDeTeclas = document.querySelectorAll('.tecla')

function playSound(seletorAudio) {
    let elemento = document.querySelector(seletorAudio);
    if (elemento && elemento.localName === "audio") {
        elemento.play();
    } else {
        console.log("Elemento não encontrado")
    }
}


for (let i = 0; i < listaDeTeclas.length; i++) {

    let sound = listaDeTeclas[i].classList[1];
    let tecla = listaDeTeclas[i]

    tecla.onclick = function () {
        playSound(`#som_${sound}`)
    };

    tecla.onkeydown = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.remove('ativa');
        }
    }
}