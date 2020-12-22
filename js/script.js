'use strict';

// ------------------ Golbal Vars ---------------------
var selectionButtons,myScore, BeatsRules;

   
function initGame() {
  myScore = 0;
  selectionButtons = document.querySelectorAll('[data-choice]');
  BeatsRules = [ 
  {   
    name: 'paper',
    beats: 'rock'
  },
  {
    name: 'scissors',
    beats: 'paper'
  },
  {
    name: 'rock',
    beats: 'scissors'
  }
 ]
} 
   
   initGame();


   selectionButtons.forEach(element => {
    element.addEventListener('click', event => {
        var buttonChoices = element.dataset.choice;
        var mySelection = BeatsRules.find(choice => choice.name === buttonChoices);
        makeSelection(mySelection);
    });
});