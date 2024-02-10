let dices = ["../img/dice1.svg",
            "../img/dice2.svg", 
            "../img/dice3.svg",
            "../img/dice4.svg", 
            "../img/dice5.svg", 
            "../img/dice6.svg"];

document.getElementById("roll").addEventListener("click", () => {
	let result = rollDice();
	//document.getElementById("result").textContent = `Resultado: ${result}`;
});

async function rollDice() 
{
    let result = Math.floor(Math.random() * 6) + 1;
    let diceImage = document.getElementById("dice");
	diceImage.src = dices[result - 1];
	console.log("dice: " + result);
    let rollButton = document.getElementById("roll");
    rollButton.disabled = true;
	return result;
}
