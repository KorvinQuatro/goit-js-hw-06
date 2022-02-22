const backButton = document.createElement("a");
const body = document.querySelector("body");
backButton.href = "../6dzjs.html";
backButton.textContent = "Вернуться";
body.prepend(backButton);

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
const items = ingredients.map((ingredient) => {
  const ingredientsItemEl = document.createElement("li");
  ingredientsItemEl.classList.add("item");
  ingredientsItemEl.textContent = ingredient;
  return ingredientsItemEl;
});
ingredientsEl.append(...items);
