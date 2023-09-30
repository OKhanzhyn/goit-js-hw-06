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
const liArr = [];
 ingredients.forEach(function (ingredients) {
  const liElement = document.createElement('li');
  liElement.textContent = ingredients;
  liElement.classList.add('item');
  liArr.push(liElement);
}); 
listOfIngredients.append(...liArr); 
console.log(listOfIngredients);

//  const firstLiElement = document.createElement('li');
//  firstLiElement.textContent = ('Potatoes');
//  firstLiElement.classList.add('item');
//  const secondLiElement = document.createElement('li');
//  secondLiElement.textContent = ('Mushrooms');
//  secondLiElement.classList.add('item');
//  const therdLiElement = document.createElement('li');
//  therdLiElement.textContent = ('Garlic');
//  therdLiElement.classList.add('item');
//  const forthLiElement = document.createElement('li');
//  forthLiElement.textContent = ( 'Tomatos');
//  forthLiElement.classList.add('item');
//  const fifthLiElement = document.createElement('li');
//  fifthLiElement.textContent = ('Herbs');
//  fifthLiElement.classList.add('item');
//  const sixLiElement = document.createElement('li');
//  sixLiElement.textContent = ('Condiments');
//  sixLiElement.classList.add('item');
//  listOfIngredients.append(firstLiElement, secondLiElement,therdLiElement, forthLiElement, fifthLiElement, sixLiElement);  
//  console.log(listOfIngredients);
