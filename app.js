const nav = document.getElementById("nav");
const liens = document.getElementById("liens");
const liens1 = document.getElementById("liens1");
const liens2 = document.getElementById("liens2");
const liens3 = document.getElementById("liens3");
const head = document.getElementById("head");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    console.log("ok");
    nav.style.backgroundColor = "#fff7d6";
    liens.style.color = "#164e63";
    liens1.style.color = "#164e63";
    liens2.style.color = "#164e63";
    liens3.style.color = "#164e63";
    liens.classList.add("color");
    liens1.classList.add("color");
    liens2.classList.add("color");
    liens3.classList.add("color");
    head.classList.add("animate");
    head.classList.remove("animate2");
  } else if (window.scrollY < 70) {
    nav.style.backgroundColor = "#164e63";
    liens.style.color = "#fff7d6";
    liens1.style.color = "#fff7d6";
    liens2.style.color = "#fff7d6";
    liens3.style.color = "#fff7d6";
    liens.classList.remove("color");
    liens1.classList.remove("color");
    liens2.classList.remove("color");
    liens3.classList.remove("color");
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
