const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]; 


const ingredientsList = document.querySelector("#ingredients");
const itemArr = [];

ingredients.forEach(element => {
  const item = document.createElement("li");

  item.textContent = element;
  item.classList.add("item");
  itemArr.push(item);
});

ingredientsList.append(...itemArr);