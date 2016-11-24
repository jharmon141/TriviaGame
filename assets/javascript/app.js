$(document).ready(function() {

    //questions object
    var questions = {
        question1: {
            question: "question1 filler",
            answers: {
                answer1: "answer1string",
                answer2: "answer2",
                answer3: "answer3",
                answer4: "answer4",
            },
            //correctanswer: this.answers.answer1,
            imageURL: "assets/images/example.jpg",
        },
        question2: {
            question: "question2 filler",
            answers: {
                answer1: "answer",
                answer2: "answer",
                answer3: "answer",
                answer4: "answer",
            },
            //correctanswer: this.answers.answer4,
            imageURL: "assets/images/example.jpg",
        },
        question3: {
            question: "question3 filler",
            answers: {
                answer1: "answer",
                answer2: "answer",
                answer3: "answer",
                answer4: "answer",
            },
            //correctanswer: this.answers.answer3,
            imageURL: "assets/images/example.jpg",
        },
        question4: {
            question: "question4 filler",
            answers: {
                answer1: "answer",
                answer2: "answer",
                answer3: "answer",
                answer4: "answer",
            },
            //correctanswer: this.answers.answer1,
            imageURL: "assets/images/example.jpg",
        },
        question5: {
            question: "question5 filler",
            answers: {
                answer1: "answer",
                answer2: "answer",
                answer3: "answer",
                answer4: "answer",
            },
            //correctanswer: this.answers.answer2,
            imageURL: "assets/images/example.jpg",
        },
        question6: {
            question: "question6 filler",
            answers: {
                answer1: "answer",
                answer2: "answer",
                answer3: "answer",
                answer4: "answer",
            },
            //correctanswer: this.answers.answer4,
            imageURL: "assets/images/example.jpg",
        },
        question7: {
            question: "question7 filler",
            answers: {
                answer1: "answer",
                answer2: "answer",
                answer3: "answer",
                answer4: "answer",
            },
            //correctanswer: this.answers.answer1,
            imageURL: "assets/images/example.jpg",
        },
        question8: {
            question: "question8 filler",
            answers: {
                answer1: "answer",
                answer2: "answer",
                answer3: "answer",
                answer4: "answer",
            },
            //correctanswer: this.answers.answer2,
            imageURL: "assets/images/example.jpg",
        },
        question9: {
            question: "question9 filler",
            answers: {
                answer1: "answer",
                answer2: "answer",
                answer3: "answer",
                answer4: "answer",
            },
            //correctanswer: this.answers.answer4,
            imageURL: "assets/images/example.jpg",
        },
        question10: {
            question: "question10 filler",
            answers: {
                answer1: "answer",
                answer2: "answer",
                answer3: "answer",
                answer4: "answer",
            },
            //correctanswer: this.answers.answer3,
            imageURL: "assets/images/example.jpg",
        },
    };

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
            }
            $("#counter").html("<p>" + "Time Remaing: "+ seconds + "</p>");
        }, 1000);
    };

    //keeps track of which question
    var questionCount = 0;

    //displays the questions and answers
    function displayQuestion(){
      $("#questionArea").empty();
      //start timer
      timer();
      //display question
      $("#question").html(questionsArr[questionCount].question);
      //display answers
      var text = "";
      for (var x in questionsArr[questionCount].answers){
        if(questionsArr[questionCount].answers.hasOwnProperty(x)){
        text = questionsArr[questionCount].answers[x];
        $("#answers").append("<li>" + text + "</li>");
        }
      }

      setTimeout(displayAnswer, 30000);
    }



    //displays the answer screen
    function displayAnswer(){
      //empty the question area
      $("#questionArea").hide();

      //display if

    }



    //user begins game with click
    $("#startButton").click(function(){
      //start screen clears
      $("#startDisplayArea").hide();
      //loop through our questions and display time, quesitons, answers for 30 seconds or until an answer is clicked
      displayQuestion();

        //when answer chosen or timer reaches zero move to next interation

        //function that renders correct/incorrect screen


      //end screen

    });




});
