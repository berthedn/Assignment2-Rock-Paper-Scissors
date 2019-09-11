
let userScore = 0;
let compScore = 0;


const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");
const result = document.querySelector(".result");
const oldResult = document.querySelector(".oldResult");






function computerChoice() {
	const choice = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random()*3);
	return choice[randomNumber];
}
//console.log(computerChoice());

function convert(letter){
	if(letter=='r') return "Rock";
	if(letter=='s') return "Scissors";
	else return "Paper";
}
function win(user,computer){
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result.innerHTML = convert(user)+" beats "+convert(computer)+". You Win.";
	oldResult.innerHTML = oldResult.innerHTML + result.innerHTML + "</br>";
}

function lose(user,computer){
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result.innerHTML = convert(computer)+" beats "+convert(user)+". You Loose.";
	oldResult.innerHTML = oldResult.innerHTML + result.innerHTML + "</br>";
}

function draw(user,computer){
	result.innerHTML = "Its a Draw.";
	oldResult.innerHTML = oldResult.innerHTML + result.innerHTML + "</br>";
}

function game(userChoice){
	const computer = computerChoice();
	switch (userChoice + computer){
		case "rs":
		case "pr":
		case "sp":
		win(userChoice, computer);
		break;

		case "rp":
		case "ps":
		case "sr":
		lose(userChoice, computer);
		break;

		case "rr":
		case "pp":
		case "ss":
		draw(userChoice, computer);
		break;

	}
 //console.log(userChoice);
}

function main(){
	
	rock.addEventListener('click',function(){
		game("r");
	})
	paper.addEventListener('click',function(){
		game("p");
	})
	scissors.addEventListener('click',function(){
		game("s");
	})
}

main();




/*
			$scorePlayer = 0;
			$scoreComputer = 0;

			if(isset($_POST['choix'])){ $player = $_POST['choix']; }

			$computer = rand(1,3);
			//echo $computer;

			if($computer==1){
				if($player==1){
					echo "Tie";
				}
				if($player==2){
					echo "Win";
					$scorePlayer = $scorePlayer + 1;
					$text = $text."Player won.";
				}
				if($player==3){
					echo "Loose";
					$scoreComputer = $scoreComputer + 1;
					$text = $text." Computer won.";
				}
			}

			if($computer==2){
				if($player==1){
					echo "Loose";
					$scoreComputer = $scoreComputer + 1;
					$text = $text."Computer won.";
				}
				if($player==2){
					echo "Tie";
				}
				if($player==3){
					echo "Win";
					$scorePlayer = $scorePlayer + 1;
					$text = $text."Player won.";
				}
			}

			if($computer==3){
				if($player==1){
					echo "Win";
					$scorePlayer = $scorePlayer + 1;
					$text = $text."Player won.";
				}
				if($player==2){
					echo "Loose";
					$scoreComputer = $scoreComputer + 1;
					$text = $text."Computer won.";
				}
				if($player==3){
					echo "Tie";
				}
			}

			

			echo "Player ".$scorePlayer." - ".$scoreComputer." Computer";
			echo $text;

*/
			
			