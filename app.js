let userScore= 0; 
let compScore= 0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
  const options = ["rock" ,"paper", "scissors"];
  const randIdx =Math.floor(Math.random() * 3);
  // console.log(randIdx);
  return options[randIdx];
};

const drawGame = (userChoice , compChoice) => {
 msg.innerText = "Game Was Draw ... Play Again";
 msg.style.backgroundColor = "black" ;
 console.log(`userchoice = ${userChoice} and comchoice = ${compChoice}`)
}

const showWinner = (userWin , userChoice , compChoice) => {
  if (userWin){
    userScore++;
    userScorePara.innerText= userScore;
    msg.innerText=`You Win! Your ${userChoice} beats ${compChoice} `;
    msg.style.backgroundColor = "green";
    console.log(`userchoice = ${userChoice} and compchoice =  ${compChoice}`);
   
    
  }
  else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText=`You Loose!  ${compChoice} beats Your ${userChoice} `;
    msg.style.backgroundColor = "red";
    console.log(`userchoice =  ${userChoice} compchoice =  ${compChoice}`);
 

  }
};



const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame(userChoice,compChoice);
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
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