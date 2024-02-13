// Make the main function asynchronous
(async function main() {
    // Llamamos a la función para mostrar las categorías cuando la página se carga
    await getJSONFromAPI("https://opentdb.com/api.php?amount=6&difficulty=easy");

    fillCells();
    let player = {
        name: "Player",
        diceValue: 0,
        score: 0,
        x: 0,
        y: 0
    }

    localStorage.setItem('player', JSON.stringify(player));
})();

async function getJSONFromAPI(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(JSON.stringify(data));
    localStorage.setItem('questions', JSON.stringify(data));
}

