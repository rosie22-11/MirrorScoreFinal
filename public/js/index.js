// $("#togglebtn").click(function () {
//   alert("alert");
//   $("#mobilenavigation").css("background", "yellow");
// });

// $(document).ready(function () {
//   $(".barbtn").click(function () {
//     $("#mobilenavigation").css("top", "80px");
//     // alert("jij");
//   });
// });

// function togglebar() {
//   var togglebtn = document.getElementById("togglebtn");
//   var toggle = true;
//
//   if (!toggle) {
//     togglebtn.innerHTML =
//       " <i class='fa fa-bars fa-2x' aria-hidden='true'></i>";
//     document.getElementById("mobilenavigation").style.top = "-100%";
//   } else {
//     togglebtn.innerHTML =
//       " <i class='fas fa-times fa-2x' aria-hidden='true'></i> ";
//     document.getElementById("mobilenavigation").style.top = "80px";
//   }
// }

// $("#togglebtn").toggle(function () {
//   console.log("object");
// });
function navButtonClick() {
  // let opened = 0;
  // if (opened == 0) {
  //     $(".mobilenavbar").css("top", "80px");
  //     console.log('opend', opened)
  //     opened = 1;
  //     return 0;
  // }
  // if (opened == 1) {
  //     $(".mobilenavbar").css("top", "-100%");
  //     console.log('closed', opened)
  //     opened = 0;
  //     return 0
  // }
  let x = document.getElementById("mobilenavigation");
  console.log(x);
  if (x.style.top === "") {
    x.style.top = "80px";
  } else {
    x.style.top = "";
  }
}
