const quizSelector= document.getElementById("quiz-selector");
const quizContainer= document.getElementById("quiz-container");
const resultContainer= document.getElementById("result-container")
const questionContainer= document.getElementById("question-container");
const answerButtonContainer= document.getElementById("answer-button-container");
 
//fetch data from json file. 
const loadAllQuiz= async () =>
{
    const response= await fetch("./quizes.json");
    const quizzes= await response.json(); //json method ya kam krta hai ki jab json file mai se data fatch hokr ayega tou ya method us data ko object mai rakhta hai

    quizzes.forEach ( (quiz, index) => 
    {
        const quizCard= document.createElement("div");
        quizCard.classList= ["quiz-card"];
        quizCard.innerText= "MQ"+ (index + 1);
        quizCard.addEventListener("click", () =>LoadQuiz (quiz));
        quizSelector.appendChild(quizCard);
    });
};
loadAllQuiz();