console.log("hello")

/* window.location = $(".services__card").data("https://r6.tracker.network/profile/pc/T3ST-WideBoy"); */

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click',mobileMenu);
