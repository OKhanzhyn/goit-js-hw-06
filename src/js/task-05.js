  // ===== task-5 ======
  
const textArea = document.querySelector('#name-input');
const greetText = document.querySelector('#name-output');
textArea.addEventListener("input", event =>
    
    greetText.textContent = event.currentTarget.value || 'Anonymous');
 
console.log(textArea);
console.log(greetText);

  // ===== task-4 ======
//   const counterValue = document.querySelector("#counter");

//   const resultCount = document.querySelector('#value');
//   let currentCount = 0;
  
//   const incrementBtn = document.querySelector('button[data-action="increment"]'); 
//   incrementBtn.addEventListener("click", incrBtn);
//   function incrBtn(event) {
//       currentCount += 1;
//       resultCount.textContent = currentCount;
//       };
  
//   const decrementBtn = document.querySelector('button[data-action="decrement"]'); 
//   decrementBtn.addEventListener("click", decrBtn);
//   function decrBtn(event) {
//       currentCount -= 1;
//       resultCount.textContent = currentCount;
//   }; 
  
//   console.log(counterValue);
//   // console.log(resultCount);
//   console.log(currentCount);