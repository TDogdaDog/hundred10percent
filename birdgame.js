window.onload = hungerLoss();
let hunger = 10;
let food = 0;
let money = 50;
let kill = 0;
let isdead = false;
let happiness = 50;

function feed() {
    if(isdead){
    } else {
        if(food <= 0) {
            food = 0;
        } else {
            food -= 1;
            hunger += 1;
            renderText()
    }
    }
}

function buyfood() {
    if(money >= 10) {
        food += 1;
        money -= 10;
        dead()
        renderText()
    }
}

function play() {
    if(!isdead) {

    }
}

function renderText() {
    document.getElementById("hunger").innerHTML = "Hunger: " + hunger + ", Food: " + food;
    document.getElementById("money").innerHTML = "Money: " + money;
}

function dead() {
    if(hunger === 0) {
        document.getElementById("birdimg").src = "./images/deadbird.png"
        hunger = 0;
        document.getElementById("dead").innerHTML = "Frank died RIP X_X"
        isdead = true;
    }
}

function hungerLoss() {
    const loseHunger = setInterval(() => {
    if(hunger === 0){
    } else {
        hunger -= 1;
        money += Math.floor(Math.random() * 11) + 10;
        kill = Math.floor(Math.random() * 1001)
        if(kill === 1000) {
            hunger = 0;
        }
        renderText();
        dead();
    }
    }, 5000)
}