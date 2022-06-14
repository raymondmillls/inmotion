const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')
const menuButton = document.querySelector('.menuButton')
const menuClose = document.querySelector('.menuClose')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
    menuButton.classList.toggle('invisible')
    menuClose.classList.toggle('visible')
})

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav-menu");

function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        // add menu icon
        toggle.innerHTML = `<i class="fas fa-bars">`;
    }
    else {
        menu.classList.add("active");

        // add x (close menu) icon
        toggle.innerHTML = `<i class="fas fa-times"></i>`;
    }
}

toggle.addEventListener("click", toggleMenu, false);
