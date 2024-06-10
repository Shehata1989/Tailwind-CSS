let barToggle = document.getElementById("bar-toggle");
let linksUl = document.getElementsByClassName("links")[0];

linksUl.addEventListener("click", function (e) {
  e.stopPropagation();
});

barToggle.addEventListener("click", function (e) {
  e.stopPropagation();
  linksUl.classList.toggle("open");
});

document.addEventListener("click", function (e) {
  if (e.target !== linksUl && e.target !== barToggle) {
    linksUl.classList.remove("open");
  }
});
