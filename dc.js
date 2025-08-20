let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const gencomputerchoice = () =>{
    const options = ["rock", "scissors", "paper"];
    const randIndx = Math.floor((Math.random()*3));
    return options[randIndx];
  

}
const tieGame = () =>{
    console.log("It's a tie");
    msg.innerText = "It's a tie! , Please try again";
    msg.style.backgroundColor = "blue";
    // No score change
}
const showWinner = (userWon, userChoice, compChoice) =>{
    if(userWon){
        userScore++;
        console.log("You won! " + userChoice + " beats " + compChoice);
        msg.innerText = "you won ! Congratulations";
        msg.style.backgroundColor = "green";
    }
    else {
        computerScore++;
        console.log("You lost! " + compChoice + " beats " + userChoice);
        msg.innerText = "you lost ! please try again";
        msg.style.backgroundColor = "red";
    }
    console.log("User Score: ", userScore, "Computer Score: ", computerScore);
    document.getElementById("user-score").innerText = userScore;
    document.getElementById("comp-score").innerText = computerScore;
}

const playGame = (userChoice) =>{
    console.log("userChoice", userChoice)
    // generate computer choice from the generatecomputerchoice  function
    const compChoice = gencomputerchoice();
    console.log("compChoice", compChoice);
    // compare user choice and computer choice
    if(userChoice === compChoice){
        tieGame();
    }
    else {
        let userWon = false


        
        if(userChoice === "rock"){
            userWon = compChoice === "scissors" ? true : false;
        }
        else if(userChoice === "paper"){
            userWon = compChoice === "rock" ? true : false;
        }
        else if(userChoice === "scissors"){
            userWon = compChoice === "paper" ? true : false;
        }
        showWinner(userWon, userChoice, compChoice);
    }
    
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked" , userChoice);
        playGame(userChoice);
    })
})