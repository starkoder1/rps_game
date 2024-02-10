let userChoice;
let compChoice;
let rounds;
let userScore = 0;
let compScore = 0;
let options = ["rock", "paper", "scissors"];
let result = document.querySelector(".result");
let resultText = document.querySelector("#result-text");
resultText.innerText = "Click here to start";
result.classList.add("pointer");
result.addEventListener("click", () => {
    result.classList.remove("pointer")
  resultText.innerText = "Start by selecting your move.";
  startGame();
});

function startGame() {
  const choices = document.querySelectorAll(".choice");
  choices.forEach((choice) => {
    //   console.log(choice);
    choice.classList.add("pointer")
    choice.addEventListener("click", () => {
      userChoice = choice.getAttribute("id");
      compChoice = compPlay();
      winner(userChoice, compChoice);
      updateScore();
      console.log(userChoice);
      console.log(compChoice);
    });
  });
  
}

function compPlay() {
  let randChoice = Math.floor(Math.random() * 3);
  return options[randChoice];
}

function winner(userChoice, compChoice) {
  if (userChoice === compChoice) {
    userScore++;
    compScore++;
    console.log("Both tied!");
    resultText.textContent = "It's a tie!";
    result.style.backgroundColor = "yellow";
  } else {
    let message = `You won! The computer chose ${
      compChoice.charAt(0).toUpperCase() + compChoice.slice(1)
    }.`;
    if (
      (userChoice === "rock" && compChoice === "scissors") ||
      (userChoice === "paper" && compChoice === "rock") ||
      (userChoice === "scissors" && compChoice === "paper")
    ) {
      userScore++;
      console.log("User won!");
      resultText.textContent = message;
      result.style.backgroundColor = "green";
    } else {
      let loseMessage =
        "You lost! Computer chose " +
        compChoice.charAt(0).toUpperCase() +
        compChoice.slice(1) +
        ".";
      compScore++;
      console.log("Computer won!");
      resultText.textContent = loseMessage;
      result.style.backgroundColor = "red";
    }
  }
}

function updateScore() {
  document.querySelector(".score1").innerText = `${userScore}`;
  document.querySelector(".score2").innerText = `${compScore}`;
}
