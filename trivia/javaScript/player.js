movePlayer = (x, y) =>
{
    if (!checkIfPlayerCanMove(x, y))
            return;
    let player = JSON.parse(localStorage.getItem('player'));
    let board = document.getElementById("board");
    let cells = board.getElementsByTagName("td");
    console.log(cells)
    cells = [].slice.call(cells);
    cells.forEach(cell => {
        if (cell.firstChild != null)
        {
            console.log("Eliminando hijo");
            cell.removeChild(cell.firstChild);
        }
    });
    player.x = x;
    player.y = y;
    let cell = board.rows[player.y].cells[player.x];
    cell.appendChild(document.createElement("img"));
    cell.firstChild.src = "../img/Player.svg";
    player.diceValue = 0;
    localStorage.setItem('player', JSON.stringify(player));
    let rollButton = document.getElementById("roll");
    rollButton.disabled = false;
}

checkIfPlayerCanMove = (x, y) =>
{
    let player = JSON.parse(localStorage.getItem('player'));
    let board = document.getElementById("board");
    let cells = board.getElementsByTagName("td");
    cells = [].slice.call(cells);
    let cell = board.rows[y].cells[x];
    if (cell.classList.contains("white_cell"))
    {
        return false;
    }
    return checkDistance(player.x, player.y, x, y, player.diceValue);
}

checkDistance = (x1, y1, x2, y2, diceValue) =>
{
    let distance = Math.abs(x1 - x2) + Math.abs(y1 - y2);
    console.log("Distancia: " + distance);
    console.log("Dado: " + diceValue);
    if (distance > diceValue || distance < diceValue)
    {
        return false;
    }
    return true;
}