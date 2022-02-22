const itemsEl = document.querySelectorAll(".item");
const categoriesTitle = document.querySelectorAll("h2");
console.log("Number of categories:", categoriesTitle.length);
itemsEl.forEach((number) => {
  const name = number.querySelector("h2").innerHTML;
  console.log("Category:", name);
  const itemLength = number.querySelectorAll("li").length;
  console.log("Elements:", itemLength);
});
