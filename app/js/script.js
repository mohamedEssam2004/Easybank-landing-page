
const btnHamburger = document.getElementById('btnHamburger'); 
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElemns = document.querySelectorAll('.has-fade');

header.addEventListener('click', function(){
    if(header.classList.contains('open')){
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElemns.forEach((el) => {
            el.classList.remove('fade-in');
            el.classList.add('fade-out');
        })
    } else {
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElemns.forEach((el) => {
            el.classList.remove('fade-out');
            el.classList.add('fade-in');
        });
    };
});