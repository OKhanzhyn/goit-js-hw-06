// ===== task-8 ======
const userForm = document.querySelector(".login-form");
userForm.addEventListener("submit", userSubmit);

function userSubmit(evt) {
evt.preventDefault();

const {email, password} = evt.currentTarget.elements;
const data = {
    email: email.value,
    password: password.value,
}
if(email.value.length  === 0 ||password.value.length === 0) {
    alert('all fields have to be filled')
}
console.log(userForm);
console.log(data);
event.currentTarget.reset() }

