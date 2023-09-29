// ===== task-1 ======
const listOfCategories = document.querySelector('#categories');
const catArr = [...listOfCategories.children];
console.log("Number of categories:", catArr.length);

catArr.forEach(function (category) {
    const catContent = category.children;
    console.log("Category:", catContent[0].textContent);
    console.log("Elements:", catContent[1].children.length);
})
