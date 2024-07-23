let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreDisplay = document.querySelector("#user-score");
const compScoreDisplay = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = (userChoice, compChoice) => {
    console.log("Game was draw.");
    msg.innerText = "Draw!";
    alert(`It's a Draw!\nYour choice: ${userChoice}\nComputer's choice: ${compChoice}`);
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("You Win");
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
        userScore++;
        alert(`You Win!\nYour choice: ${userChoice}\nComputer's choice: ${compChoice}`);
    } else {
        console.log("You Lose");
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
        compScore++;
        alert(`You Lose!\nYour choice: ${userChoice}\nComputer's choice: ${compChoice}`);
    }
    userScoreDisplay.innerText = userScore;
    compScoreDisplay.innerText = compScore;
};

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame(userChoice, compChoice);
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
