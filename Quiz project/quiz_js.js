var myQuestions = [{
        question: "1. Which of the following is not an operating system?",
        answers: {
            a: 'DOS',
            b: 'C',
            c: 'Linux'
        },
        correctAnswer: 'b'
    },
    {
        question: "2. Firewall in computer is used for",
        answers: {
            a: 'Monitoring',
            b: 'Data Transmission',
            c: 'Security'
        },
        correctAnswer: 'c'
    },
    {
        question: "3. What is shortcut key for Copy ",
        answers: {
            a: 'CTRL+D',
            b: 'CTRL+X',
            c: 'CTRL+C'
        },
        correctAnswer: 'c'
    },
    {
        question: "4. .png is an extension of ",
        answers: {
            a: 'Image File',
            b: 'Video File',
            c: 'Word File'
        },
        correctAnswer: 'a'
    },
    {
        question: "5. What does HTML stand for?",
        answers: {
            a: 'Hyper Text Markup Language',
            b: 'Hypertrophic Management Language',
            c: 'How to Make Lasagna'
        },
        correctAnswer: 'a'
    },


];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {

        var output = [];
        var answers;


        for (var i = 0; i < questions.length; i++) {


            answers = [];


            for (letter in questions[i].answers) {


                answers.push(
                    '<label>' +
                    '<input type="radio" name="question' + i + '" value="' + letter + '">' +
                    letter + ': ' +
                    questions[i].answers[letter] +
                    '</label>'
                );
            }


            output.push(
                '<div class="question">' + questions[i].question + '</div>' +
                '<div class="answers">' + answers.join('') + '</div>'
            );
        }


        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer) {


        var answerContainers = quizContainer.querySelectorAll('.answers');


        var userAnswer = '';
        var numCorrect = 0;


        for (var i = 0; i < questions.length; i++) {


            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;


            if (userAnswer === questions[i].correctAnswer) {

                numCorrect++;

                // color the answers black
                answerContainers[i].style.color = 'black';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);

    // on submit, show results
    submitButton.onclick = function() {
        showResults(questions, quizContainer, resultsContainer);
    }

}