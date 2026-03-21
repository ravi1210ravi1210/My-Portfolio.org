const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const allLinks = document.querySelectorAll(".nav-links a");


menuToggle.onclick = function () {
  navLinks.classList.toggle("active");
};


allLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
  });
});



const roles = ["Developer ", "UI/UX Designer ", "Freelancer "];
let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;

function type() {
  currentRole = roles[i];

  if (isDeleting) {
    document.getElementById("role").textContent =
      currentRole.substring(0, j--);
  } else {
    document.getElementById("role").textContent =
      currentRole.substring(0, j++);
  }

  if (!isDeleting && j === currentRole.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector("input").value;

  alert("Hello " + name + ", form submitted!")

  form.reset();
});