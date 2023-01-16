// Now active menu button using javascript
var hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("active")
})