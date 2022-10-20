const toggle = document.querySelector('.toggle-btn')
const menu = document.querySelector('.nav-menu')

toggle.addEventListener('click', () => {
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
})
gsap.from(".nav-logo", {duration: 1, scale: 0, opacity: 0})
gsap.from('.nav-item', { duration: 0.5, y: '-30px', stagger: 0.4, opacity: 0, delay: 0.2})
gsap.from(".nav-right", {duration: 1, x: "100px", opacity: 0, delay: 0.4})
gsap.from('.header .future-reports', { duration: 1, y: '80px', opacity: 0, delay: 1 })
gsap.from('.header-title', { duration: 1, y: '80px', opacity: 0, delay: 1.2 })
gsap.from('.header-text', { duration: 1, y: '80px', opacity: 0, delay: 1.4 })
gsap.from('.header-buttons', { duration: 0.5, y: '100px', stagger: 0.4, opacity: 0, delay: 1.8 })
gsap.from('.header-img', { duration: 0.5, y: '500px', stagger: 0.4, opacity: 0, rotate: "720deg", delay: 2 })
