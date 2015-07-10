var allQuestions = [{
    question: "Who is Prime Minister of the United Kingdom?",
    choices: ["Gordon Brown", "David Cameron", "Winston Churchill", "Tony Blair"],
    correctAnswer: "David Cameron"
}, {
    question: "What color is the sky?",
    choices: ["Green", "Red", "Blue", "Yellow"],
    correctAnswer: "Blue"
}, {
    question: "In what year was Jurassic Park released?",
    choices: ["1990", "1991", "1992", "1993"],
    correctAnswer: "1993"
}];


var quiz = document.getElementById("quiz");

// Start section
(function() {
    var startButton = document.getElementById("start");

    startButton.onclick = function() {
        startButton.style.display = "none";
        quiz.style.display = "inherit";
    };
}());

// Counters
var questionNumber = 1;
var correctAnswerCount = 0;


// The next button
var nextButton = document.getElementById("next");
nextButton.onclick = function() {

    //Get correct answer for current question
    var rightAnswer = allQuestions[questionNumber - 1].correctAnswer;
    console.log(rightAnswer);

    //Get checked value and iterate correct answer count if correct
    var answers = document.getElementsByTagName("input");
    console.log(answers);

    for (var i = 0; i < 4; i++) {
        if ((answers[i].checked) && (answers[i].value === rightAnswer)) {
            console.log("Eureka");
            correctAnswerCount++;
        };
    }

    questionNumber++;


    // Update questions and answers
    if (questionNumber < 4) {

        //Update questions
        var question = document.getElementById("question");
        question.innerHTML = allQuestions[questionNumber - 1].question;

        //Update multiple choice answers
        for (var i = 0; i < 4; i++) {
            answers[i].value = allQuestions[questionNumber - 1].choices[i];

        }

        var MCanswers = document.getElementsByTagName("span");

        for (var i = 0; i < 4; i++) {
            MCanswers[i].innerHTML = allQuestions[questionNumber - 1].choices[i];
        }

    } else { // if end of quiz, show score
        quiz.style.display = "none";
        document.write("<p>You answered " + correctAnswerCount + " questions correct out of 3. </p>");
    }
}