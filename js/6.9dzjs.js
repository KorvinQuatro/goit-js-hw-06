const textColor = document.querySelector(".color");
const button = document.querySelector(".change-color");
const body = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

button.addEventListener("click", () => {
  body.style.background = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
});
