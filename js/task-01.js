const categoriesElement = document.querySelector("#categories");

console.log(`Number of categories: ${categoriesElement.children.length}`);
console.log("");

const numberCategories = [...categoriesElement.children].forEach(
  (item, _, array) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
    console.log("");
  }
);
