//Create variable that selects html class where grid will be placed.
const gridContainer = document.querySelector(".gridContainer"); 

//Makes one column and NUM number of rows nested in the column
function makeColumnRows (num) {
    let divColumn = document.createElement("div");
    divColumn.textContent = "I'm a Column";
    divColumn.className = "column";

    let divRow = document.createElement("div");
    divRow.textContent = "I'm a row";
    divRow.className = "row";

    gridContainer.append(divColumn);

    for (let i = 0; i < num; i++) {
        divRow = document.createElement("div");
        divRow.textContent = "I'm a row";
        divRow.className = "row";
        divColumn.appendChild(divRow);
    }

}

//Makes the grid based on a certain number of columns / rows.
function makeGrid (num1, num2) {
    for (let j = 0; j < num1; j++) {
        makeColumnRows(num2);
    };
}

makeGrid(16, 16);
