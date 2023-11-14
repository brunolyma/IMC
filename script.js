const inputWeight = document.querySelector("input#weight");
const inputHeight = document.querySelector("input#height");
const modal = document.querySelector("#result");
const errorMessage = document.querySelector("section#error-form");

function handleSubmit(event) {
  event.preventDefault();
  console.log(typeof inputWeight.value);
  if (isNaN(+inputWeight)) {
    // errorMessage.classList.remove("hide");
    console.log("SIm");
  }
}

function handleModal() {
  modal.classList.toggle("show");
}
