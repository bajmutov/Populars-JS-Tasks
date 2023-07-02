let range = document.querySelector("#font-size-control");
let text = document.querySelector("#text");

onRange();

range.addEventListener("input", onRange);

function onRange() {
  text.style.fontSize = range.value + "px";
}
