const backButton = document.createElement("a");
const body = document.querySelector("body");
backButton.href = "../6dzjs.html";
backButton.textContent = "Вернуться";
body.prepend(backButton);

const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
  if (inputEl.value === "") {
    nameEl.textContent = "Anonymous";
  } else {
    nameEl.textContent = inputEl.value;
  }
});
