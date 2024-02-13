 const questions = [
    {
        question : "What is the synonynm of the word sketchy?",
        answers : [
            {text: "Obvious", correct: false},
            {text: "Suspicious", correct: true},
            {text: "Confused", correct: false},
            {text: "Confident", correct: false},
        ]
    },

    {
        question : "Which is the smallest country in the World?",
        answers : [
            {text: "Vetican City", correct: true},
            {text: "Bhutan", correct: false},
            {text: "Nepal", correct: false},
            {text: "Srilanka", correct: false},
        ]
    },

    {
        question : "Which is the largest desert in the World?",
        answers : [
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antarctica", correct: true},
        ]
    },

    {
        question : "Which is the smallest continent in the World?",
        answers : [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},
        ]
    }
 ];

 const question = document.querySelector("#question");
 const answerButtons = document.querySelector("#answer-buttons");
 const nextButton = document.querySelector("#next-btn");

 let currenQuestionIndex = 0;
 let score = 0;

 function startQuiz(){
    currenQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
 }

 function showQuestion(){
    resetState();
  let currentQuestion = questions[currenQuestionIndex];
  let questionNo = currenQuestionIndex + 1;
  question.innerHTML = questionNo + ". " + currentQuestion.question; 

  currentQuestion.answers.forEach(answer => {
       const button = document.createElement("button");
       button.innerHTML = answer.text;
       button.classList.add("btn");
       answerButtons.appendChild(button);
       if(answer.correct){
        button.dataset.correct = answer.correct;
       }
       button.addEventListener("click", selectAnswer);
  });
 }

function resetState(){
nextButton.style.display = "none";
while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);
}
}

function selectAnswer(e){
const selectedBtn = e.target;
const isCorrect = selectedBtn.dataset.correct == "true";
if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
}
else{
 selectedBtn.classList.add("incorrect");
}

Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct == "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
});
nextButton.style.display ="block";
}


nextButton.addEventListener("click", () => {
    if(currenQuestionIndex < questions.length){
        handleNextQuestion();
    }
    else{
      startQuiz()
    }
});


function handleNextQuestion(){
currenQuestionIndex++;
if(currenQuestionIndex < questions.length){
    showQuestion();
}
else{
    showScore();
}
}

 function showScore(){
    resetState();
    question.innerHTML = `You scored ${score} out of ${questions.length}!!`;
    nextButton.innerHTML = "PLAY AGAIN";
    nextButton.style.display = "block";
 }

 startQuiz();