const nav = document.getElementById("nav");
const liens = document.getElementById("liens");
const liens1 = document.getElementById("liens1");
const liens2 = document.getElementById("liens2");
const liens3 = document.getElementById("liens3");
const liens4 = document.getElementById("liens4");
const head = document.getElementById("head");

const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    console.log("ok");
    nav.style.backgroundColor = "#fff7d6";
    liens.style.color = "#164e63";
    liens1.style.color = "#164e63";
    liens2.style.color = "#164e63";
    liens3.style.color = "#164e63";
    liens4.style.color = "#164e63";
    liens5.style.color = "#164e63";
    liens6.style.color = "#164e63";
    liens.classList.add("color");
    liens1.classList.add("color");
    liens2.classList.add("color");
    liens3.classList.add("color");
    menu.style.backgroundColor = "#fff7d6";
    head.classList.add("animate");
    head.classList.remove("animate2");
  } else if (window.scrollY < 70) {
    nav.style.backgroundColor = "#164e63";
    liens.style.color = "#fff7d6";
    liens1.style.color = "#fff7d6";
    liens2.style.color = "#fff7d6";
    liens3.style.color = "#fff7d6";
    liens4.style.color = "#fff7d6";
    liens5.style.color = "#fff7d6";
    liens6.style.color = "#fff7d6";
    liens.classList.remove("color");
    liens1.classList.remove("color");
    liens2.classList.remove("color");
    liens3.classList.remove("color");
    menu.style.backgroundColor = "#164e63";
    head.classList.remove("animate");
    head.classList.add("animate2");
  }
});

function checkEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  let email = document.getElementById("email").value;
  let error = document.getElementById("error");

  if (checkEmail(email)) {
    console.log("ok");
    error.style.display = "none";
  } else {
    error.style.display = "block";
    console.log("not ok");
  }
  return false;
}
function claim() {
  validate();
}

menu.style.visibility = "hidden";

burger.addEventListener("click", () => {
  if (menu.style.visibility == "hidden") {
    menu.style.visibility = "visible";
    console.log("ok");
  } else {
    menu.style.visibility = "hidden";
  }
});
