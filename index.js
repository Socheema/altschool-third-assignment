const openMenu = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-xmark");
  const menu = document.querySelector("nav")
  const header = document.querySelector("#header")


  function triggerAnimation() {
    menu.classList.add('slide-in-animation');
  }
  

openMenu.addEventListener("click", () => {
  menu.style.display = "block";
  openMenu.classList.toggle("close")
  header.style.backgroundColor = "#1179bf"
    closeMenu.classList.add("active")
    console.log(closeMenu)
});



closeMenu.addEventListener("click", () => {
    menu.style.display = "none";
    header.style.backgroundColor = ""
    closeMenu.classList.toggle("active")
    openMenu.classList.toggle("close")
    

})