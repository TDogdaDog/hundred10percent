let word = '';
let winorlose = false;
window.onload = () => {getWord()}

function setup() {
  getWord()
  document.getElementById("winorlose").innerHTML = null;
  document.getElementById("playagain").style.visibility = "hidden";
  document.getElementById("correct").innerHTML = "";
  document.getElementById("guess").value = ""
  winorlose = false;
}

function fetchWord() {
  return fetch('https://random-word-api.herokuapp.com/word?length=5')
    .then(response => response.json())
    .then(data => {
      return data[0];
    });
}

function getWord() {
  fetchWord()
    .then(apiData => {
      word = apiData;
      let letters = word.split('');
      shuffle(letters)
      //document.getElementById("wordDebug").innerHTML = word;

    })
    .catch(error => {
      console.log('Error:', error);
    });
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  let combine = array.join("");
  document.getElementById("scrambled").innerHTML = combine;
  return combine;
}

function submit() {
  if (!winorlose) {
    if(document.getElementById("guess").value == word) {
      document.getElementById("winorlose").innerHTML = "You Win!";
      document.getElementById("playagain").style.visibility = "visible";
      winorlose = true;
    } else {
      document.getElementById("winorlose").innerHTML = "You lose!";
      document.getElementById("playagain").style.visibility = "visible";
      document.getElementById("correct").innerHTML = word;
      document.getElementById("guess").value = ""
      winorlose = true;
    }
  }
}