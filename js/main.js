const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const logomobile = document.querySelector(".logo-mobile");
const logo = document.querySelector("#logo");
 
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<span class='material-icons'>menu</span>";
    } else {
        menu.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<span class='material-icons'>close</span>";
    }
    if (logomobile.classList.contains("active")) {
        logomobile.classList.remove("active");
        logomobile.classList.add("disactive");
    } else {
        logomobile.classList.add("active");
        logomobile.classList.remove("disactive");
    }
    //Re-add logo here
    if (logo.classList.contains("active")) {
        logo.classList.add("active");
        logo.classList.remove("disactive");
        
    } else {
        logo.classList.remove("active");
        logo.classList.add("disactive");
    }
}
 
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);