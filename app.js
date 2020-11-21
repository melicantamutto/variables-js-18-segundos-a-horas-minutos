console.log('Segundos a horas, minutos y segundos')

alert('Calculador de segundos a horas, minutos y segundos')

const segundos = prompt('Ingrese la cantidad de segundos');
const restoHoras = (segundos % 360);
const restoMinutos = (segundos % 60);

const horas = (segundos - restoHoras) / 360;
const minutos = (segundos - restoMinutos) / 60;


alert(`${segundos} segundos equivalen a:
        ${horas} horas ${restoHoras} segundos
        o a ${minutos} minutos ${restoMinutos} segundos.
`)