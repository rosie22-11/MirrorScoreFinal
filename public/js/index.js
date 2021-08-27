function navButtonClick() {
  let x = document.getElementById("mobilenavigation");
  console.log(x);
  if (x.style.top === "") {
    x.style.top = "80px";
  } else {
    x.style.top = "";
  }
}

function changeNavbarBackground() {
  let ele = document.getElementById("navbg");
  //console.log(ele);
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    ele.style.background =
      "radial-gradient(97.57% 210.75% at 0.9% 2.98%,rgba(255,255,255,0.8)0%,rgba(255,255,255,0.6)100%)";
  } else {
    ele.style.background = "white";
  }
}
