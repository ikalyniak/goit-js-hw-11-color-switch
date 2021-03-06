const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
};

refs.btnStop.disabled = true;
let intervalId = null;

refs.btnStart.addEventListener('click', onBtnStart);
refs.btnStop.addEventListener('click', onBtnStop);

function onBtnStart() {
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;

  intervalId = setInterval(() => {
    const color = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = colors[color];
  }, 1000);
};

function onBtnStop() {
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
  clearInterval(intervalId);
 };

