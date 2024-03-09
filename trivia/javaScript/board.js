function fillCells()
{
    let board = document.getElementById("board");
    let cells = board.getElementsByTagName("td");
    let colors = ["category_1", "category_2", "category_3", "category_4", "category_5", "category_6"];
    cells = [].slice.call(cells);
    cells.forEach(cell => {
        if (cell.textContent == "Blank")
        {
            cell.classList.add("white_cell");
            cell.textContent = "";
        }
        else
        {
            cell.classList.add(colors[Math.floor(Math.random() * colors.length)]);
            cell.textContent = "";
            console.log(cell.classList);
        }
        cell.addEventListener("click", () => 
        {
            console.log("Me clicaste: " + cell.cellIndex + ", " + cell.parentNode.rowIndex);
            movePlayer(cell.cellIndex, cell.parentNode.rowIndex);
        });
        if (cell.cellIndex == 0 && cell.parentNode.rowIndex == 0)
        {
            cell.appendChild(document.createElement("img"));
            cell.firstChild.src = "../img/Player.svg";
        }
    });
}

mapCategoriesToColors = (categories) =>
{
    let colors = ["category_1", "category_2", "category_3", "category_4", "category_5", "category_6"];
    let colorMap = {};
    categories.forEach((category, index) => 
    {
        colorMap[category] = colors[index];
    });
    return colorMap;
}