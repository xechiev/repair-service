import '../scss/style.scss';

import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);

'use strict';
const slider = document.querySelector('.swiper-container');
let mySwiper;

// const btn = document.querySelector('.brand-button');

function mobileSlider() {
    if(window.innerWidth < 768 && slider.dataset.mobile === 'false') {
        mySwiper = new Swiper(slider, {
            slidesPerView: '1',
            centeredSlides: true,
            // width: 240,
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

openMenu('.header__button-icon--burger', '.container__sidebar');
openMenu('.footer__button-icon--call', '.container__modal-call');
openMenu('.footer__button-icon--chat', '.container__modal-feedback');
openMenu('.header__button-icon--chat', '.container__modal-feedback');
openMenu('.header__button-icon--call', '.container__modal-call');

closeMenu('.header__button-icon-burger', '.container__sidebar');
closeMenu('.sidebar-container__fog', '.container__sidebar');

closeMenu('.modal-feedback__button', '.container__modal-feedback');
closeMenu('.modal-feedback__fog', '.container__modal-feedback');

closeMenu('.modal-call__button', '.container__modal-call');
closeMenu('.modal-call__fog', '.container__modal-call');

function openMenu(selectorButton, selectorMenu) {
  let selectorMenuActive = selectorMenu.trim() + '-active';
  selectorMenuActive = selectorMenuActive.slice(1);
  document.querySelector(selectorButton).addEventListener('click', function (evnt) {
    evnt.preventDefault();
    document.querySelector(selectorMenu).classList.add(selectorMenuActive);
    document.querySelector('body').classList.add('body-active');
  })
}

function closeMenu(selectorButton, selectorMenu) {
  let selectorMenuActive = selectorMenu.trim() + '-active';
  selectorMenuActive = selectorMenuActive.slice(1);
  document.querySelector(selectorButton).addEventListener('click', function (evnt) {
    evnt.preventDefault();
    document.querySelector(selectorMenu).classList.remove(selectorMenuActive);
    document.querySelector('body').classList.remove('body-active');
  })
}