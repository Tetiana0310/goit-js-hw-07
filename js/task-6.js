function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesBody = document.querySelector("#boxes")
const numberInput = document.querySelector("input")
const btnToCreate = document.querySelector("button[data-create]")
const btnToDestroy = document.querySelector("button[data-destroy]")


btnToCreate.addEventListener("click", () => {
  const amount = numberInput.value;

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }

  numberInput.value = "";
})

function createBoxes(amount) {
  boxesBody.innerHTML = "";

  const boxes = [];
   for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    boxes.push(box);
  }
 boxesBody.append(...boxes)
}

function destroyBoxes() {
  boxesBody.innerHTML = "";
}

btnToDestroy.addEventListener("click", destroyBoxes);