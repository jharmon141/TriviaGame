$(document).ready(function() {

    //questions object
    var questions = {
        question1: {
            question: "The film 'Bladerunner' was based on which book by Phillip K. Dick?",
            answers: {
                answer1: "Do Androids Dream of Electric Sheep?",
                answer2: "V.A.L.I.S.",
                answer3: "answer3",
                answer4: "answer4",
            },
            correctanswer: "Do Androids Dream of Electric Sheep?",
            imageURL: "assets/images/example.jpg",
        },
        question2: {
            question: "question2 filler",
            answers: {
                answer1: "answer1",
                answer2: "answer2",
                answer3: "answer3",
                answer4: "answer4blah",
            },
            correctanswer: "answer4blah",
            imageURL: "assets/images/example.jpg",
        },
        question3: {
            question: "question3 filler",
            answers: {
                answer1: "answer1",
                answer2: "answer2",
                answer3: "answer3",
                answer4: "answer4",
            },
              correctanswer: "answer3",
            imageURL: "assets/images/example.jpg",
        },
        question4: {
            question: "question4 filler",
            answers: {
                answer1: "answer1",
                answer2: "answer",
                answer3: "answer",
                answer4: "answer",
            },
            correctanswer: "answer1",
            imageURL: "assets/images/example.jpg",
        },
        question5: {
            question: "question5 filler",
            answers: {
                answer1: "answer",
                answer2: "answer2",
                answer3: "answer",
                answer4: "answer",
            },
            correctanswer: "answer2",
            imageURL: "assets/images/example.jpg",
        },
        question6: {
            question: "question6 filler",
            answers: {
                answer1: "answer",
                answer2: "answer",
                answer3: "answer",
                answer4: "answer4",
            },
            correctanswer: "answer4",
            imageURL: "assets/images/example.jpg",
        },
        question7: {
            question: "question7 filler",
            answers: {
                answer1: "answer1",
                answer2: "answer",
                answer3: "answer",
                answer4: "answer",
            },
            correctanswer: "answer1",
            imageURL: "assets/images/example.jpg",
        },
        question8: {
            question: "question8 filler",
            answers: {
                answer1: "answer",
                answer2: "answer2",
                answer3: "answer",
                answer4: "answer",
            },
            correctanswer: "answer2",
            imageURL: "assets/images/example.jpg",
        },
        question9: {
            question: "question9 filler",
            answers: {
                answer1: "answer",
                answer2: "answer",
                answer3: "answer",
                answer4: "answer4",
            },
            correctanswer: "answer4",
            imageURL: "assets/images/example.jpg",
        },
        question10: {
            question: "question10 filler",
            answers: {
                answer1: "answer",
                answer2: "answer",
                answer3: "answer3",
                answer4: "answer",
            },
            correctanswer: "answer3",
            imageURL: "assets/images/example.jpg",
        },
    };

    var answerCorrect = "none";
    var text = "";

    var questionsArr = [questions.question1, questions.question2, questions.question3, questions.question4, questions.question5, questions.question6, questions.question7, questions.question8, questions.question9, questions.questions10];

    //timer function
    var seconds;


    var timer = function() {
        //reset timer
        seconds = 30;
        //diplay timer
        $("#counter").html("<p>" + "Time Remaing: "+ seconds + "</p>");
        //run timer
        var runTimer = setInterval(function() {
            seconds--;
            if (seconds === 0) {
                clearInterval(runTimer);
                displayAnswer();
            }
            $("#counter").html("<p>" + "Time Remaing: "+ seconds + "</p>");

            if (answerCorrect === "true" || answerCorrect === "false"){
                clearInterval(runTimer);
            }

        }, 1000);


    };

    //keeps track of current question set
    var questionCount = 0;

    //displays the questions and answers
    function displayQuestion(){

      $("#answerArea").hide();
      //start timer
      timer();

      //clear correctanswer
      answerCorrect = "none";
      console.log(answerCorrect);

      //display question
      $("#questionArea").show();
      $("#question").html(questionsArr[questionCount].question);

      //display answers
      for (var x in questionsArr[questionCount].answers){
        if(questionsArr[questionCount].answers.hasOwnProperty(x)){
          text = questionsArr[questionCount].answers[x];
          $("#answers").append("<li>" + text + "</li>");
            //labels correct answer
            if (text === questionsArr[questionCount].correctanswer){
              $("li").attr('id', 'correctanswer');
          }
        }
      }


      //when user chooses an answer
      $("li").click(function(){

        //check if answer
        if ($(this).is("#correctanswer")) {
          answerCorrect = "true";
        } else {
          answerCorrect = "false";
        }

        displayAnswer();

      });
    }


    //displays the answer screen
    function displayAnswer(){
      //hide the question area
      $("#answers").empty();
      $("#questionArea").hide();
      $("#answerArea").show();

      if (answerCorrect === "true"){
        $("#choiceCheck").removeClass("incorrect").html("<h1>&#10003; Correct</h1> ");
        $("#correctAnswer").html("<h3>" + 'The answer was '  + questionsArr[questionCount].correctanswer + "</h3>");
      } else if (answerCorrect === "false"){
        $("#choiceCheck").addClass("incorrect").html("<h1>X Incorrect</h1>");
        $("#correctAnswer").html("<h3>" + 'The answer was '  + questionsArr[questionCount].correctanswer + "</h3>");
      } else {
        $("#choiceCheck").addClass("incorrect").html("<h1>Out of Time!</h1>");
        $("#correctAnswer").html("<h3>" + 'The answer was '  + questionsArr[questionCount].correctanswer + "</h3>");
      }

      questionCount ++;

      setTimeout(displayQuestion, 5000);

    }



    //user begins game with click
    $("#startButton").click(function(){
      //start screen clears
      $("#startDisplayArea").hide();
      //loop through our questions and display time, quesitons, answers for 30 seconds or until an answer is clicked
      displayQuestion();


      //end screen

    });




});
