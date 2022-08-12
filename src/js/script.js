let elY = 0;
let scrollY = 0;
window.addEventListener("scroll", function() {
    const el = document.querySelector('.navbar');
    const height = el.offsetHeight;
    const pos = window.pageYOffset;
    const diff = scrollY - pos;
    let elem = document.documentElement.clientHeight;

    if (document.documentElement.clientWidth >= 769 || window.pageYOffset >= 200) {
    elY = Math.min(0, Math.max(-height, elY + diff));
    el.style.position = pos >= height ? 'fixed' : pos === 0 ? 'absolute' : el.style.position;
    el.style.transform = `translateY(${el.style.position === 'fixed' ? elY : 0}px)`;
    el.style.transition = `0.3s ease-in-out`;

    scrollY = pos;
    }
});


const reorder = document.querySelector('.hamburger-menu');
const remove = document.querySelector('.remove_icon');
const mobMenu = document.querySelector('#mobMenu')

reorder.addEventListener('click', ()=>{
    mobMenu.classList.add('open');
    if (mobMenu.classList.contains('remove')){
        mobMenu.classList.remove('remove');
    }
})

remove.addEventListener('click', ()=>{
    mobMenu.classList.add('remove');
    if (mobMenu.classList.contains('open')){
        mobMenu.classList.remove('open');
    }
})