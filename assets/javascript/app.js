$(document).ready(function() {

    //questions object
    var questions = {
        question1: {
            question: "The movie 'Bladerunner' was based on which book by Philip K. Dick?",
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
            question: "In 'Star Treck', what is the name of the Klingon home world?",
            answers: {
                answer1: "Gorkon",
                answer2: "Klingonia",
                answer3: "Anacreon",
                answer4: "Qo'noS",
            },
            correctanswer: "Qo'noS",
            imageURL: "assets/images/qo_nos_scene___with_praxis_by_vjeko1701-d6ir5tc.jpg",
        },
        question3: {
            question: "In 'Foundation' by Isaac Assimov, what character develops phsychohistory?",
            answers: {
                answer1: "Jasper Olivaw",
                answer2: "Conrad Arflane",
                answer3: "Hari Seldon",
                answer4: "Elric of Melnibone",
            },
            correctanswer: "Hari Seldon",
            imageURL: "assets/images/Hari-seldon.jpg",
        },
        question4: {
            question: "In Arthur C. Clarke's 'Childhood's End', the aliens resemble...",
            answers: {
                answer1: "Frogs",
                answer2: "Devels",
                answer3: "Skeletons",
                answer4: "Humans",
            },
            correctanswer: "Devels",
            imageURL: "assets/images/KarellenChildhoodsEnd.jpg",
        },
        question5: {
            question: "Flash Gordon's main enemy was named...",
            answers: {
                answer1: "Kane the Betrayer",
                answer2: "Graal the Fearsome",
                answer3: "Tiriac the Cruel",
                answer4: "Ming the Merciless",
            },
            correctanswer: "Ming the Merciless",
            imageURL: "assets/images/86b34311784aad7bc3f2726450220ff0.jpg",
        },
        question6: {
            question: "Orson Scott Card is the only author to win both Hugo and Nebula awards in two consecutive years. He won in 1985 for 'Ender's Game' and in 1986 for...",
            answers: {
                answer1: "Ender's Shadow",
                answer2: "Xenocide",
                answer3: "Speaker for the Dead",
                answer4: "Ender in Exile",
            },
            correctanswer: "Speaker for the Dead",
            imageURL: "assets/images/Speaker_dead_cover.jpg",
        },
        question7: {
            question: "In the movie Close Encounters of the Third Kind, what did Richard Dreyfuss's character build a model of out of mashed potatoes?",
            answers: {
                answer1: "A space ship",
                answer2: "A mountain",
                answer3: "A laser gun",
                answer4: "An alien being",
            },
            correctanswer: "A mountain",
            imageURL: "assets/images/794840436_CWxjf-M.png",
        },
        question8: {
            question: "In 'The Time Machine' by H.G. Wells, the main character encounters these two human species in the future.",
            answers: {
                answer1: "Eloi & Morlock",
                answer2: "Eloi & Balrog",
                answer3: "Balrog & Morlock",
                answer4: "Balrog & Cytharian",
            },
            correctanswer: "Eloi & Morlock",
            imageURL: "assets/images/1803311-morlock1.jpg",
        },
        question9: {
            question: "Who wrote & directed the horrible yet entertaining movie Plan 9 From Outer Space?",
            answers: {
                answer1: "Steven Spielberg",
                answer2: "Ed Wood",
                answer3: "George Lucas",
                answer4: "Roland Emmerich",
            },
            correctanswer: "Ed Wood",
            imageURL: "assets/images/Plan_9_Alternative_poster.jpg",
        },
        question10: {
            question: "In the 'X-Files' who was Fox Moulder's first secret informant?",
            answers: {
                answer1: "Deep Throat",
                answer2: "Alex Krycek",
                answer3: "Mr. X",
                answer4: "Well-Manicured Man",
            },
            correctanswer: "Deep Throat",
            imageURL: "assets/images/Deep_Throat_and_Fox_Mulder_meet_on_a_sports_track.jpg",
        },
    };

    $("#endScreen").hide();
    $("#startButton").hide();

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
        seconds = 20;
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
          setTimeout(displayEndScreen, 4000);
        } else {
          setTimeout(displayQuestion, 4000);
        }
    }

    function displayEndScreen(){

      //hide the question area
      $("#answers").empty();
      $("#questionArea").hide();
      $("#answerArea").hide();
      $("#counter").hide();
      $("#resetButton").hide();

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

      //reset button delayed fade in
      setTimeout(showResetButton, 3000);

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
      $("#counter").show();
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

    $('#startText').typeIt({
     speed: 60,
     autoStart: false,
     cursor: false,
    });


    function showStartButton(){
      $("#startButton").show();
    }

    function showResetButton(){
      $("#resetButton").show();
    }

    setTimeout(showStartButton, 7350);

    //light saber hover effect
    var audio = new Audio("assets/audio/Hum 2.wav");

    function saberPlay(){
      audio.play();
    }

    function saberPause(){
      audio.pause();
    }


    $("#startButton").hover(saberPlay, saberPause);
    $("#resetButton").hover(saberPlay, saberPause);

});
