import '../scss/style.scss';

import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);


const slider = document.querySelector('.swiper-container');

let mySwiper;

function mobileSlider() {

    'use strict';

   if (window.innerWidth < 768 && slider.dataset.mobile === 'false' && mySwiper === undefined) {
        mySwiper = new Swiper('.swiper-container', {
            width: 240,
            slidesPerView: 'auto',
            slideToClickedSlide: true,
            centeredSlides: true,
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
        slider.dataset.mobile = 'true';
    } else if(window.innerWidth >= 768 && mySwiper !== undefined) {
        slider.dataset.mobile = 'false';
        for (let i = 0; i < mySwiper.length; i++) {
          mySwiper[i].destroy();
        }
        mySwiper = undefined;
    }
}

mobileSlider();

window.addEventListener('resize', function() {
    mobileSlider();
});

