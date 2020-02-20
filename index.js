// sudoku clicks

point = 0
document.querySelector('#b1').addEventListener("click", function() {
  if (point < 9) {
    point++
  } else {
    point = 1
  };
  document.querySelector('#b1').innerHTML = point;
});




// new Game
// need to add random numbers to it later!
document.querySelector('.new').addEventListener("click", function() {
  document.querySelector('.btn-outline-dark').innerHTML = '0'
});

// reset
//temporary!, reset to original settings!
document.querySelector('.reset').addEventListener("click", function() {
  document.querySelector('.btn-outline-dark').innerHTML = '0'
});
