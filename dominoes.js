function generateDominoes(){
  var dominoes = [];

  for (var a = 0; a <= 6; a++) {
    for (var b = a; b <= 6; b++) {
      dominoes.push([a, b]);
    }
  }

  return dominoes;
}

function startGame(){
  distributeDominoes(generateDominoes());
  drawAndPlacePlayerDominoes();

  // for (var i = 0; i < 4; i++) {
  //   document.write("Player " + String(i + 1) + ": " + JSON.stringify(playersDominoes[i]) + "<br>");
  // }
}

function distributeDominoes(dominoes) {
  var playerIndex = 0;
  var cachedDominoesLength = dominoes.length;
  for (var i = 0; i < cachedDominoesLength; i++) {
    var randomDominoIndex = Math.floor(Math.random() * dominoes.length);
    var randomDomino = dominoes[randomDominoIndex];
    dominoes.splice(randomDominoIndex, 1);
    playersDominoes[playerIndex].push(randomDomino);
    playerIndex++;

    if(playerIndex == 4) {
      playerIndex = 0;
    }
  }
}

function drawAndPlacePlayerDominoes() {
  playersDominoes.forEach(function(playerDominoes, playerIndex){
    playerDominoes.forEach(function(domino){
      placeDominoHTML(playerIndex, drawDominoHTML(domino));
    });
  });
}

function placeDominoHTML(playerIndex, dominoHTML) {
  document.querySelector('#player_' + playerIndex+ ' .dominoes').insertAdjacentHTML('beforeend', dominoHTML);
}

function drawDominoHTML(domino) {
  var html = '<div class="domino" draggable="true" data-a="' + domino[0] + '" data-b="' + domino[1] + '">';
  for(var i = 0; i <= 1; i++) {
    html += '<div class="side ' + (i == 0 ? 'a' : 'b') + '" data-side-count="' + domino[i] + '">';
    for(var j = 1; j <= domino[i]; j++) {
      html += '<div class="dotw"><div class="dot"></div></div>';
    }
    html += '</div>';
    if(i == 0) {
      html += '<div class="divider"></div>'
    }
  }
  html += '</div>';

  return html;
}


// Interface events

function startGameButtonClicked() {
  document.getElementById('starter_button_wrapper').style.display = 'none';
  document.getElementById('started_game').style.display = 'block';
  startGame();
}

// temporary
document.addEventListener('DOMContentLoaded', startGameButtonClicked, false);


document.addEventListener('click', function(e) {
  if(e.target && e.target.id == 'starter_button') {
    startGameButtonClicked()
  }
})


// Data

playersDominoes = [
  [], // player 1
  [], // player 2
  [], // player 3
  [], // player 4
];

boardDominoes = [];

//rotateDomino

var angle = 0
img = document.getElementsByClassName('crossRotate');
document.getElementsByClassName('domino').onclick = function() {
  angle = (angle + 90) % 360;
  img.className = "rotate" + angle;
}

/*
for (playerIndex == 0){
  playerIndex.style.display == "block"{
} else (playerIndex++){
  playerDominoes.style.display == "none"
}



$(function() {
  // alert('!')
  $(".dominoes").draggable();
  //ev.dataTransfer.setData("text", ev.target.id);
});
function draggable(domino){

  domino.draggable();
};

$( ".crossRotate" ).click(function() {
    if (  $( this ).css( "transform" ) == 'none' ){
        $(this).css("transform","rotate(90deg)");

    } else if ($(this).css("transform") == "rotate(180deg)") {
        $(this).css("transform","rotate(180deg)" );
    } else ($(this).css("transform") == "rotate(270deg)") {
        $(this).css("transform","rotate(270deg)" );
    }
});

*/