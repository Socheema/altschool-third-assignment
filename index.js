const openMenu = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-xmark");
  const menu = document.querySelector("nav")


  function triggerAnimation() {
    menu.classList.add('slide-in-animation');
  }
  

openMenu.addEventListener("click", () => {
  menu.style.display = "block";
    triggerAnimation();
  openMenu.classList.toggle("close")
    closeMenu.classList.toggle("close")
});



closeMenu.addEventListener("click", () => {
    menu.style.display = "none";
    closeMenu.classList.toggle("close")
    openMenu.classList.toggle("close")
    

})