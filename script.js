const close = document.querySelector('.close');
const nav = document.querySelector('.place');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');

close.addEventListener('click', () => {
  nav.classList.add('hide');
});

hamburger.addEventListener('click', () => {
  nav.classList.remove('hide');
});

Array.from(navLinks).forEach((navlink) => navlink.addEventListener('click', () => {
  nav.classList.add('hide');
}));
// const hamburger=document.querySelector('.hamburger');
// const bar1=document.querySelector('.bar1');
// const bar1=document.querySelector('.bar2');
// const bar1=document.querySelector('.bar3');

// hamburger.addEventListener('click',getCross);

// function getCross(e){
//   if(bar2.style.width !== '0px') {
//     bar1.style.transform = 'rotate(-45deg)';
//     bar3.style.transform = 'rotate(45deg)';
//   }
// }