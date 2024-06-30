const input = document.querySelector("#name-input");
const name = document.querySelector("#name-output");

function onInputChange(event) {
    if (event.currentTarget.value === "" || event.currentTarget.value.trim().length === 0) {
        name.textContent = "Anonymous";
    } else {
        name.textContent = event.currentTarget.value.trim();
    }
}

input.addEventListener('input', onInputChange)