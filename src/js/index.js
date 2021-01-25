import '../scss/style.scss';
import Swiper, {Navigation, Pagination} from 'swiper';
Swiper.use([Navigation, Pagination]);

'use strict';

const slider = document.querySelector('.swiper-container');

// const modalcall = document.querySelectorAll('.footer__button-icon--call, .header__button-icon--call, .modal-call__button, .modal-call__fog');
// const modalfeedback = document.querySelectorAll('.footer__button-icon--chat, .header__button-icon--chat, .modal-feedback__button, .modal-feedback__fog');
// const burger= document.querySelector('.header__button-icon--burger');
// const sidebar = document.querySelector('.sidebar__wrapper');


let mySwiper;

function mobileSlider() {
    

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

// function showBlock() {
//     if (sidebar.style.display == 'block') { 
//     sidebar.style.display = "none";
//   }
//   else {
//     sidebar.style.display = "block";
// }
 
// }

// burger.addEventListener('click', function () {
//     showBlock();
// })
openMenu('.header__button-icon--burger', '.sidebar__wrapper');
openMenu('.footer__button-icon--call', '.container__modal-call');
openMenu('.footer__button-icon--chat', '.container__modal-feedback');
openMenu('.header__button-icon--chat', '.container__modal-feedback');
openMenu('.header__button-icon--call', '.container__modal-call');

closeMenu('.header__button-icon-burger', '.sidebar__wrapper');
closeMenu('.sidebar-container__fog', '.sidebar__wrapper');

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
  })}