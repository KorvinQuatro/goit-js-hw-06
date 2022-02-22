const backButton = document.createElement("a");
const body = document.querySelector("body");
backButton.href = "../6dzjs.html";
backButton.textContent = "Вернуться";
body.prepend(backButton);

const textColor = document.querySelector(".color");
const button = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

button.addEventListener("click", () => {
  body.style.background = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
});
