const container = document.querySelector(".container") as HTMLDivElement;
const soccer = document.querySelector("#soccer") as HTMLDivElement;
const buttons = document.querySelector("#buttons") as HTMLDivElement;
const darkmode = document.querySelector(".darkmode") as HTMLImageElement;
const chooseuserimage = document.querySelector(
  ".chooseuser"
) as HTMLImageElement;
const choosepcimage = document.querySelector(".choosepc") as HTMLImageElement;
const images = document.querySelectorAll(".image") as NodeList;
const btnplay = document.querySelector(".btnplay") as HTMLButtonElement;
const playagain = document.querySelector(".playagain") as HTMLButtonElement;
const btns = document.querySelectorAll(".btn") as NodeList;
const paper = document.getElementById("paper")! as HTMLButtonElement;
const rock = document.querySelector("#rock") as HTMLButtonElement;
const scissors = document.querySelector("#scissors") as HTMLButtonElement;
const intropage = document.querySelector("#intropage") as HTMLElement;
const resultpage = document.querySelector(".resultpage") as HTMLElement;
const statusfinal = document.querySelector("#statusfinal") as HTMLElement;
const vs = document.querySelector("#vs") as HTMLElement;
const gamepage = document.querySelector("#gamepage") as HTMLElement;
const header = document.querySelector("#header") as HTMLElement;
const reset = document.querySelector("#reset") as HTMLDivElement;
const timer = document.querySelector(".time") as HTMLElement;
const user = document.querySelector(".user") as HTMLElement;
const pc = document.querySelector(".pc") as HTMLElement;
const message = document.querySelector(".status") as HTMLElement;
const messageresult = document.querySelector(".result") as HTMLElement;
const choose: string[] = ["PAPER", "ROCK", "SCISSORS"];
let sumScoreOfUser: number = 0;
let sumScorePc: number = 0;
let finalresult: number = 0;
// set timer:
const setIntervaltimer = function (time: number) {
  const tick = function () {
    const min = String(Math.floor(time / 60)).padStart(2);
    const sec = String(Math.floor(time % 60)).padStart(2);
    if (time === 1) {
      clearInterval(timedown);
      result(sumScoreOfUser, sumScorePc);
      messageresult.textContent = sumScoreOfUser!==sumScorePc?(sumScoreOfUser > sumScorePc ? "YOU WON ! 🎉" : "COMPUTER WON ! 🎉"):"TIE!!!!"

      intropage.style.display = "none";
      resultpage.style.display = "flex";
      gamepage.style.display = "none";
      sumScoreOfUser = 0;
      sumScorePc = 0;
      user.textContent = "0";
      pc.textContent = "0";

      // ........................................................ displa result page
    }
    timer.textContent = `${min}:${sec}`;
    --time;
  };
  tick();
  const timedown = setInterval(tick, 1000);
};

// sum of socer:
user.textContent = String(sumScoreOfUser);
pc.textContent = String(sumScorePc);
// choose pc:
const choosebypc = () => {
  const randomnum: number = Math.trunc(Math.random() * 3);
  choosepcimage.src = `pic/${choose[randomnum]}.svg`;

  if (container.classList.contains("DarkThemeHomeScreen")) {
    choosepcimage.src = `pic/${choose[randomnum]}-w.png`;
  }
  return choose[randomnum];
};
// calc result:
const result = (chooseOfUser: string | number, chooseOfPc: string | number) => {
  message.style.opacity = "1";
  if (chooseOfPc === chooseOfUser) {
    message.textContent = `TIE!`;
  } else if (
    (chooseOfPc === "ROCK" && chooseOfUser === "SCISSORS") ||
    chooseOfPc > chooseOfUser
  ) {
    message.textContent = "COMPUTER WON ! 🎉";
    return sumScorePc++;
  } else if (chooseOfPc === "SCISSORS" && chooseOfUser === "PAPER") {
    message.textContent = "COMPUTER WON ! 🎉";
    return sumScorePc++;
  } else if (chooseOfPc === "PAPER" && chooseOfUser === "ROCK") {
    message.textContent = "COMPUTER WON ! 🎉";
    return sumScorePc++;
  } else {
    message.textContent = "YOU WON ! 🎉";
    return sumScoreOfUser++;
  }
};

buttons?.addEventListener("click", (e) => {
  e.preventDefault();
  const element = e.target as HTMLButtonElement;
  choosepcimage.classList.remove("rotateImg");
  chooseuserimage.classList.remove("rotateImg");
  chooseuserimage.src = `pic/${element.textContent}.svg`;
  if (container.classList.contains("DarkThemeHomeScreen")) {
    chooseuserimage.src = `pic/${element.textContent}-w.png`;
  }

  const chooseOfUser: string = element.textContent as string;
  const chooseOfPc = choosebypc();
  result(chooseOfUser, chooseOfPc);

  user.textContent = String(sumScoreOfUser);
  pc.textContent = String(sumScorePc);
});
// reset game:
reset?.addEventListener("click", () => {
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
playagain.addEventListener("click", (e) => {
  gamepage.style.display = "none";
  resultpage.style.display = "none";
  intropage.style.display = "block";
});
btnplay.addEventListener("click", (e) => {
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
darkmode.addEventListener("click", () => {
  darkmode.src.includes("moon")
    ? (darkmode.src = "pic/sun-ww.png")
    : (darkmode.src = "pic/moon.svg");
  container.classList.toggle("DarkThemeHomeScreen");
});
