let range = document.querySelector('#font-size-control');
let text = document.querySelector('#text');

range.addEventListener("input", () => {            
    text.style.fontSize = range.value + 'px';           
  });
