
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(200);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(200);
  	});

  	/*--- DECLARE VARIABLES ---*/
	var guess;
  	var compareToChosen;
  	var numGuesses = 0;
  	var number;
  	
	/*--- FUNCTION TO CLEAR INPUT FORM ---*/
  	var clearForm = function() {
  		$("#userGuess").val('').focusout();
  	};

  	var resetHeader = function () {
	  	$("#feedback").text("Make your Guess!");
	  	$("h2").css({background: "#B36604"}, 1000, function(){});  		
  	};

	/*--- APP CHOOSES A NUMBER BETWEEN 1-100 ---*/
	var chooseNumber = function() {
		number = Math.floor((Math.random()*100 +1));
	};
	chooseNumber();

  	/*--- FUNCTION TO COLLECT USER'S INPUT ---*/
	$("#guessButton").click( function() {
		
		guess = +$("#userGuess").val();
		
		if (guess=="" || guess > 100) {
			alert("Please enter a number between 1-100. Thanks!");
			clearForm();
		}
		else if (isNaN(guess)) {
			alert("Please only enter numeric digits. No letters. No decimals. Thanks!");
			clearForm();
		}
		else if (guess % 1 != 0) {
			alert("Please no numbers with decimals. Thanks!");
			clearForm();
		}
		else {
			compareToChosen(userGuess);
			increaseCount();
			listGuess();
			clearForm();
		};
	});

	$("form").submit(function (e) {
		 return false;
		 e.preventDefault();
	});

  	/*--- ALLOW ENTERY WITH ENTER KEY ---*/
	$("userGuess").keydown(function (e) {
		if (e.keyCode == 13) { 
			e.preventDefault();
			$("#guessButton").click();
		}
	});

	/*--- INCRESE GUESS COUNT ---*/
	var increaseCount = function () {
		numGuesses++;
		$("#count").text(numGuesses);
	};

	/*--- LIST GUESSES ---*/
	var listGuess = function () {
		$("#guessList").append("<li>" + guess + "</li>");
	};

	/*--- CHANGE HEADER BASED ON USER'S GUESS ---*/
  	var changeHeader = function(text, color) {
  		$("#feedback").text(text);
  		$("h2").css("background", color);
  		setTimeout(resetHeader,2000);
  	}

	/*--- COMPARE USER'S GUESS WITH NUMBER ---*/
	var compareToChosen = function (text) {
		var diff = Math.abs(guess - number);
		var oldGuess = +$("#guessList li").last().text();
		var oldDiff = Math.abs(oldGuess - number);
		if (guess > number || guess < number) {
			if (numGuesses == 0) {
				if (diff >= 50) {
					changeHeader("Ice cold!", "#0EDBEC");
				}
				else if (diff >= 30 ) {
					changeHeader("Cold... Keep trying.", "#0E81EC");
				}
				else if (diff >= 20) {
					changeHeader("Warm...", "#C00EEC");
				}
				else if (diff >= 10) {
					changeHeader("Hot! Getting close...", "#EC0E4C");
				}
				else {
					changeHeader("Very hot! Almost there!!", "#EC0E0E");
				};
			}
			else {
				if (diff < oldDiff) {
					changeHeader("Warmer...", "#C00EEC");
				}
				else {
					changeHeader("Colder...", "#0EDBEC");
				};
			};
		}
		else {
			changeHeader("Congrats! You guessed it!", "#27C200");
			setTimeout(resetGame,2000);
		};
	};

	/*--- RESET GAME IF USER CLICKS NEW GAME ---*/
  	var resetGame = function() {
		$("#count").text("0");
  		$(".guessBox").empty();
  		numGuesses = 0;
  		resetHeader();
		clearForm();
		chooseNumber();
  	};

	$(".new").click(function() {
		resetGame();
	});
});

// GET RID OF MESSAGE AFTER A FEW SECONDS

// ADVANCED FEATURE - RELATIONAL FEEDBACK
// you can write code that provides users with feedback about their
// most recent guess in relation to the previous one. If the most recent
// guess is closer to the secret number, you would tell the user they
// are “warmer”, and if it’s further, you’d tell them they are “colder”.
// Note that for the first guess, you’d still need to provide absolute
// feedback, since they’re won’t be a previous guess to compare to.






