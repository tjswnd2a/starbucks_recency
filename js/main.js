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