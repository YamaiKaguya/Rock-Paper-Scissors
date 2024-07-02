document.addEventListener('DOMContentLoaded', function() {

    const score = document.getElementById('score');
    const reset = document.getElementById('reset');

    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');

    let scoreData = JSON.parse(localStorage.getItem('localScore')) || {
        Win: 0, 
        Loss: 0, 
        Tie: 0
    };

    function initialDisplay(){
        score.innerHTML = `YOU CHOSE: NONE COMPUTER CHOSE: NONE <br>SCORE: WIN: ${scoreData.Win} LOSS: ${scoreData.Loss} TIE: ${scoreData.Tie}`;
    }

    function gameResult(userMove, computerMove){
        score.innerHTML = `YOU CHOSE: ${userMove} COMPUTER CHOSE: ${computerMove} <br> SCORE: WIN: ${scoreData.Win} LOSS: ${scoreData.Loss} TIE: ${scoreData.Tie}`;
    }

    function computerMove(){
        const rand = Math.random();
        let move = '';

        if (rand < 1/3){
            move = 'Rock';
        }
        else if (rand < 2/3){
            move = 'Paper';
        }
        else {
            move = 'Scissors';
        }

        return move;
    }

    function gameMaker(playerMove){
        const computer = computerMove();

        if (playerMove === computer) {
            scoreData.Tie++;
        } else if ((playerMove === 'Rock' && computer === 'Scissors') ||
                (playerMove === 'Paper' && computer === 'Rock') ||
                (playerMove === 'Scissors' && computer === 'Paper')) {
            scoreData.Win++;
        } else {
            scoreData.Loss++;
        }

        localStorage.setItem('localScore', JSON.stringify(scoreData));
        return computer;
    }

    rock.addEventListener('click', function(event){
        gameResult('Rock', gameMaker('Rock'));
    });

    paper.addEventListener('click', function(event){
        gameResult('Paper',gameMaker('Paper'));
    });

    scissors.addEventListener('click', function(event){
        gameResult('Scissors',gameMaker('Scissors'));
    });

    reset.addEventListener('click', function(event){
        scoreData = { 
            Win: 0, 
            Loss: 0, 
            Tie: 0 
        };
        localStorage.setItem('localScore', JSON.stringify(scoreData));
        initialDisplay();
    });

    initialDisplay();
});
