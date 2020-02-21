// new Game
// need to add random numbers to it later!

function newg(){
    $( ":button" ).value='0'
    $( ":button" ).innerHTML = '0'
}

function reset(){
    document.querySelectorAll[1]('.btn-outline-dark').value = '0'
    document.querySelectorAll[1]('.btn-outline-dark').innerHTML = '0'
}


// button functionality
function sudobuttons() {
  if (event.target.value < 9) {
    event.target.value++;
    event.target.innerHTML = event.target.value;
  } else {
    event.target.value = 1;
    event.target.innerHTML = event.target.value;
  }
};
