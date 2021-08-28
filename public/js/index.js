function navButtonClick() {
  let x = document.getElementById("mobilenavigation");
  console.log(x);
  if (x.style.top === "") {
    x.style.top = "80px";
  } else {
    x.style.top = "";
  }
}

// function changeNavbarBackground() {
//   let ele = document.getElementById("navbg");
//   //console.log(ele);
//   if (
//     document.body.scrollTop > 100 ||
//     document.documentElement.scrollTop > 100
//   ) {
//     ele.style.background =
//       "radial-gradient(97.57% 210.75% at 0.9% 2.98%,rgba(255,255,255,0.8)0%,rgba(255,255,255,0.6)100%)";
//   } else {
//     ele.style.background = "white";
//   }
// }
function start() {
  let card1 = document.getElementById("cardanimation");
  let card2 = document.getElementById("cardanimation2");
  let card3 = document.getElementById("cardanimation3");

  card1.style.animation = "cardcycle 1s 1s";
  card2.style.animation = "cardcycle 1s 2s";
  card3.style.animation = "cardcycle 1s 3s";
}

function testimonialcardAnimation() {
  setInterval(start);
}
