/*Permainan gunting-batu-kertas*/
const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
function randomChoice() {
  const choices = ["Gunting", "Batu", "Kertas"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}
readLine.question("Pilihan Player : ", (result) => {
  const playerChoice = result;
  const computerChoice = randomChoice();

  console.log("Pilihan Komputer : " + computerChoice);

  if (playerChoice == "Kertas" && computerChoice == "Batu") {
    console.log("Player Menang");
  } else if (playerChoice == "Gunting" && computerChoice == "Kertas") {
    console.log("Player Menang");
  } else if (playerChoice == "Batu" && computerChoice == "Gunting") {
    console.log("Player Menang");
  } else if (playerChoice == computerChoice) {
    console.log("Seri");
  } else {
    console.log("Komputer Menang");
  }
  readLine.close();
});
