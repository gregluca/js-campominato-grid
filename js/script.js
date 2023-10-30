// const gridElem = document.querySelector(".grid");


// for (let i = 1; i <=100; i++) {
//   const cell = document.createElement("div");
//   cell.classList.add("cell");
//   cell.textContent = i;
//   gridElem.appendChild(cell).addEventListener("click",change);
//   cell.addEventListener("click", function() {
//     console.log(i);
//   })
// }
// console.log(gridElem);

// function change (color) {
//   this.classList.toggle("orange");
// }
document.getElementById("btn").addEventListener("click", start);
const gridElem = document.querySelector(".grid");

function start () {
  for (let i = 1; i <= 100; i++){
    const newCell = document.createElement("div");
    newCell.addEventListener("click", changecolor);
    newCell.classList.add("cell");
    newCell.innerHTML = i;
    console.log(newCell);
    gridElem.append(newCell);
  }
}

function changecolor () {
  this.classList.add("orange");
  console.log(this.textContent);
}