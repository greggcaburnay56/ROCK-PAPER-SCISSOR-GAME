let wins = 0, draws = 0, losses = 0;

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  const playerHand = document.getElementById("playerHand");
  const computerHand = document.getElementById("computerHand");

  // Start with fists
  playerHand.textContent = "✊";
  computerHand.textContent = "✊";

  // Add shake animation
  playerHand.classList.add("shake");
  computerHand.classList.add("shake");

  setTimeout(() => {
    // Stop shaking
    playerHand.classList.remove("shake");
    computerHand.classList.remove("shake");

    // Show actual choices
    playerHand.textContent = emoji(playerChoice);
    computerHand.textContent = emoji(computerChoice);

    // Determine result
    if (playerChoice === computerChoice) {
      draws++;
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      wins++;
    } else {
      losses++;
    }

    updateScore();
  }, 1500); // Shake for 1.5 seconds
}

function emoji(choice) {
  if (choice === "rock") return "✊";
  if (choice === "paper") return "✋";
  if (choice === "scissors") return "✌️";
}

function updateScore() {
  document.getElementById("won").textContent = wins;
  document.getElementById("draw").textContent = draws;
  document.getElementById("lost").textContent = losses;
}

function restartGame() {
  wins = 0;
  draws = 0;
  losses = 0;
  updateScore();
  document.getElementById("playerHand").textContent = "✊";
  document.getElementById("computerHand").textContent = "✊";
  playerChoice = null;
}
