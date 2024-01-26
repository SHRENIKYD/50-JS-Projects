const labels = document.querySelectorAll(".form-control label");

labels.forEach((labels) => {
  labels.innerHTML = labels.innerText
    .split("")
    .map(
      (letter, index) => `<span 
      style = "transition-delay:${index * 40}ms">
    ${letter}</span>`
    )
    .join("");
});
