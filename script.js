var classArray = [
  "Adam",
  "Anne",
  "Anthony",
  "Brandon",
  "Daniel",
  "Glyde",
  "Hannah",
  "Joe",
  "Logan",
  "Noah",
  "Patrick",
  "Quinn",
  "Samantha",
  "Sion",
  "Thomas",
  "Tracey",
  "Ginni",
  "Zach",
  "Zeng"];

// Can be left blank if no instructions are required
var instructions = 'Your team name is also your starting git branch name';

var teamNames = ['black-widow', 'captain-america', 'hawkeye', 'hulk', 'ironman', 'thor'];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/*
var arr = [2, 11, 37, 42];
shuffle(arr);
console.log(arr);

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
*/

function resetSelected(){
	$('#two').removeClass('selected');
	$('#three').removeClass('selected');
	$('#four').removeClass('selected');
	$('#five').removeClass('selected');
	$('#six').removeClass('selected');
	$('#seven').removeClass('selected');
	$('#eight').removeClass('selected');
	$('#nine').removeClass('selected');
	$('#ten').removeClass('selected');
	$('#eleven').removeClass('selected');
}

$(document).ready(function() {
	$('#two').on('click', function(){
		resetSelected();
		selectedNumber = 2;
		$(this).addClass('selected');
	});

	$('#three').on('click', function(){
		resetSelected();
		selectedNumber = 3;
		$(this).addClass('selected');
	});

	$('#four').on('click', function(){
		resetSelected();
		selectedNumber = 4;
		$(this).addClass('selected');
	});

	$('#five').on('click', function(){
		resetSelected();
		selectedNumber = 5;
		$(this).addClass('selected');
	});

	$('#six').on('click', function(){
		resetSelected();
		selectedNumber = 6;
		$(this).addClass('selected');
	});

	$('#seven').on('click', function(){
		resetSelected();
		selectedNumber = 7;
		$(this).addClass('selected');
	});

	$('#eight').on('click', function(){
		resetSelected();
		selectedNumber = 8;
		$(this).addClass('selected');
	});

	$('#nine').on('click', function(){
		resetSelected();
		selectedNumber = 9;
		$(this).addClass('selected');
	});

	$('#ten').on('click', function(){
		resetSelected();
		selectedNumber = 10;
		$(this).addClass('selected');
	});

	$('#eleven').on('click', function(){
		resetSelected();
		selectedNumber = 11;
		$(this).addClass('selected');
	});

	$('#randomButton').on('click', function(){
		if(!selectedNumber){
			alert("You need to select a group size!");
			return;
		}

    $('#instructions').append('<h2>' + instructions + '</h2>');

		$('.groupContainer').empty();

		shuffle(classArray);

		for(var i = 0; i < selectedNumber; i++){
			var appendedDiv = "<div class='group' id='group" + i + "'><h2>" + teamNames[i] + "</h2></div>";
			$('.groupContainer').append(appendedDiv);
		}

		for(i = 0; i < classArray.length; i++){
			var groupNumber = i%selectedNumber;
			$("#group" + groupNumber).append("<p>" + classArray[i] + "</p>");
			var lastChild = $("#group" + groupNumber).children().last();
			lastChild.hide().delay(i * 100).slideDown();
		}
	});

});
