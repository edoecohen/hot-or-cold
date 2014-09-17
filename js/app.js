
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(200);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(200);
  	});


  	var number;
  	var guess;
  	

  	var changeHeader = function(text, color) {
  		$("#feedback").text(text);
  		$("h2").css("background", color);
  	}

// NEWGAME FUNCTION
	var newGame = function() {
		var numGuesses = 0;
		var number = Math.floor((Math.random()*100 +1));
		alert("the number is " + number);

		$("#guessButton").on("click", function() {
			event.preventDefault();

			numGuesses++;
			$("#count").text(numGuesses);

			guess = +$("#userGuess").val();
			var diff = Math.abs(guess - number);
			
			// MAKE SURE IT'S A REAL & GOOD NUMBER

			if (isNaN(guess)) {
			alert("Please only enter numeric digits. No letters. No decimals. Thanks!");
			}
			else if (guess % 1 != 0) {
			alert("Please no numbers with decimals. Thanks!");
			}
			else if (guess > 100) {
				alert("Please choos a number between 1-100. Thanks!");
			}
			
			// TELL USER HOW CLOSE THEY ARE

			else if (guess > number || guess < number) {
				if (diff >= 50) {
					changeHeader("Ice cold! Guess again.", "#0EDBEC");
				}
				else if (diff >= 30 ) {
					changeHeader("Cold... Keep trying.", "#0E81EC");
				}
				else if (diff >= 20) {
					changeHeader("Warm... Keep trying.", "#C00EEC");
				}
				else if (diff >= 10) {
					changeHeader("Hot! Almost there!", "#EC0E4C");
				}
				else {
					changeHeader("Very hot! Guess again!", "#EC0E0E");
				}
			}
			else {
				changeHeader("Congrats! You guessed it!", "#27C200");
			}

			$("#guessList").prepend("<li>" + guess + "</li>");
			$("#userGuess").val('').focusout();
		});
	};
  	newGame();

  	var resetGame = function() {
		$("#count").text("0");
		$("#feedback").text("Make your Guess!");
  		$("h2").css("background", "#B36604");
  		$("guessList").empty;
  	};

	$(".new").click(function() {
		newGame();
		resetGame();
	});
});

// NEED TO CLEAN OUT PREVIOUS GAME AS PART OF NEW GAME

// GUESS A NUMBER FUNCTION



// CLICKING NEW GAME BUTTON
// Should actually start a new game





// You will need to write code that
// ensures that the user has supplied a numeric input between 1 and 100

// COMPARE USERS GUESS TO THE NUMBER AND GIVE FEEDBACK
// Feedback about the guess should appear in div#feedback.
// By default, when the page loads, the text in this field is set to
// “Make Your Guess!”


// TRACK GUESSES
// The game should track how many guesses the user has made.
// Feedback about this should appear in span#count
// (which defaults to 0, when the page loads).

// LIST GUESSED NUMBERS
// The game should also supply users with a list of the numbers
// they have guessed so far. We’ve set up the CSS for this game
// in such a way that you can simply add each guessed number as an
// ul#guessList.


// ADVANCED FEATURE - RELATIONAL FEEDBACK
// you can write code that provides users with feedback about their
// most recent guess in relation to the previous one. If the most recent
// guess is closer to the secret number, you would tell the user they
// are “warmer”, and if it’s further, you’d tell them they are “colder”.
// Note that for the first guess, you’d still need to provide absolute
// feedback, since they’re won’t be a previous guess to compare to.






