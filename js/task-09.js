const widgetElement = document.querySelector(".widget");
const changeColorButton = document.querySelector(".change-color");
const nameColor = document.querySelector(".color");
const bgc = document.body;

changeColorButton.addEventListener("click", onChangeBgkClick);

function onChangeBgkClick() {
  bgc.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = bgc.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
   }
