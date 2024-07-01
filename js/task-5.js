function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanColor = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

function onChangeColorBtn() {
  const changeBackgroundColor = document.body.style.background = getRandomHexColor();
  spanColor.textContent = changeBackgroundColor;
}

changeColorBtn.addEventListener('click', onChangeColorBtn);