// switch 

document.querySelector(".on").addEventListener("click", function() {

  document.querySelector(".bigdev").innerHTML = ' <button class ="box5 nuovo"> STOP </button>';

   var myVar = setInterval(function(){
      var x = document.querySelector("#count").innerText;
    for (i=0; i<10; i++) {x++;} ;
     document.querySelector("#count").innerHTML = x ;}, 1000);
document.querySelector(".nuovo").addEventListener("click", function() {
document.querySelector(".bigdev").innerHTML = ' <button class="box4 on"> START </button>';
   clearInterval(myVar); });

});


// adds input to white box when clicked

document.querySelector(".btn").addEventListener("click", handleClick);

function handleClick() {
  document.querySelector(".maindiv").innerHTML = '<button class="nowinput btn box2"> <br> <input id="input" type="number"> </button>';

  // keypress da input
  document.querySelector(".nowinput").addEventListener("keydown", function(e) {
    if (e.key === 'Enter') {
      var t = document.querySelector("#input").value;
      t;
      document.querySelector(".maindiv").innerHTML = '<button class="box2 btn"> <p id="count">' + t + '</p> </button>';
    }
  });

};



//if instead of pressing enter to input  you press the PLUS button
document.querySelector(".plus").addEventListener("click", function() {
  var t = document.querySelector("#input").value;
  t;
  document.querySelector(".maindiv").classList.remove("box2");
  document.querySelector(".maindiv").innerHTML = '<button class="box2"> <p id="count">' + t + '</p> </button>';
});



//same thing with minus
document.querySelector(".minus").addEventListener("click", function() {
  var t = document.querySelector("#input").value;
  t;
  document.querySelector(".maindiv").classList.remove("box2");
  document.querySelector(".maindiv").innerHTML = '<button class="box2"> <p id="count">' + t + '</p> </button>';
});



// plus
document.querySelector(".plus").addEventListener("click", function() {
  var x = document.querySelector("#count").innerText;
  x++;
  document.querySelector("#count").innerHTML = x;
});


// minus
document.querySelector(".minus").addEventListener("click", function() {
  var x = document.querySelector("#count").innerText;
  x--;
  document.querySelector("#count").innerHTML = x;
});
