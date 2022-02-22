const counterValue = document.querySelector("#value");
const buttonEl = document.querySelectorAll("#counter button");
let result = Number(counterValue.textContent);

buttonEl[0].addEventListener("click", () => {
  result -= 1;
  counterValue.textContent = result;
});
buttonEl[1].addEventListener("click", () => {
  result += 1;
  counterValue.textContent = result;
});
