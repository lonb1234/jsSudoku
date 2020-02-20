//
// document.querySelector('.c1').addEventListener("click", function(){ document.querySelector('#b1').innerHTML=('.c1').innerHTML; });


point=0
document.querySelector('#b1').addEventListener("click", function(){ if (point<9){point++} else{point=1}; document.querySelector('#b1').innerHTML=point; });
