const clicker = document.querySelector('.clicker');
const navBar = document.querySelector('.nav-links');

clicker.addEventListener('click', () => {
    navBar.classList.toggle('hidden');
})