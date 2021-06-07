function randomNumberGenerator() {
    var randomNumber1 = Math.floor(Math.random()*6 + 1);
    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1.toString() + ".png");
    
    var randomNumber2 = Math.floor(Math.random()*6 + 1);
    document.querySelector('.img2').setAttribute("src", "images/dice" + randomNumber2.toString() + ".png");
   
    if(randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Has Won!";
    } else if(randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Has Won!";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
    //return randomNumber1;
}
