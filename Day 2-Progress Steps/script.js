const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentACtive = 1;

next.addEventListener("click", () => {
  currentACtive++;
  if (currentACtive > circles.length) {
    currentACtive = circles.length;
  }
  Update();
});

prev.addEventListener("click", () => {
  currentACtive--;
  if (currentACtive < 1) {
    currentACtive = 1;
  }
  Update();
});

function Update() {
  circles.forEach((circle, index) => {
    if (index < currentACtive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentACtive === 1) {
    prev.disabled = true;
  } else if (currentACtive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
