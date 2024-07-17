const inputName = document.querySelector("#name-input");
// console.log(inputName);
const outputName = document.querySelector("#name-output");
// console.log(outputName);

function massage() {
  const cleanName = inputName.value.trim();
  if (cleanName === "") {
    outputName.textContent = "Anonymous";
  } else {
    outputName.textContent = cleanName;
  }
}

inputName.addEventListener("input", massage);
