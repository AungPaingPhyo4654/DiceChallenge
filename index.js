var ran1 =Math.floor(Math.random()*6)+1;
var ran2 =Math.floor(Math.random()*6)+1;
document.querySelector(".dice-img1").setAttribute("src","images/dice"+ran1+".png");
document.querySelector(".dice-img2").setAttribute("src","images/dice"+ran2+".png");
if (ran1>ran2){
  document.querySelector(".instruction").innerHTML="🏁 Player 1 Win!!"
} else if (ran2 > ran1){
  document.querySelector(".instruction").innerHTML="Player 2 Win!! 🏁"
} else {
  document.querySelector(".instruction").innerHTML="🏁 Draw! 🏁"
}
