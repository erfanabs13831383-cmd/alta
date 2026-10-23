const langSwitch=document.getElementById('langSwitch');
const menuToggle=document.getElementById('menuToggle');
const nav=document.getElementById('mainNav');
let currentLang='fa';
function setLanguage(lang){
  currentLang=lang;
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==='fa'?'rtl':'ltr';
  document.querySelectorAll('[data-fa][data-en]').forEach(el=>{
    el.innerHTML=el.dataset[lang];
  });
  langSwitch.textContent=lang==='fa'?'EN':'FA';
  document.title=lang==='fa'?'آریا هرمز مهر | زعفران ایرانی برای جهان':'Aria Hormuz Mehr | Persian Saffron for the World';
  nav.classList.remove('open');
}
langSwitch.addEventListener('click',()=>setLanguage(currentLang==='fa'?'en':'fa'));
menuToggle.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
