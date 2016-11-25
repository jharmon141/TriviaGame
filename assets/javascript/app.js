$(document).ready(function() {

    //questions object
    var questions = {
        question1: {
            question: "The film 'Bladerunner' was based on which book by Philip K. Dick?",
            answers: {
                answer1: "Strangers in a Strange Land",
                answer2: "V.A.L.I.S.",
                answer3: "Do Androids Dream of Electric Sheep?",
                answer4: "The Man in the High Castle",
            },
            correctanswer: "Do Androids Dream of Electric Sheep?",
            imageURL: "assets/images/doandroids.jpg",
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

    $("#endScreen").hide();

    //set variables
    var answerCorrect = "none";
    var text = "";
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredAnswers = 0;
    var questionCount = 0;
    var questionsArr = [questions.question1, questions.question2, questions.question3, questions.question4, questions.question5, questions.question6, questions.question7, questions.question8, questions.question9, questions.question10];

    //timer function
    var seconds;

    var timer = function() {
        //reset timer
        seconds = 30;
        //diplay timer
        $("#counter").html("<p>" + "Time Remaing: " + seconds + "</p>");
        //run timer
        var runTimer = setInterval(function() {
            seconds--;
            if (seconds === 0) {
                clearInterval(runTimer);
                displayAnswer();
            }
            $("#counter").html("<p>" + "Time Remaing: " + seconds + "</p>");

            if (answerCorrect === "true" || answerCorrect === "false") {
                clearInterval(runTimer);
            }

        }, 1000);


    };

    //displays the questions and answers
    function displayQuestion() {

        $("#answerArea").hide();
        //start timer
        timer();

        //clear correctanswer
        answerCorrect = "none";

        //display question
        $("#questionArea").show();
        $("#question").html(questionsArr[questionCount].question);

        //display answers
        for (var key in questionsArr[questionCount].answers) {

            if (questionsArr[questionCount].answers.hasOwnProperty(key)) {
                text = "";
                text = questionsArr[questionCount].answers[key];
                $("#answers").append("<li>" + text + "</li>");

            }
        }

        //when user chooses an answer
        $("li").click(function() {

          $( "li" ).each(function( index ) {
            if ($(this).text() === questionsArr[questionCount].correctanswer){
                $(this).attr('id', 'correctanswer');
            }
          });

          //check if answer is correct
          if ($(this).is("#correctanswer")) {
              answerCorrect = "true";
          } else {
              answerCorrect = "false";
          }

          displayAnswer();

        });
    }

    //displays the answer screen
    function displayAnswer() {
        //hide the question area
        $("#answers").empty();
        $("#questionArea").hide();
        $("#answerArea").show();
        $("#answerPic").html('<img src="' + questionsArr[questionCount].imageURL + '"/>');

        //if correct answer is chosen
        if (answerCorrect === "true") {
            $("#choiceCheck").removeClass("incorrect").html("<h1>&#10003; Correct</h1> ");
            $("#correctAnswer").html("<h3>" + 'The answer was ' + questionsArr[questionCount].correctanswer + "</h3>");
            correctAnswers++;
        //if incorrect answer is chosen
        } else if (answerCorrect === "false") {
            $("#choiceCheck").addClass("incorrect").html("<h1>X Incorrect</h1>");
            $("#correctAnswer").html("<h3>" + 'The answer was ' + questionsArr[questionCount].correctanswer + "</h3>");
            incorrectAnswers++;
        //if time runs out
        } else {
            $("#choiceCheck").addClass("incorrect").html("<h1>Out of Time!</h1>");
            $("#correctAnswer").html("<h3>" + 'The answer was ' + questionsArr[questionCount].correctanswer + "</h3>");
            unansweredAnswers++;
        }

        questionCount++;

        if (questionCount > questionsArr.length -1){
          setTimeout(displayEndScreen, 5000);
        } else {
          setTimeout(displayQuestion, 5000);
        }
    }

    function displayEndScreen(){
      //hide the question area
      $("#answers").empty();
      $("#questionArea").hide();
      $("#answerArea").hide();
      $("#counter").hide();

      //show end screen
      $("#endScreen").show();
      if (correctAnswers > 6){
        $("#howYouDid").html("<h1>You did great! Nerd on!</h1>");
      } else if (correctAnswers >3 && correctAnswers < 7){
        $("#howYouDid").html("<h1>You did OK. Your nerd skills need a little improvement</h1>");
      } else {
        $("#howYouDid").html("<h1>OUCH! You need to hit the books!</h1>");
      }

      //display results
      $("#score").html("<h3>Correct Answers: " + correctAnswers + "</h3>" + "<h3>Incorrect Answers: " + incorrectAnswers + "</h3>" + "<h3>Unanswered: " + unansweredAnswers + "</h3>");

    }

    //reset game function
    function resetGame(){
      questionCount = 0;
      answerCorrect = "none";
      text = "";
      correctAnswers = 0;
      incorrectAnswers = 0;
      unansweredAnswers = 0;

      $("#endScreen").hide();
      displayQuestion();
    }

    //user begins game with click
    $("#startButton").click(function() {

        //start screen clears
        $("#startDisplayArea").hide();
        //loop through our questions and display time, quesitons, answers for 30 seconds or until an answer is clicked

        displayQuestion();

    });

    $("#resetButton").click(function(){
      resetGame();
    });

});
