//adding CV, hiding on click
document.getElementById("buttonCV").onclick = function () {
  document.getElementById("cvImage").style.visibility = "visible";
};
document.getElementById("cvImage").onclick = function () {
  document.getElementById("cvImage").style.visibility = "hidden";
};
