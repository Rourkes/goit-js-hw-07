function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const getColor = document.querySelector(".change-color");
const color = document.querySelector(".color");
getColor.addEventListener("click", () => {
  const newCol = getRandomHexColor();
  document.body.style.backgroundColor = newCol;
  color.textContent = newCol;
});