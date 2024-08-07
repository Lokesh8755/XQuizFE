// Sample data
const questions = [
    {
    text: "Which language is primarily used for web app development?",
    options: ["C#", "Python", "JavaScript", "Swift"],
    correct: 2
},
{
    text: "Which of the following is a relational database management system?",
    options: ["Oracle", "Scala", "Perl", "Java"],
    correct: 0
},
{
    text: "In which language is memory management provided by JVM?",
    options: ["Java", "C", "C++", "Python"],
    correct: 0
},
{
    text: "What does HTML stand for?",
    options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
    correct: 2
},
{
    text: "Which of the following is not a valid variable name in Python?",
    options: ["_myVar", "myVar2", "2myVar", "my_var"],
    correct: 2
},
{
    text: "Which of the following is not an object-oriented programming language?",
    options: ["Java", "C#", "Scala", "C"],
    correct: 3
},
{
    text: "Which tool is used to ensure code quality in JavaScript?",
    options: ["JSLint", "TypeScript", "Babel", "Webpack"],
    correct: 0
},
{
    text: "In which data structure, elements are added at one end and removed from the other?",
    options: ["Array", "Stack", "Queue", "LinkedList"],
    correct: 2
},
{
    text: "What is the primary use of the Git command 'clone'?",
    options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
    correct: 1
},
{
    text: "What does API stand for in the context of programming?",
    options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
    correct: 1
}
];

// Crio solutions start module one
// Global varables -> variables that are accessible from anywhere in the code and can also be modified from anywhere in the code
let currentQuestionIndex = 0; // intial question's index would start from 0 index
let score = 0; // total score of the user

const questionElement = document.getElementById("question");
const answerListElement = document.getElementById("answer-list");
const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("next");

//Load the current question
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.text; // add the question to the p tag
    answerListElement.innerHTML = '';

    question.options.forEach((option, index)=>{
        const listItem = document.createElement("li");
        listItem.innerHTML = `<input type="radio" name="answer" value = "${index}"> ${option}`;
        answerListElement.appendChild(listItem);
    });

    // hide next and show submit
    nextButton.hidden = true; // hides the next button
    submitButton.hidden = false; // shows the submit button
}


submitButton.addEventListener("click", () => {
    // Write the JS code that you want to be executed each time the Submit button is clicked.
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if(!selectedAnswer) {
        alert("Please select an Answer!");
        return;
    }

    // comparing the selected answer to the correct answer
    if(parseInt(selectedAnswer.value) === questions[currentQuestionIndex].correct){
        score++;
    }

    // Highlight the correct answer
    const correctAnswerIndex = questions[currentQuestionIndex].correct;
    // const userAnswerIndex = parseInt(selectedAnswer.value);
    // if(correctAnswerIndex !== userAnswerIndex){
    //     answerListElement.children[userAnswerIndex].style.backgroundColor = "red";
    // }
    answerListElement.children[correctAnswerIndex].style.backgroundColor = "lightgreen";


    // show next and hide submit
    nextButton.hidden = false;
    submitButton.hidden = true;
});

nextButton.addEventListener("click", () => {
    // Write the JS code that you want to be executed each time the Next button is clicked.
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        loadQuestion();
    }else{
        alert(`Quiz finished! Your score is: ${score}/${questions.length}`);
        // Optionally, reset for a new game
        score = 0;
        currentQuestionIndex = 0;
        loadQuestion();
    }
});

// Load the first question on startup
loadQuestion();
// Crio solutions start module one
