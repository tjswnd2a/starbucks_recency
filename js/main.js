const searchEl = document.querySelector(".search");
const search_inputEl = searchEl.querySelector(".search_text");

searchEl.addEventListener('click', function(){
  search_inputEl.focus();
});

search_inputEl.addEventListener('focus', function() {
  search_inputEl.classList.add('focus');
  search_inputEl.setAttribute('placeholder', '통합검색');
});

search_inputEl.addEventListener('blur', function() {
  search_inputEl.classList.remove('focus');
  search_inputEl.setAttribute('placeholder','');
});

const arrow_toggleBtn = document.querySelector('.arrow_toggle');
const arrow_downEl = document.querySelector('.arrow_toggle .arrow_circle_down');
const arrow_upEl = document.querySelector('.arrow_toggle .arrow_circle_up');

const promotionEl = document.querySelector(".promotion");
let HidePromotion = false;

arrow_toggleBtn.addEventListener('click', function(){
  console.log('aaaaa');
  HidePromotion = !HidePromotion;
  if( HidePromotion === true ){
    arrow_downEl.classList.add('invisible');
    arrow_upEl.classList.remove('invisible');
    promotionEl.classList.add('visible');
  }else{
    arrow_upEl.classList.add('invisible');
    arrow_downEl.classList.remove('invisible');
    promotionEl.classList.remove('visible');

  }
})