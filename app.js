const diceInput = document.getElementById("dice-input");
const rollButton = document.getElementById("roll-button");
const clearButton = document.getElementById("clear-button");
const resultsDiv = document.getElementById("results");


function rollDice() {
  let diceString = diceInput.value.trim().toLowerCase();
  let diceArray = diceString.split(/[ ,]+/);

  let total = 0;
  let rolls = [];

  for (let i = 0; i < diceArray.length; i++) {
    let dice = diceArray[i];
    let numDice = 1;
    let numSides = parseInt(dice);

    if (dice.includes("d")) {
      const diceSplit = dice.split("d");
      numDice = diceSplit[0] ? parseInt(diceSplit[0]) : 1;
      numSides = parseInt(diceSplit[1]);
    }

    for (let j = 0; j < numDice; j++) {
      const roll = Math.floor(Math.random() * numSides) + 1;
      rolls.push(roll);
      total += roll;
    }
  }

  const rollsString = rolls.join(", ");
  const resultString = `Rolls: ${rollsString}<br/>Total: ${total}`;

  resultsDiv.innerHTML = resultString;
}

function clearResults() {
  resultsDiv.innerHTML = "";
}

rollButton.addEventListener("click", rollDice);
clearButton.addEventListener("click", clearResults);