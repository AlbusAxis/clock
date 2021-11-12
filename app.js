'use strict'
setInterval(setClock, 1000);

const hourHint = document.querySelector(['[data-hour']);
const minuteHint = document.querySelector('[data-minute]');
const secondHint = document.querySelector('[data-second]');

function setClock () {
    const currentTime = new Date();
    const secondsRatio = currentTime.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentTime.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentTime.getHours()) / 12;
    setRotation(secondHint, secondsRatio);
    setRotation(minuteHint, minutesRatio);
    setRotation(hourHint, hoursRatio);
};

function setRotation (element, rotationRatio) {
element.style.setProperty('--rotation', rotationRatio * 360);
};

setClock();