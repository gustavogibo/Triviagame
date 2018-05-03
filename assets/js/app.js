$(document).ready(function() {

    // get initial position of the element
    var fixmeTop = $('.box-timer').offset().top;       

    // assign scroll event listener
    $(window).scroll(function() {                  

        // get current position
        var currentScroll = $(window).scrollTop(); 

        // apply position: fixed if you scroll to that element or below it
        if (currentScroll >= fixmeTop) {           
            $('.box-timer').css({                     
                position: 'fixed',
                top: '0',
                left: '0',
            });
        } else {       
            // apply position: static if you scroll above it                            
            $('.box-timer').css({                      
                position: 'static'
            });
        }

    });

    var trivia = {

        rightAnswers: 0,
        wrongAnswers: 0,
        unansweredQuestions: 0,
        timer: 20,
        counter: 0,
        interval: 0,
        questions:
            [
                {question: "Which actress has won the most Oscars?",
                 options: ["Meryl Streep", "Julia Roberts", "Charlize Theron", "Jennifer Lawrence", "Katharine Hepburn"],
                 answer: "Katharine Hepburn",
                 name: "question-1-1"             
                },
                {question: "Name the director of the Lord of the Rings trilogy",
                 options: ["James Cameron", "Wes Anderson", "Martin Scorsese", "Peter Jackson", "Woody Allen"],
                 answer: "Peter Jackson",
                 name: "question-2-1"               
                },
                {question: "Who played Neo in The Matrix?",
                 options: ["Lawrence Fishburne", "Keanu Reeves", "Hugo Weaving", "John Wick", "Tom Cruise"],
                 answer: "Keanu Reeves",
                 name: "question-3-1"                
                },
                {question: "In the movie 'The Wizard of Oz', what did the Scarecrow want from the wizard?",
                 options: ["Eyes", "Ears", "Brain", "Heart", "Lungs"],
                 answer: "Brain",
                 name: "question-4-1"   
                },
                {question: "What fictional city is the home of Batman?",
                 options: ["Metropolis", "Springfield", "Sunnydale", "Gotham City", "Emerald City"],
                 answer: "Gotham City",
                 name: "question-5-1"                 
                },

            ],
        // function responsible for change the timer each second and update in the DOM
        startGame: function() {

            this.counter = setInterval(trivia.count, 1000);

        },
        // function called every second once the game starts
        count: function() {



            trivia.timer--;

            if(trivia.timer >= 0){

                //  TODO: Get the current time, pass that into the stopwatch.timeConverter function,
                //        and save the result in a variable.
                var newTime = trivia.timeConverter(trivia.timer);
            
                //  TODO: Use the variable you just created to show the converted time in the "display" div.
                $("#countdown").html(newTime);
            } else {

                clearInterval(this.counter);
            }
        
        },
        // Function to convert milisseconds to seconds
        timeConverter: function(t) {

        //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
    
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
    
        if (minutes === 0) {
            minutes = "00";
        }
    
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }
    
        return minutes + ":" + seconds;
        },
        // Function that hides the questions and shows the result box
        showResults: function() {
            var count = 0;
            var arr = [];
            $(".box-questions input[type=radio]:checked").each(function() {

                arr[count]= {question: $(this).attr("name"), answer: $(this).val()};
                count++;

            });

            for (var i = 0; i < arr.length; i++) { 
        
                switch(arr[i].question) {

                    case "question-1-1":

                        if(arr[i].answer == "Katharine Hepburn") {

                            trivia.rightAnswers++;

                        } else {

                            trivia.wrongAnswers++;
                        }
                        break;
                    
                    case "question-2-1":
                        
                        if(arr[i].answer == "Peter Jackson") {

                            trivia.rightAnswers++;

                        } else {

                            trivia.wrongAnswers++;
                        }
                        break;

                    case "question-3-1":
                        
                        if(arr[i].answer == "Keanu Reeves") {

                            trivia.rightAnswers++;

                        } else {

                            trivia.wrongAnswers++;
                        }
                        break;

                    case "question-4-1":
                        
                        if(arr[i].answer == "Brain") {

                            trivia.rightAnswers++;

                        } else {

                            trivia.wrongAnswers++;
                        }
                        break;

                    case "question-5-1":
                        
                        if(arr[i].answer == "Gotham City") {

                            trivia.rightAnswers++;

                        } else {

                            trivia.wrongAnswers++;
                        }
                        break;
            
                }
                
            }

            trivia.unansweredQuestions = 5 - (trivia.rightAnswers + trivia.wrongAnswers);

            $(".box-questions .col-12").hide();
            $(".box-results").show();
            $("#right-answers").html("You got "+trivia.rightAnswers+" right answers");
            $("#wrong-answers").html("You got "+trivia.wrongAnswers+" wrong answers");

            if(trivia.unansweredQuestions != 0) {
                
                $("#unanswered-questions").html("You had "+trivia.unansweredQuestions+" unanswered questions.")

            }

            var gif = "";

            if(trivia.rightAnswers == 5) {

                gif = "https://media.giphy.com/media/lErCIOgRGlkGI/giphy.gif";

            } else if(trivia.wrongAnswers == 5) {

                gif = "https://media.giphy.com/media/3otPoHtlHgovmNJSDe/giphy.gif"

            } else if(trivia.unansweredQuestions == 5){

                gif = "https://media1.giphy.com/media/a93jwI0wkWTQs/giphy.gif";

            } else {

                gif = "https://media2.giphy.com/media/6a07COg3oa8Fy/giphy.gif";

            }

            $("#gif").html("<img src='"+gif+"'>");

        }

        
        
        
    };

    trivia.startGame();

    // The function ShowResults inside the Object trivia will be called after 20 seconds (timer ends)
    setTimeout(trivia.showResults, 20000 );

});