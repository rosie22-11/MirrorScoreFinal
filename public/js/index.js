// navbarToggle

function navButtonClick() {
  let x = document.getElementById("mobilenavigation");
  // let i = document.querySelector("#togglebtn > i");
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

//Desktopdoubtstepanimation

window.onscroll = function () {
  DoubtStepsAnimation();
};

window.onscroll = function () {
  MobileDoubtStepsAnimation();
};
function DoubtStepsAnimation() {
  let elmone = document.querySelector("#doubt-box-one");
  let elmtwo = document.querySelector("#doubt-box-two");
  let elmthree = document.querySelector("#doubt-box-three");
  //console.log(elmone);
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

//mobiledoubtstepanimation
let d1 = document.getElementById("mobile-doubt-box-one");
let d2 = document.getElementById("mobile-doubt-box-two");
let d3 = document.getElementById("mobile-doubt-box-three");
function MobileDoubtStepsAnimation() {
  setTimeout(function () {
    d1.style.display = "flex";
    d1.style.animation = "fadeIn ease 8s";
  }, 0);
  setTimeout(function () {
    d1.style.display = "none";
    d2.style.display = "flex";
    d2.style.animation = "fadeIn ease 8s";
  }, 4000);
  setTimeout(function () {
    d2.style.display = "none";
    d3.style.display = "flex";
    d3.style.animation = "fadeIn ease 6s";
  }, 8000);
}

setInterval(function () {
  d3.style.display = "none";
  MobileDoubtStepsAnimation();
}, 12000);

// $("#doubt-steps-video").click(function () {
//   if (this.paused) this.play();
//   else this.pause();
// });

// $("#mobile-doubtsection > div:gt(0)").hide();

// setInterval(function () {
//   $("#mobile-doubtsection > div:first")
//     .fadeOut(3000)
//     .next()
//     .fadeIn(1000)
//     .end()
//     .appendTo("#mobile-doubtsection");
// }, 4000);

// testimonial animation

let test1 = document.getElementById("testimonial1");
let test2 = document.getElementById("testimonial2");
let test3 = document.getElementById("testimonial3");

function card1() {
  test1.classList.remove("hidden");
  test2.classList.add("hidden");
  test3.classList.add("hidden");
}

function card2() {
  test1.classList.add("hidden");
  test2.classList.remove("hidden");
  test3.classList.add("hidden");
}

function card3() {
  test1.classList.add("hidden");
  test2.classList.add("hidden");
  test3.classList.remove("hidden");
}

function testimonialcardautoclick() {
  setTimeout(function () {
    //card1();
    document.querySelector("#testimonial-1").click();
  }, 0);

  setTimeout(function () {
    document.querySelector("#testimonial-2").click();
    //card2();
  }, 4000);

  setTimeout(function () {
    document.querySelector("#testimonial-3").click();
    //card3();
  }, 8000);
}
testimonialcardautoclick();

setInterval(function () {
  testimonialcardautoclick();
}, 12000);

//desktoptestimonialanimation

function desktopcard1() {
  let name = document.getElementById("testimonial-reviewname");
  let comment = document.getElementById("testimonial-reviewcontent");

  name.innerHTML = "Anamika";
  comment.innerHTML =
    "Mock tests on Toppr helped me develop my exam strategy. I was able to focus on my shortcomings and improve them! Mock tests on Toppr helped me develop my exam strategy. I was able to focus on my shortcomings and improve them!";
}

function desktopcard2() {
  let name = document.getElementById("testimonial-reviewname");
  let comment = document.getElementById("testimonial-reviewcontent");

  name.innerHTML = "Radhika";
  comment.innerHTML =
    "I was able to focus on my shortcomings and improve them! Mock tests on Toppr helped me develop my exam strategy. I was able to focus on my shortcomings and improve them!";
}

function desktopcard3() {
  let name = document.getElementById("testimonial-reviewname");
  let comment = document.getElementById("testimonial-reviewcontent");

  name.innerHTML = "Sonam";
  comment.innerHTML =
    "I was able to focus on my shortcomings and improve them! Mock tests on Toppr helped me develop my exam strategy. I was able to focus on my shortc";
}

function desktophovercard1() {
  let name = document.getElementById("testimonial-reviewname");
  let comment = document.getElementById("testimonial-reviewcontent");

  name.innerHTML = "Anamika";
  comment.innerHTML =
    "Mock tests on Toppr helped me develop my exam strategy. I was able to focus on my shortcomings and improve them! Mock tests on Toppr helped me develop my exam strategy. I was able to focus on my shortcomings and improve them!";
}

function desktophovercard2() {
  let name = document.getElementById("testimonial-reviewname");
  let comment = document.getElementById("testimonial-reviewcontent");

  name.innerHTML = "Radhika";
  comment.innerHTML =
    "I was able to focus on my shortcomings and improve them! Mock tests on Toppr helped me develop my exam strategy. I was able to focus on my shortcomings and improve them!";
}

function desktophovercard3() {
  let name = document.getElementById("testimonial-reviewname");
  let comment = document.getElementById("testimonial-reviewcontent");

  name.innerHTML = "Sonam";
  comment.innerHTML =
    "I was able to focus on my shortcomings and improve them! Mock tests on Toppr helped me develop my exam strategy. I was able to focus on my shortc";
}
