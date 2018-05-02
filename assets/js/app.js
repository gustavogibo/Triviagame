$(document).ready(function() {

    var trivia = {

        rightAnswers: 0,
        wrongAnswers: 0,
        timer: 25,
        interval: 0,
        //trivia.questions[0]
        questions:
            [
                {question: "Which actress has won the most Oscars?",
                 options: ["Meryl Streep", "Julia Roberts", "Charlize Theron", "Jennifer Lawrence", "Katharine Hepburn"],
                 answer: "Katharine Hepburn"                 
                },
                {question: "Name the director of the Lord of the Rings trilogy",
                 options: ["James Cameron", "Wes Anderson", "Martin Scorsese", "Peter Jackson", "Woody Allen"],
                 answer: "Peter Jackson"                 
                },
                {question: "Who played Neo in The Matrix?",
                 options: ["Lawrence Fishburne", "Keanu Reeves", "Hugo Weaving", "John Wick", "Tom Cruise"],
                 answer: "Keanu Reeves"                 
                },
                {question: "In the movie 'The Wizard of Oz', what did the Scarecrow want from the wizard?",
                 options: ["Eyes", "Ears", "Brain", "Heart", "Lungs"],
                 answer: "Brain"                 
                },
                {question: "What fictional city is the home of Batman?",
                 options: ["Metropolis", "Springfield", "Sunnydale", "Gotham City", "Emerald City"],
                 answer: "Gotham City"                 
                },

            ],
        startGame: function() {

            setInterval(trivia.count, 1000);

            for (let i = 0; i < trivia.questions.length; i++) {
                
                var html = "<div class='col-12'";
                html += "<div class='card box-question bg-info text-center'>";
                html += "<div class='card-body'>";
                html += "<h2 class='card-title'>"+trivia.questions[i].question+"</h2>";
                for (let count = 0; count < trivia.questions[i].options.length; count++) {
                    html += "<div class='custom-control custom-radio'>";
                    html += "<input id='question-"+i+"' name='question-"+i+"' type='radio' class='custom-control-input' value='"+trivia.questions[i].options[count]+"'>";
                    html += "<label class='custom-control-label' for='question-"+i+"'>"+trivia.questions[i].options[count]+"</label>";
                    html += "</div>";
                }
                html += "</div>";
                html += "</div>";
                html += "</div>";
                // console.log(html);
                $(".box-questions").append(html);
                
            }

        },
        count: function() {

            trivia.timer--;
            //  TODO: Get the current time, pass that into the stopwatch.timeConverter function,
            //        and save the result in a variable.
            var newTime = trivia.timeConverter(trivia.timer);
        
            //  TODO: Use the variable you just created to show the converted time in the "display" div.
            $("#countdown").html(newTime);
        
        },
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
        }
        

    };

    trivia.startGame();


});