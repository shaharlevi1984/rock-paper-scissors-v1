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