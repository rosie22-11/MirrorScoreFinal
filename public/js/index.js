function navButtonClick() {
  let x = document.getElementById("mobilenavigation");
  // let i = document.querySelector("#togglebtn > i");
  let i = document.getElementById("togglebtn");
  console.log(x);
  console.log(i);
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
window.onscroll = function () {
  DoubtStepsAnimation();
};
function DoubtStepsAnimation() {
  let elmone = document.querySelector("#doubt-box-one");
  let elmtwo = document.querySelector("#doubt-box-two");
  let elmthree = document.querySelector("#doubt-box-three");
  // console.log(elmone)
  setTimeout(function () {
    elmthree.classList.remove("doubt-box-blacked");
    elmtwo.classList.remove("doubt-box-blacked");
    elmone.classList.add("doubt-box-blacked");
  }, 1000);
  setTimeout(function () {
    elmone.classList.remove("doubt-box-blacked");
    elmthree.classList.remove("doubt-box-blacked");
    elmtwo.classList.add("doubt-box-blacked");
  }, 5250);
  setTimeout(function () {
    elmone.classList.remove("doubt-box-blacked");
    elmtwo.classList.remove("doubt-box-blacked");
    elmthree.classList.add("doubt-box-blacked");
  }, 8750);
}

setInterval(function () {
  // $("#doubt-steps-video").play()
  DoubtStepsAnimation();
}, 12000);

// setInterval(DoubtStepsAnimation(), 5500)

$("#doubt-steps-video").click(function () {
  if (this.paused) this.play();
  else this.pause();
});

//testimonial

// function start() {
//   let card1 = document.getElementById("cardanimation");
//   let card2 = document.getElementById("cardanimation2");
//   let card3 = document.getElementById("cardanimation3");

//   card1.style.animation = "cardcycle 1s 1s";
//   card2.style.animation = "cardcycle 1s 2s";
//   card3.style.animation = "cardcycle 1s 3s";
// }

// function testimonialcardAnimation() {
//   setInterval(start);
// }

$("#mobile-doubtsection > div:gt(0)").hide();

setInterval(function () {
  $("#mobile-doubtsection > div:first")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo("#mobile-doubtsection");
}, 4000);
