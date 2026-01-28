document.addEventListener('DOMContentLoaded', () => {
    
    const swiper = new Swiper(".mySwiper", {
        loop: true,
        speed: 1000, 
        autoplay: {
            delay: 2500,            
            disableOnInteraction: false, 
            pauseOnMouseEnter: true,    
        },

        slidesPerView: 1,
        centeredSlides: true,
        grabCursor: true,

        breakpoints: {
            1024: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });

});