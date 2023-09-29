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
  const LiElement = document.createElement('li');
  LiElement.textContent = ingredients;
  LiElement.classList.add('item');
  listOfIngredients.append(LiElement);
  console.log(LiElement);
  
}); 
