const toggle = document.querySelector('.toggle-btn')
const menu = document.querySelector('.nav-menu')

toggle.addEventListener('click', ()=>{
    toggle.classList.toggle('active')
    menu.classList.toggle('active')
})



const swiper = new Swiper('.charcter-slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next-character',
      prevEl: '.swiper-button-prev-character',
    },
  });