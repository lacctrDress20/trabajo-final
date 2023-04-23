window.onscroll = () => {
let header = document.querySelector('.header');

header.classList.toggle('Sticky', window.scrollY > 100);
};