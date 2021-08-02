'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
let playing = true
let currentScore = 0;
let activeUser = 0;
let scores = [0, 0];
// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const switchPlayer = function () {
    document.getElementById(`current--${activeUser}`).textContent = 0;
    currentScore = 0;
    activeUser = activeUser === 0 ? 1 : 0;
    // toggle will check if class is present then it will remove it and if it is not present
    // it will add that class
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active')
}
//Rolling a dice

btnRoll.addEventListener('click', function () {

    if (playing) {


        const roll = Math.trunc(Math.random() * 6) + 1;
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${roll}.png`;

        if (roll !== 1) {
            currentScore += roll;
            document.getElementById(`current--${activeUser}`).textContent = currentScore;
        }
        else {
            switchPlayer()

        }
    }
})

btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activeUser] += currentScore;
        document.getElementById(`score--${activeUser}`).textContent = scores[activeUser];
        if (scores[activeUser] >= 20) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activeUser}`).classList.add('player--winner');
            document.querySelector(`.player--${activeUser}`).classList.remove('player--active');
        }
        else {
            switchPlayer()
        }
    }

});

btnNew.addEventListener('click', function(){
    current0El.textContent = 0;
    current1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    document.querySelector('.player--0').classList.remove('player--winner')
    document.querySelector('.player--1').classList.remove('player--winner')
    document.querySelector('.player--0').classList.add('player--active')
    document.querySelector('.player--1').classList.remove('player--active')
    diceEl.classList.add('hidden');
    currentScore = 0;
    scores = [0,0];
    playing = true;
    activeUser = 0;
    
    
})




