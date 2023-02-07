const categoriesList = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesList.length};`);

const categoriesArr = [...categoriesList].map(el => {
return `Category: ${el.querySelector("li.item h2").textContent},
Elements: ${el.querySelectorAll("li.item li").length};
`}).join("");
console.log(categoriesArr);