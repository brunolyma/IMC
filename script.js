const weight = document.querySelector("input#weight");
const height = document.querySelector("input#height");
const modal = document.querySelector("#result");
const message = document.querySelector("#result span.message");
const errorMessage = document.querySelector("section#error-form");

function handleSubmit(event) {
  event.preventDefault();
  const result = IMC(weight.value, height.value);
  message.innerText = `${result}`;

  console.log(notANumber(weight.value));
  console.log(notANumber(height.value));
  // return;
  if (notANumber(height.value) || notANumber(weight.value)) {
    showErrorPopUp();
  } else {
    handleModal();
  }
}

window.addEventListener("focusin", handleInputfocus);
function handleInputfocus(event) {
  hideErrorPopUp();
}

function showErrorPopUp() {
  errorMessage.classList.remove("hide");
}
function hideErrorPopUp() {
  errorMessage.classList.add("hide");
}

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

function notANumber(value) {
  return isNaN(value) || value == "";
}

function handleModal() {
  modal.classList.toggle("close");
}

window.addEventListener("keydown", handleKeyDown);
function handleKeyDown(event) {
  if (event.key == "Escape") {
    handleModal();
  }
}
