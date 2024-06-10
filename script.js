document.addEventListener ('DOMContentLoaded', function() {


    const score = document.getElementById('score');

    const rock = document.getElementById('Rock');
    const paper = document.getElementById('Paper');
    const scissors = document.getElementById('Scissors');

    let Win = 0, Loss = 0, Tie = 0;

    function gameResult(computerMove){
        score.innerHTML = `Computer choose: ${computerMove} <br> Win: ${Win} Loss: ${Loss} Tie: ${Tie}`
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
            Tie++;
        } else if ((playerMove === 'Rock' && computer === 'Scissors') ||
                (playerMove === 'Paper' && computer === 'Rock') ||
                (playerMove === 'Scissors' && computer === 'Paper')) {
            Win++;
        } else {
            Loss++;
        }
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
});