let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}


var swiper = new Swiper(".popular-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: false,
  autoplay:{
    delay: 4500,
    disableOnInteraction: true,
  },
  pagination:{
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  breakpoints: {
    // when window width is >= 468px
    468: {
        slidesPerView: 2,
    },
    // when window width is >= 991px
    991: {
        slidesPerView: 3,
    }
  },
});