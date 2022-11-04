const menuBtn = document.querySelector('.bugger');
const topNav = document.querySelector('.jsNav');


menuBtn.addEventListener('click',()=>{
topNav.classList.add('left');
topNav.classList.toggle('display');
});