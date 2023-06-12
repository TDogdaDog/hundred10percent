let doors = [0,0,0];
let winorlose = false;
window.onload = setup;

function setup() {
  doors = [0,0,0];
  doors[Math.floor(Math.random() * 3)] = 1;
  //document.getElementById("test").innerHTML = doors;
  winorlose = false;
  document.getElementById("dooor0").src = "./images/doooooor.png";
  document.getElementById("dooor1").src = "./images/doooooor.png";
  document.getElementById("dooor2").src = "./images/doooooor.png";
  document.getElementById("playagain").style.visibility = "hidden";
}

function door(num) {
  if (!winorlose) {
    if(doors[num] === 1){
      document.getElementById("dooor" + num).src = "./images/doooorwin.png";
      document.getElementById("playagain").innerHTML = "You win! Play again!";
      document.getElementById("playagain").style.visibility = "visible";
      winorlose = true;
    } else {
      document.getElementById("dooor" + num).src = "./images/doooorlose.png";
      document.getElementById("playagain").innerHTML = "You lose. Try again!";
      document.getElementById("playagain").style.visibility = "visible";
      winorlose = true;
    }
  }
}