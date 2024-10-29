var container = document.querySelector(".container");
var soccer = document.querySelector("#soccer");
var buttons = document.querySelector("#buttons");
var darkmode = document.querySelector(".darkmode");
var chooseuserimage = document.querySelector(".chooseuser");
var choosepcimage = document.querySelector(".choosepc");
var images = document.querySelectorAll(".image");
var btnplay = document.querySelector(".btnplay");
var playagain = document.querySelector(".playagain");
var btns = document.querySelectorAll(".btn");
var paper = document.getElementById("paper");
var rock = document.querySelector("#rock");
var scissors = document.querySelector("#scissors");
var intropage = document.querySelector("#intropage");
var resultpage = document.querySelector(".resultpage");
var statusfinal = document.querySelector("#statusfinal");
var vs = document.querySelector("#vs");
var gamepage = document.querySelector("#gamepage");
var header = document.querySelector("#header");
var reset = document.querySelector("#reset");
var timer = document.querySelector(".time");
var user = document.querySelector(".user");
var pc = document.querySelector(".pc");
var message = document.querySelector(".status");
var messageresult = document.querySelector(".result");
var choose = ["PAPER", "ROCK", "SCISSORS"];
var sumScoreOfUser = 0;
var sumScorePc = 0;
var finalresult = 0;
// set timer:
var setIntervaltimer = function (time) {
    var tick = function () {
        var min = String(Math.floor(time / 60)).padStart(2);
        var sec = String(Math.floor(time % 60)).padStart(2);
        if (time === 1) {
            clearInterval(timedown);
            result(sumScoreOfUser, sumScorePc);
            messageresult.textContent = sumScoreOfUser !== sumScorePc ? (sumScoreOfUser > sumScorePc ? "YOU WON ! 🎉" : "COMPUTER WON ! 🎉") : "TIE!!!!";
            intropage.style.display = "none";
            resultpage.style.display = "flex";
            gamepage.style.display = "none";
            sumScoreOfUser = 0;
            sumScorePc = 0;
            user.textContent = "0";
            pc.textContent = "0";
            // ........................................................ displa result page
        }
        timer.textContent = "".concat(min, ":").concat(sec);
        --time;
    };
    tick();
    var timedown = setInterval(tick, 1000);
};
// sum of socer:
user.textContent = String(sumScoreOfUser);
pc.textContent = String(sumScorePc);
// choose pc:
var choosebypc = function () {
    var randomnum = Math.trunc(Math.random() * 3);
    choosepcimage.src = "pic/".concat(choose[randomnum], ".svg");
    if (container.classList.contains("DarkThemeHomeScreen")) {
        choosepcimage.src = "pic/".concat(choose[randomnum], "-w.png");
    }
    return choose[randomnum];
};
// calc result:
var result = function (chooseOfUser, chooseOfPc) {
    message.style.opacity = "1";
    if (chooseOfPc === chooseOfUser) {
        message.textContent = "TIE!";
    }
    else if ((chooseOfPc === "ROCK" && chooseOfUser === "SCISSORS") ||
        chooseOfPc > chooseOfUser) {
        message.textContent = "COMPUTER WON ! 🎉";
        return sumScorePc++;
    }
    else if (chooseOfPc === "SCISSORS" && chooseOfUser === "PAPER") {
        message.textContent = "COMPUTER WON ! 🎉";
        return sumScorePc++;
    }
    else if (chooseOfPc === "PAPER" && chooseOfUser === "ROCK") {
        message.textContent = "COMPUTER WON ! 🎉";
        return sumScorePc++;
    }
    else {
        message.textContent = "YOU WON ! 🎉";
        return sumScoreOfUser++;
    }
};
buttons === null || buttons === void 0 ? void 0 : buttons.addEventListener("click", function (e) {
    e.preventDefault();
    var element = e.target;
    choosepcimage.classList.remove("rotateImg");
    chooseuserimage.classList.remove("rotateImg");
    chooseuserimage.src = "pic/".concat(element.textContent, ".svg");
    if (container.classList.contains("DarkThemeHomeScreen")) {
        chooseuserimage.src = "pic/".concat(element.textContent, "-w.png");
    }
    var chooseOfUser = element.textContent;
    var chooseOfPc = choosebypc();
    result(chooseOfUser, chooseOfPc);
    user.textContent = String(sumScoreOfUser);
    pc.textContent = String(sumScorePc);
});
// reset game:
reset === null || reset === void 0 ? void 0 : reset.addEventListener("click", function () {
    user.textContent = "0";
    pc.textContent = "0";
    sumScoreOfUser = 0;
    sumScorePc = 0;
    chooseuserimage.src = "pic/all.png";
    choosepcimage.src = "pic/all.png";
    choosepcimage.classList.add("rotateImg");
    chooseuserimage.classList.add("rotateImg");
    message.style.opacity = "0";
});
// play button click to start
playagain.addEventListener("click", function (e) {
    gamepage.style.display = "block";
    setIntervaltimer(3);

    resultpage.style.display = "none";
});
btnplay.addEventListener("click", function (e) {
    e.preventDefault();
    message.style.opacity = "0";
    intropage.style.display = "none";
    gamepage.style.display = "block";
    setIntervaltimer(10);
    chooseuserimage.src = "pic/all.png";
    choosepcimage.src = "pic/all.png";
    choosepcimage.classList.toggle("rotateImg");
    chooseuserimage.classList.toggle("rotateImg");
});
//swich to darkrmode
darkmode.addEventListener("click", function () {
    darkmode.src.includes("moon")
        ? (darkmode.src = "pic/sun-ww.png")
        : (darkmode.src = "pic/moon.svg");
    container.classList.toggle("DarkThemeHomeScreen");
});
