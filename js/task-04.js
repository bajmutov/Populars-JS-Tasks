let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterElement = document.querySelector('#value');

decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
  counterValue -= 1;
  counterElement.textContent = counterValue;
  }

function onIncrementBtnClick() {
  counterValue += 1;
    counterElement.textContent = counterValue;
  }
