
         var inputQuizName =document.getElementById('quizname');
         var inputMarks =document.getElementById('marks');
         var inputTime =document.getElementById('time');
         var inputSyllabuss =document.getElementById('syllabus');
        var inputInstruction =document.getElementById('instruction');

function getData() {

    var quiz ={
        quizName : inputQuizName.value,
        marks : inputMarks.value,
        time : inputQuizName.value,
        syllabus : inputSyllabuss.value,
        instruction : inputInstruction.value 

    }
    localStorage.setItem("quiztempdata",JSON.stringify(quiz));
    window.location='addQuestion.html';
    console.log(quiz);
}


