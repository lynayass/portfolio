// Toggle FR/EN
const langBtn = document.getElementById('lang-btn');
let lang = 'fr';
function setTexts(language){
  document.querySelectorAll('[data-fr]').forEach(el=>{
    el.textContent = el.getAttribute(`data-${language}`);
  });
}
setTexts(lang);
langBtn.addEventListener('click', ()=>{
  lang = lang === 'fr' ? 'en' : 'fr';
  langBtn.textContent = lang === 'fr' ? 'EN' : 'FR';
  setTexts(lang);
});

