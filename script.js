let textRgb = document.querySelector(".text-rgb");
let buttons = document.querySelector(".button-play");
let middle = document.querySelector(".answ");
let boxx = document.querySelectorAll(".boxs");
let randomColor;
let modeEz = document.querySelector(".martivi")
let modeHard = document.querySelector(".rtuli")


function getRgb() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

modeEz.addEventListener("click", function(){
    for (let i = boxx.length / 2; i < boxx.length; i++) {
        boxx[i].style.visibility = "hidden";
    }
    giveColor2()
})
modeHard.addEventListener("click", function(){
    for (let i = 0; i < boxx.length; i++) {
        boxx[i].style.visibility = "visible";
    }
})

buttons.innerHTML = "new color";
function setRandomColor() {
    textRgb.innerHTML = getRgb();
}

function giveColor2() {
    let ranNum = Math.floor(Math.random() * boxx.length/2);
    randomColor = boxx[ranNum];
    randomColor.style.backgroundColor = textRgb.innerHTML;
}

function giveColor() {
    let ranNum = Math.floor(Math.random() * boxx.length);
    randomColor = boxx[ranNum];
    randomColor.style.backgroundColor = textRgb.innerHTML;
}

buttons.addEventListener("click", function () {
    setRandomColor();
    boxx.forEach(element => {
        element.style.backgroundColor = getRgb();
    });
    giveColor();
});

boxx.forEach(box => {
    box.addEventListener("click", function () {
        if (box !== randomColor) {
            middle.innerHTML = "Try Again!";
            box.style.visibility = "hidden";
        } else {
            middle.innerHTML = "Correct!!";
            boxx.forEach(element => {
                element.style.visibility = "visible";
                element.style.backgroundColor = textRgb.innerHTML;
                buttons.innerHTML = "Play Again!";
                buttons.addEventListener("click",function(){
                    buttons.innerHTML = "new color"
                    middle.innerHTML = ""
                })
            });
        }
    });
});
