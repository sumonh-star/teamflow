"use-strict";

// ====back-to-top=====
const backToTop = document.querySelector('[data-back-to-top]');

const scroll = function(){
    if(this.scrollY >= 200){
        backToTop.classList.add('enable');
    }
    else{
        backToTop.classList.remove('enable');
    };
};
window.addEventListener('scroll', scroll);

// ====small-device-side-menu=====
const openBtn = document.querySelector('[data-open-btn]'),
      closeBtn = document.querySelector('[data-close-btn]'),
      navMenu = document.querySelector('[data-nav-menu]'),
      modalOverlay = document.querySelector('[data-modal-overlay]'),
      Link = document.querySelectorAll('[data-link]');

      for(let i = 0; i < Link.length; i++){
        const close = function(){
          modalOverlay.classList.remove('active');
          navMenu.classList.remove('active');
        };
        openBtn.addEventListener('click', function(){
          navMenu.classList.add('active');
          modalOverlay.classList.add('active');
        });
        closeBtn.addEventListener('click', close);
        modalOverlay.addEventListener('click', close);
        Link[i].addEventListener('click', close);
      };

// ====small-device-sub-link=====
const openLink = document.querySelectorAll('[data-open-link]'),
      closeLink = document.querySelectorAll('[data-close-link]');

      for(let i = 0; i < closeLink.length; i++){
        openLink[i].addEventListener('click', function(){
          openLink[i].classList.toggle('active');
          closeLink[i].classList.toggle('active');
        });
      };