const nav = document.getElementById("bar");
const close = document.querySelector(".main");
const menu = document.querySelector(".menu");
const medBar = document.querySelector(".medbar");

nav.addEventListener("click", function men (){
    menu.style.display = "block";
});
close.addEventListener("click", function cls (){
    menu.style.display = "none"
});
nav.addEventListener("click", function men (){
    medBar.style.width = "100%";
});
close.addEventListener("click", function cls (){
    medBar.style.width = "40%";
});