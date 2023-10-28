const gridElem = document.querySelector(".grid");

for (let i = 1; i <=100; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.textContent = i;
  gridElem.appendChild(cell).addEventListener("click",change);
}
console.log(gridElem);

function change (color) {
  this.classList.toggle("orange");
}