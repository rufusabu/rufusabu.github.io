// Scroll to top button only appear after scrolling down
const scrollUpBtn = document.querySelector(".top-button");

window.addEventListener("scroll", event => {
  if (window.scrollY > 200) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
});

//Smooth Scrolling
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
}
