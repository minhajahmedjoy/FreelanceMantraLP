const scrollButton = document.querySelector(".scroll-button");
scrollButton.classList.remove("scroll-button")
scrollButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    scrollButton.classList.add("scroll-button");
    scrollButton.style.opacity = 1;
  } else {
    scrollButton.classList.remove("scroll-button");
  }
}