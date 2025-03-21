let userSeq=[];
let gameSeq=[];

let started=false;
let level=0;
let h2 = document.querySelector("h2");
let body = document.querySelector("body");

let buttons=["yellow","red","purple","green",];
start();
function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let index = Math.floor(Math.random() * 3);
    let randBtn = buttons[index];
    let randCol = document.querySelector(`.${randBtn}`);
    gameFlash(randCol);
    gameSeq.push(randBtn);
}
function start() {
document.addEventListener("keypress", function(){
    if(started==false) {
    started = true;
    levelUp();
}
});
}
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => btn.classList.remove("flash"), 250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(() => btn.classList.remove("userFlash"), 250);
}
function btnpress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let Btns = document.querySelectorAll(".btn");
for(let Btn of Btns) {
    Btn.addEventListener("click", btnpress);
}
function checkAns(idx) {
    if(gameSeq[idx] == userSeq[idx]) {
        if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
        }
    }
    else {
        h2.innerText = `Game Over! Player Score ${level} \nPress any key to Start the Game.`;
        gameOver();
    }
}
function gameOver() {
    body.classList.add('gameOver');
    setTimeout(() => body.classList.remove('gameOver'),500);
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
    start();
}