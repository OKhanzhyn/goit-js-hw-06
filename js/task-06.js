 // ===== task-6 ======
 const textArea = document.querySelector('#validation-input');
 
 const correctLength = Number(textArea.dataset.length);
 textArea.addEventListener("blur", compareLength);

 function compareLength(event) {
    const actualLength = event.currentTarget.value.length;
    console.log(actualLength);

   if (actualLength === correctLength) {
    textArea.classList.add('valid')
    textArea.classList.remove('invalid')
   } 
   else {
    textArea.classList.add('invalid')
    textArea.classList.remove('valid')
   }
 }
 console.log(textArea);
  