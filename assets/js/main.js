// main.js

let divs = document.querySelectorAll(".grid-container div");

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function randomize() {
    console.log(divs.length, "randomize!");
    divs.forEach(function(div){
        let scale = randomNumber(0.5, 1.2);
        let translateX = randomNumber(-50, -10);
        let translateY = randomNumber(-10, 20);
        let rotate = randomNumber(-15, -5);

        if (Math.random() > 0.5) {
            scale = 1;
            translateX = randomNumber(10, 80);
            translateY = randomNumber(-10, 10);
        }
        div.style.transform = `scale(${scale}) translate(${translateX}%, ${translateY}%) rotate(${rotate}deg)`;

    });

}


document.addEventListener("click", randomize);
