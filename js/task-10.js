const numberElementsField = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = numberElementsField.value;
  const divBasicSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const size = divBasicSize + i * 10;
    const divEl = document.createElement("div");
       divEl.style.width = size + 'px';
       divEl.style.height = size + 'px';
       divEl.style.backgroundColor = getRandomHexColor();
       fragment.appendChild(divEl);
  }
  divBoxes.appendChild(fragment);
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
   }
