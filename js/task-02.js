// ===== task-2 ======
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listOfIngredients = document.querySelector('#ingredients');

 ingredients.forEach(function (ingredients) {
  const liElement = document.createElement('li');
  liElement.textContent = ingredients;
  liElement.classList.add('item');
  listOfIngredients.append(liElement);  
}); 

console.log(listOfIngredients);

