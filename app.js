var activePlayer, roundScore, scores,gamePlaying,name1,name2;
init();

//Event listener for a roll button
document.querySelector('.btn-roll').addEventListener('click', function() {
    document.querySelector('#msg').style.display = 'none';
    if(gamePlaying){
        //1. Roll the dice
        var dice = Math.floor(Math.random() * 6) + 1;

        //2 Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png'; 

        //3. Update the round score if NOT 1 and change the player
        if(dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Change player
            document.querySelector('#msg').style.display = 'block';
            nextPlayer();
        }
    }
});
   
document.querySelector('.btn-hold').addEventListener('click', function() {
   if(gamePlaying) {
        //update the score
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if won
        if(scores[activePlayer] >= 100){
            document.querySelector('#name-'+activePlayer).textContent = "Winner!";
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' +activePlayer+ '-panel').classList.add('winner');
            document.querySelector('.player-' +activePlayer+ '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
           nextPlayer(); 
        }   
   }
});

//Event listener for a new Game button
document.querySelector('.btn-new').addEventListener('click', init); 

//Function to initialize the variables
function init(){  
    roundScore = 0;
    activePlayer = 0;
    scores = [0,0];
    gamePlaying = true;
    
    name1 = prompt("Enter player 1 name");
    name2 = prompt("enter player2 name");
    
    document.querySelector('#msg').style.display = 'none';
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = name1;
    document.getElementById('name-1').textContent = name2;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
//function to select next player
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
         
        document.querySelector('#current-0').textContent = '0';
        document.querySelector('#current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
}
