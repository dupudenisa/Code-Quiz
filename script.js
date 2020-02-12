//Defining my variables used in the function//
var counter = 60;
var currentQuestionIndex = 0
var questionLength = 0;
var timer = document.getElementById("timertime");
var QuestionContainer = document.getElementById('question-container');
var startButton = document.getElementById('start-btn');
var questionElement = document.getElementById("question");
var doneContainer = document.getElementById('done-container');
var highscoreContainer = document.getElementById('highscore-container');
var finalScore = document.getElementById('final-score');

var correctIncorrect = document.getElementById("correctIncorrect");



var answerButtonsElement = document.getElementById("answer-btn");

startButton.addEventListener('click', startGame)

//Function that allows the start button to work, as well as my timer//
function startGame() {
    
    timer.textContent = counter;
    function timeIt(){
        counter --;
        timer.textContent = counter;
        if (counter === 0 || counter < 0){
            clearInterval(myTime);
            endQuiz();
        }
    }
    var myTime = setInterval(timeIt, 1000);
   // adds a start button to the page & then removes it 
    startButton.classList.add('hide');
    QuestionContainer.classList.remove('hide');
    setNextQuestion();
}

//My function for starting the next question//
function setNextQuestion() {

    questionLength = questions.length;
    
    if(currentQuestionIndex == questionLength)
    {
        finishedQuiz();
    }

    answerButtonsElement.innerHTML = "";
    // saves current question from the array based on the index//
    var currentQuestions = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestions.title;
    
    // an object within the array that define how many options there are inside the buttons by providing an index //

    currentQuestions.choices.forEach(function (choice, i)
    {
        var choiceBtn = document.createElement("button");      
        choiceBtn.classList.add("btn");
        choiceBtn.classList.add("btn-dark");
        choiceBtn.setAttribute("value", choice)
        choiceBtn.textContent = choice;
        answerButtonsElement.appendChild(choiceBtn);  
        choiceBtn.onclick = clickAnswer
    })
    
function clickAnswer() {
    // increasing the index. 
    var someAnswer = questions[currentQuestionIndex].answer
    if (this.textContent === someAnswer){

        correctIncorrect.innerHTML = "Correct!";

        currentQuestionIndex++;

        setNextQuestion();
    }
    // if the answer is incorrect, the counter subtracts itself by 10.//
    else {

        correctIncorrect.innerHTML = "Incorrect!";

        currentQuestionIndex++;
        counter = counter - 10;
        setNextQuestion();
    }

}

}

function endQuiz() {
    QuestionContainer.classList.add('hide')
    alert("You did not complete the Quiz in time. Please try again!")
    location.reload();
}

function finishedQuiz(){
    alert("Congradulations!! You reached the end!")
    QuestionContainer.classList.add('hide');
    doneContainer.classList.remove('hide');
    showFinalScore();
    
}

function showFinalScore(){

    finalScore.innerHTML = "Your final score is:" + counter;


}


//array of question objects
var questions = [
    {
        title: "What is meant by console.log?",
        choices: ["displays discreetly to the debugger", "displays a pop-up message to the user", "creates a new variable","a type of variables that are collections"],
        answer: "displays discreetly to the debugger" 
        
        //A//
    },
    {
        title: "What is an element in an Array marked by?",
        choices: ["length ", "Index", "jQuery","console.log"],
        answer: "Index" 
        
        //B//
    },
    {
        title: "What are the three building blocks of the web?",
        choices: ["JQuery, HTML, chrome", "HTML,Javascript,windows", "HTML, CSS, Javascript","Javascript,CSS,LMM"],
        answer: "HTML, CSS, Javascript" 
        
        //C//
    },
    {
        title: "What does Math.random do?",
        choices: ["deletes all of the math on the page", "Returns a random number between 0 & 1", "returns the last index of an array","returns a random number between 0 & 10"],
        answer: "Returns a random number between 0 & 1" 
        
        //B//
    },
    {
        title: "How do you make a new directory through your terminal?",
        choices: ["console.log", "rm", "git clone","mkdir"],
        answer: "mkdir" 
        
        //D//
    },
]