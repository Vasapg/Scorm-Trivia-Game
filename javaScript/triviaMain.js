function getJSONFromAPI(URL)
{
    fetch(URL)
    .then(response => response.json()
    .then(data =>
    {
        console.log(JSON.stringify(data));
        localStorage.setItem('questions', JSON.stringify(data));
    }))

}

function fillCells()
{
    let board = document.getElementById("board");
    let cells = board.getElementsByTagName("td");
    cells = [].slice.call(cells);
    cells.forEach(cell => {
        if (cell.textContent == "Blank")
        {
            cell.classList.add("white_cell");
            cell.textContent = "";
        }
        else
        {
            cell.classList.add("black_cell");
            cell.textContent = "";
        }
        cell.addEventListener("click", () => 
        {
            console.log("Me clicaste: " + cell.cellIndex + ", " + cell.parentNode.rowIndex);
            let rollButton = document.getElementById("roll");
            rollButton.disabled = false;
            movePlayer(cell.cellIndex, cell.parentNode.rowIndex);
        });
        if (cell.cellIndex == 0 && cell.parentNode.rowIndex == 0)
        {
            cell.appendChild(document.createElement("img"));
            cell.firstChild.src = "../img/Player.svg";
        }
    });
}

movePlayer = (x, y) =>
{
    let player = JSON.parse(localStorage.getItem('player'));
    let board = document.getElementById("board");
    let cells = board.getElementsByTagName("td");
    console.log(cells)
    cells = [].slice.call(cells);
    cells.forEach(cell => {
        if (cell.firstChild != null)
        {
            cell.removeChild(cell.firstChild);
        }
    });
    player.x += x;
    player.y += y;
    let cell = board.rows[player.y].cells[player.x];
    cell.appendChild(document.createElement("img"));
    cell.firstChild.src = "../img/Player.svg";
    localStorage.setItem('player', JSON.stringify(player));
}

function retrieveCategories()
{
    let categories = JSON.parse(localStorage.getItem('questions')).results;
    let categoryList = document.getElementById("categoryList");
    for (let i = 0; i < categories.length; i++)
    {
        let category = document.createElement("li");
        category.textContent = categories[i].category;
        categoryList.appendChild(category);
    }
}

// Llamamos a la función para mostrar las categorías cuando la página se carga
getJSONFromAPI("https://opentdb.com/api.php?amount=5&difficulty=easy")
fillCells();
let player = {
    name: "Player",
    score: 0,
    x: 0,
    y: 0
}
localStorage.setItem('player', JSON.stringify(player));
movePlayer(6,6);