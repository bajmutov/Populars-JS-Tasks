// 1 variant
// const categoriesElement = document.querySelector("#categories");

// console.log(`Number of categories: ${categoriesElement.children.length}`);
// console.log("");

// const numberCategories = [...categoriesElement.children].forEach((item) => {
//   console.log(`Category: ${item.firstElementChild.textContent}`);
//   console.log(`Elements: ${item.lastElementChild.children.length}`);
//   console.log("");
// });

// 2 variant
const categoriesElement = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesElement.length}`);
console.log("");

const numberCategories = categoriesElement.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
  console.log("");
});
