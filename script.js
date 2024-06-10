document.addEventListener ('DOMContentLoaded', function() {


    const score = document.getElementById('score');
    const reset = document.getElementById('reset');

    const rock = document.getElementById('Rock');
    const paper = document.getElementById('Paper');
    const scissors = document.getElementById('Scissors');

    const scoreData = JSON.parse(localStorage.getItem('localScore')) || {
        Win: 0, 
        Loss: 0, 
        Tie: 0
    };

    function initialDisplay (){
        score.innerHTML = `Computer chose: None <br> Win: ${scoreData.Win} Loss: ${scoreData.Loss} Tie: ${scoreData.Tie}`
    }

    function gameResult(computerMove){
        score.innerHTML = `Computer chose: ${computerMove} <br> Win: ${scoreData.Win} Loss: ${scoreData.Loss} Tie: ${scoreData.Tie}`
    }

    function computerMove(){
        const rand = Math.random();
        let computerMove = '';

        if (rand < 1/3){
            computerMove = 'Rock';
        }
        else if (rand < 2/3){
            computerMove = 'Paper';
        }
        else {
            computerMove = 'Scissors';
        }

        return computerMove;
    }

    function gameMaker(playerMove, computerMove){
        const computer = computerMove;

        if (playerMove === computer) {
            scoreData.Tie++;
        } else if ((playerMove === 'Rock' && computer === 'Scissors') ||
                (playerMove === 'Paper' && computer === 'Rock') ||
                (playerMove === 'Scissors' && computer === 'Paper')) {
                scoreData.Win++;
        } else {
            scoreData.Loss++;
        }
        localStorage.setItem('localScore', JSON.stringify(scoreData))
        return computer;
    }

    rock.addEventListener ('click', function(event){
        gameResult(gameMaker('Rock', computerMove()));
    });

    paper.addEventListener ('click', function(event){
        gameResult(gameMaker('Paper', computerMove()));
    });

    scissors.addEventListener ('click', function(event){
        gameResult(gameMaker('Scissors', computerMove()));
    });

    reset.addEventListener ('click', function(event){
        scoreData = { 
            Win: 0, 
            Loss: 0, 
            Tie: 0 
        };
        
        localStorage.setItem('localScore', JSON.stringify(scoreData));
        initialDisplay ();
    });
    
    initialDisplay();
});