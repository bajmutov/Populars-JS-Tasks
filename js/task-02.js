const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listElements = ingredients.map((fruit) => {
  const listItem = document.createElement("li");
  listItem.textContent = fruit;
  listItem.classList.add("item");
  return listItem;
});

// console.log(listElements);
const list = document.querySelector("#ingredients");
list.append(...listElements);
