import '../scss/style.scss';

import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);

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
    if(window.innerWidth >= 768 && mySwiper !== undefined) {
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
