

  // ===== task-4 ======
const counterValue = document.querySelector("#counter");

const resultCount = document.querySelector('#value');
let currentCount = 0;

const incrementBtn = document.querySelector('button[data-action="increment"]'); 
incrementBtn.addEventListener("click", incrBtn);
function incrBtn(event) {
    currentCount += 1;
    resultCount.textContent = currentCount;
    };

const decrementBtn = document.querySelector('button[data-action="decrement"]'); 
decrementBtn.addEventListener("click", decrBtn);
function decrBtn(event) {
    currentCount -= 1;
    resultCount.textContent = currentCount;
}; 

console.log(counterValue);
// console.log(resultCount);
console.log(currentCount);
// console.log(incrementBtn);
// console.log(decrementBtn);
// console.log(event);

// ===== task-1 ======
// const listOfCategories = document.querySelector('#categories');
// const catArr = [...listOfCategories.children];
// console.log("Number of categories:", catArr.length);

// catArr.forEach(function (category) {
//     const catContent = category.children;
//     console.log("Category:", catContent[0].textContent);
//     console.log("Elements:", catContent[1].children.length);
// })

// ===== task-2 ======
// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];
// const listOfIngredients = document.querySelector('#ingredients');

//  ingredients.forEach(function (ingredients) {
//   const LiElement = document.createElement('li');
//   LiElement.textContent = ingredients;
//   LiElement.classList.add('item');
//   listOfIngredients.append(LiElement);
//   console.log(LiElement);
  
// }); 

// ===== task-3 ======
// const images = [
//     {
//       url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'White and Black Long Fur Cat',
//     },
//     {
//       url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//     },
//     {
//       url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'Group of Horses Running',
//     },
//   ];
//   const list = document.querySelector(".gallery");
//   const liCont = images.map((image) => {return `<li class="gallary-item"><img class ="gallary-img" src="${image.url}" alt="${image.alt}" width ="140" height ="auto"/></li>`;}).join("");
//     list.insertAdjacentHTML("afterbegin", liCont);
//     list.style.listStyle = "none";
//   console.log(list);
//   // console.log(liCont);