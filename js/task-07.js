// ===== task-7 ======

const inputArea = document.querySelector('#font-size-control');
const textFitchers = document.querySelector('#text');

inputArea.addEventListener("input", () => {
    const textSize = inputArea.value;
    textFitchers.style.fontSize = `${textSize}px`;
});
