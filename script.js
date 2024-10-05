// Open and Close Navbar
document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  document.querySelector(".navbar").classList.add("change"); // Apply class to .navbar
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  document.querySelector(".navbar").classList.remove("change"); // Remove class from .navbar
});

// Change background colors of nav links
const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

// Toggle the "change" class on buttons
Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change"); // Adjust this depending on the HTML structure
  };
});
