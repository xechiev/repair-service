import '../scss/style.scss';

'use strict';
const slider = document.querySelector('.swiper-container');
let mySwiper;

const btn = document.querySelector('.brand-button');

function mobileSlider() {
    if(window.innerWidth < 768 && slider.dataset.mobile === 'false') {
        mySwiper = new Swiper(slider, {
            slidesPerView: 'auto',
            centeredSlides: true,
            width: 240,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            }
        });
        slider.dataset.mobile = 'true';
    }
    if(window.innerWidth >= 768 && window.innerWidth <= 1119) {
        slider.dataset.mobile = 'false';

        if(slider.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
        }
        
    }
}
mobileSlider();

window.addEventListener('resize', function() {
    mobileSlider();
});
