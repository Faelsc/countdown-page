'use strict';

const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const QuantidadeSegundos = tempo % 60;
    const QuantidadeMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const QuantidadeHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const QuantidadeDias = Math.floor(tempo  / (60 * 60 * 24));

    segundos.textContent = formatarDigito(QuantidadeSegundos);
    minutos.textContent = formatarDigito(QuantidadeMinutos);
    horas.textContent = formatarDigito(QuantidadeHoras);
    dias.textContent = formatarDigito(QuantidadeDias);
}

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);
    
    const contar = () => {
        if (tempo === 0) {
            pararContagem();
        }
        atualizar (tempo);
        tempo--;
    }
    const id = setInterval(contar, 1000);
}; 

const tempoRestante = () => {
    const dataEvento = new Date ('2023-11-09 18:00:00');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje) / 1000);
}

contagemRegressiva(tempoRestante());