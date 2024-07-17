const categories = document.querySelector("#categories");

const itemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach((itemEl) => {
  const subtitle = itemEl.querySelector("h2").textContent;
  console.log(`Categoty: ${subtitle}`);
  const list = itemEl.querySelectorAll("ul li").length;
  console.log(`Elements: ${list}`);
});
