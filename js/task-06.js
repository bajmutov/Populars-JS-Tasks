const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  if(textInput.value.length == textInput.dataset.length){
    textInput.classList.toggle('valid');
  } else textInput.classList.toggle('invalid')
  });
