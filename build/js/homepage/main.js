const burgerToggle = document.querySelector('.burger-toggle');
const sidebarMenu = document.querySelector('.sidebar-menu');
const links = document.querySelectorAll('.sidebar-link');
const overlay = document.querySelector('.overlay'); 

function closeMenu() {
    sidebarMenu.classList.remove('is-active');
    overlay.classList.remove('is-active');
    burgerToggle.textContent = '☰';
}

function openMenu() {
    sidebarMenu.classList.add('is-active');
    overlay.classList.add('is-active');
    burgerToggle.textContent = '✕';
}

links.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  })
})

burgerToggle.addEventListener('click', () => {
    if (sidebarMenu.classList.contains('is-active')) {
        closeMenu();
    } else {
        openMenu();
    }
});

overlay.addEventListener('click', () => {
    closeMenu();
});

