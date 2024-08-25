// define variables
var player = document.querySelector('.player');
var computer = document.querySelector('.computer');
var winner = document.querySelector('.winner');
var pPoint = document.querySelector('.pPoint');
var cPoint = document.querySelector('.cPoint');
var computerChoice, random;
var pCount=0, cCount=0;
// ++, --
// check
console.log(computer);
// action 
function play(playerChoice){
	// alert(playerChoice);
	player.innerText="Player choice: " + playerChoice;
	// computer -> random->0==rock,1==paper,2==scissors
	random = Math.floor(Math.random()*3);
	console.log(random);
	if(random==0){
		computerChoice="rock";
		computer.innerText="Computer choice: rock";
	}else if(random==1){
		computerChoice="paper";
		computer.innerText="Computer choice: paper";
	}else if(random==2){
		computerChoice="scissors";
		computer.innerText="Computer choice: scissors";
	}
	// player -> rock == scissors, paper==rock, scissors==paper
	if(
	(playerChoice=="rock" && computerChoice=="scissors")
	||(playerChoice=="paper" && computerChoice=="rock")
	||(playerChoice=="scissors" && computerChoice=="paper")){
		winner.innerText = "Winner : player";
		pCount++;
		pPoint.innerText = "Player: " + pCount;
	}else if(playerChoice==computerChoice){
		winner.innerText = "Winner : tie";
	}
	else{
		winner.innerText = "Winner : computer";
		cCount++;
		cPoint.innerText= "Computer: " + cCount;
	}
}

function restart(){
	cPoint.innerText = "Computer: 0";
	cCount=0;
	player.innerText="Player choice:";
	computer.innerText="Computer choice:";
	winner.innerText = "Winner:";
}