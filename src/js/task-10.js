// // ===== task-10 ======
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// // ===== task-9 ======

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const bodyBackground = document.querySelector('body');
// const btnChangeColor = document.querySelector(".change-color");
// const colorReflect = document.querySelector('.color');

// btnChangeColor.addEventListener('click', newColor)
// function newColor(evt) {
//   const color = getRandomHexColor();
//   bodyBackground.style.backgroundColor = color;
//   colorReflect.textContent = `${color}`;
// }


// console.log(bodyBackground);
// console.log(btnChangeColor);
// console.log(getRandomHexColor);
// // ===== task-8 ======
// // const userForm = document.querySelector(".login-form");
// // userForm.addEventListener("submit", userSubmit);

// // function userSubmit(evt) {
// // evt.preventDefault();

// // const {email, password} = evt.currentTarget.elements;
// // const data = {
// //     email: email.value,
// //     password: password.value,
// // }
// // if(email.value.length  === 0 ||password.value.length === 0) {
// //     alert('all fields have to be filled')
// // }
// // console.log(userForm);
// // console.log(data);
// // event.currentTarget.reset() }

// // ===== task-7 ======

// // const inputArea = document.querySelector('#font-size-control');
// // const textFitchers = document.querySelector('#text');

// // inputArea.addEventListener("input", () => {
// //     const textSize = inputArea.value;
// //     textFitchers.style.fontSize = `${textSize}px`;
// // });

// // ===== task-6 ======

// // const textArea = document.querySelector('#validation-input');
 
// // const correctLength = Number(textArea.dataset.length);
// // textArea.addEventListener("blur", compareLength);

// // function compareLength(event) {
// //    const actualLength = event.currentTarget.value.length;
// //    console.log(actualLength);

// //   if (actualLength === correctLength) {
// //    textArea.classList.add('valid')
// //    textArea.classList.remove('invalid')
// //   } 
// //   else {
// //    textArea.classList.add('invalid')
// //    textArea.classList.remove('valid')
// //   }
// // }
// // console.log(textArea);

//   // ===== task-5 ======
  
// //   const textArea = document.querySelector('#name-input');
// //   const greetText = document.querySelector('#name-output');
// //   textArea.addEventListener("input", event =>
      
// //       greetText.textContent = event.currentTarget.value || 'Anonymous');
   
// //   console.log(textArea);
// //   console.log(greetText);