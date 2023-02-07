//Create variable that selects html class where grid will be placed.
const gridContainer = document.querySelector(".gridContainer"); 

//Makes one column and NUM number of rows nested in the column
function makeColumnRows (num) {
    let divColumn = document.createElement("div");
    divColumn.textContent = " ";
    divColumn.className = "column";

    let divRow = document.createElement("div");
    divRow.textContent = " ";
    divRow.className = "row";

    gridContainer.append(divColumn);

    for (let i = 0; i < num; i++) {
        divRow = document.createElement("div");
        divRow.textContent = "";
        divRow.className = "row";
        divColumn.appendChild(divRow);
    }
}

//Makes the grid based on a certain number of columns / rows.
function makeGrid (num1, num2) {
    for (let j = 0; j < num1; j++) {
        makeColumnRows(num2 - 1);
    };
}

makeGrid(100, 100);

console.log(document.getElementsByClassName("row"));
