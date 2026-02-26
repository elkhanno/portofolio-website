const body = document.body;
const toggleDesktop = document.getElementById("themeToggle");
const toggleMobile = document.getElementById("themeToggleMobile");

function toggleTheme() {
    body.classList.toggle("dark");
    localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
}

toggleDesktop?.addEventListener("click", toggleTheme);
toggleMobile?.addEventListener("click", toggleTheme);

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
}

// Typing enggine
const texts = [
  "Web Developer",
  "Informatics Student",
  "Frontend Enthusiast"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => erase(), 1500);
  } else {
    setTimeout(type, 100);
  }
}

function erase() {
  letter = currentText.slice(0, --index);
  document.getElementById("typing").textContent = letter;

  if (letter.length === 0) {
    count++;
    setTimeout(type, 400);
  } else {
    setTimeout(erase, 60);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

//buat deteksi scroll
let lastScroll = 0;
const scrollText = document.getElementById("scrollText");

window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
        // Scroll ke bawah → italic kanan
        scrollText.classList.add("scroll-italic-right");
        scrollText.classList.remove("scroll-italic-left");
    } 
    else if (currentScroll < lastScroll) {
        // Scroll ke atas → italic kiri
        scrollText.classList.add("scroll-italic-left");
        scrollText.classList.remove("scroll-italic-right");
    }

    lastScroll = currentScroll;

    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
        scrollText.classList.remove("scroll-italic-right");
        scrollText.classList.remove("scroll-italic-left");
    }, 120);
});