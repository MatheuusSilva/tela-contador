const contadorElement = document.getElementById('contador');
const diminuirBtn = document.getElementById('Diminuir');
const zerarBtn = document.getElementById('Zerar');
const aumentarBtn = document.getElementById('Aumentar');

let count = 0;

function atualizarContador() {
    contadorElement.textContent = count;

  if (count < 0) {
    contadorElement.style.color = 'red';
  } else if (count > 0) {
    contadorElement.style.color = 'green';
  } else {
    contadorElement.style.color = 'black';
  }
}

diminuirBtn.addEventListener('click', () => {
    count--;
    atualizarContador();
});

aumentarBtn.addEventListener('click', () => {
    count++;
    atualizarContador();
});

zerarBtn.addEventListener('click', () => {
    count = 0;
    atualizarContador();
});

atualizarContador();