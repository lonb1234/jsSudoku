

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

// button functionality
function sudobuttons(){
  if (event.target.value<9){
    event.target.value++;
    event.target.innerHTML=event.target.value;
  }
else{
  event.target.value=1;
  event.target.innerHTML=event.target.value;
}
};
