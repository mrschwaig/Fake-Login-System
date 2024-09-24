let logOutBtn = document.getElementById("logOutBtn");
let welcomeUser = document.getElementById("userName");
let userName = localStorage.getItem("userName");

welcomeUser.innerHTML = "Willkommen " + userName;

logOutBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});
