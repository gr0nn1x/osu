const leftlowest = 200;
const lefthighest = 1700;
const toplowest = 200;
const tophighest = 800;
const Circle1 = document.getElementById("circle");
const score = document.getElementById("score");
const remainingTime = document.getElementById("remainingTime");
const audio = document.getElementById("audio");
const audio2 = document.getElementById("audio2");
let time = 3;




let score1 = 0;
let firstclick = false;
Circle1.onclick = () => {
  if (firstclick == false) {
    audio.play();
    myInterval = setInterval(() => {
      firstclick = true;
      time -= 1;
      remainingTime.innerHTML = `${time}`;

      if (time <= 0) {
        clearInterval(myInterval);
        Circle1.style.display = "none";
        score2.innerHTML = `Prohrál jsi Score: ${score1} `;
        remainingTime.style.display = "none";  
        audio.pause();
        audio2.play();
        document.body.style.backgroundImage = "url('../osu/res/img/deathimage.jpg')";
        document.body.style.backgroundRepeat ="no-repeat";  
        document.body.style.backgroundColor ="black";
      }

      console.log(time);
    }, 1000);
  }
  
  time += 1;
  score1 += 1;
  score.innerHTML = score1;
  score2.innerHTML = score1;
  let rdnumberleft = Math.random() * (lefthighest - leftlowest) + leftlowest;
  let rdnumbertop = Math.random() * (tophighest - toplowest) + toplowest;
  Circle1.style.left = rdnumberleft + "px";
  Circle1.style.top = rdnumbertop + "px";
  remainingTime.innerHTML = `${time}`;
  if (time <= 0) {
    lose();
  }
};
