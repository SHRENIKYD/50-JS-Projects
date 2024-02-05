const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const message = ["Message One", "Message Two", "Message Three", "Message Four"];

button.addEventListener("click", () =>
  createNotification("This is invalid data", "error")
);

function createNotification(message = null, type = null) {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : "info");

  notif.innerText = message ? message : getrandomMessage();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 1000);
}

function getrandomMessage() {
  return message[Math.floor(Math.random() * message.length)];
}
