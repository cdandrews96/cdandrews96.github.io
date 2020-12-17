const menuButton = document.querySelector('.ham');
const mainNav = document.querySelector('.nav')

menuButton.addEventListener('click', () => {mainNav.classList.toggle('responsive')}, false);