// ===== task-9 ======

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyBackground = document.querySelector('body');
const btnChangeColor = document.querySelector(".change-color");
const colorReflect = document.querySelector('.color');

btnChangeColor.addEventListener('click', newColor)
function newColor(evt) {
  const color = getRandomHexColor();
  bodyBackground.style.backgroundColor = color;
  colorReflect.textContent = `${color}`;
}


console.log(bodyBackground);
console.log(btnChangeColor);
console.log(getRandomHexColor);
