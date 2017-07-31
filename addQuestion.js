var questionInput = document.getElementById("questions");
var option1 = document.getElementById("option1");
var option1correct = document.getElementById("option1Correct");
var option2 = document.getElementById("option2");
var option2correct = document.getElementById("option2Correct");
var marks = document.getElementById("marks");

function questionData(param) {
    var question = {
        question: questionInput.value,
        options: [
            {
                option1: option1.value,
                correct: option1correct.value
            },
            {
                option2: option2.value,
                correct: option2correct.value
            }
        ],
        marks: marks.value
    }



    var quizesData = localStorage.getItem("quiztempdata");

    if (quizesData === null) {
        location = "createquiz.html";
    } else {
        quizesData = JSON.parse(quizesData);
    }

    if (!quizesData.questions) {
        quizesData.questions = [];
    }
    quizesData.questions.push(question);
    questionInput.value = "";
    option1.value = "";
    option1correct.value = "";
    option2.value = "";
    option2correct.value = "";
    marks.value = "";

    localStorage.setItem("quiztempdata", JSON.stringify(quizesData));


    if (param === 'save') {
        // quizesData.questions.push(question);

        var quizes = localStorage.getItem("quizes");
        if (quizes === null) {
            quizes = [];
        } else {
            quizes = JSON.parse(quizes);
        }
        quizes.push(quizesData)

        localStorage.setItem("quizes", JSON.stringify(quizes));
        localStorage.removeItem("quiztempdata");
        location = "index.html";
    }
}