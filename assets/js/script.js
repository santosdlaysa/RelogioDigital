const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const semana = document.getElementById('semana');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    let sm = dateToday.getDay();
    let dy = dateToday.getDate();
    let mn = dateToday.getMonth() + 1;
    let yr = dateToday.getFullYear();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if(sec < 10) sec = '0' + sec;


    switch (mn) {
        case 1:
            mn = 'de Janeiro de';
            break;
        case 2:
            mn = 'de Fevereiro de';
            break;
        case 3:
            mn = 'de Março de';
            break;
        case 4:
            mn = 'de Abril de';
            break;
        case 5:
            mn = 'de Maio de';
            break;
        case 6:
            mn = 'de Junho de';
            break;
        case 7:
            mn = 'de Julho de';
            break;
        case 8:
            mn = 'de Agosto de';
            break;
        case 9:
            mn = 'de Setembro de';
            break;
        case 10:
            mn = 'de Outubro de';
            break;
        case 11:
            mn = 'de Novembro de';
            break;
        case 12:
            mn = 'de Dezembro de';
            break;
    }

    switch (sm) {
        case 0:
            sm = 'Domingo,';
            break;
        case 1:
            sm = 'Segunda-feira,';
            break;
        case 2:
            sm = 'Terça-feira,';
            break;
        case 3:
            sm = 'Quarta-feira,';
            break;
        case 4:
            sm = 'Quinta-feira,';
            break;
        case 5:
            sm = 'Sexta-feira,';
            break;
        case 6:
            sm = 'Sábado';
            break;
    }

    if (dy == 1 || dy == 21 || dy == 31) {
        dy = dy + 'º';
    }

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;

    semana.textContent = sm;
    day.textContent = dy;
    month.textContent = mn;
    year.textContent = yr;

})




 

