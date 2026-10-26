(() => {
  const root = document.documentElement;
  const body = document.body;
  const switcher = document.getElementById('languageSwitch');
  let lang = 'fa';

  function setLanguage(next) {
    lang = next;
    const isEnglish = lang === 'en';
    root.lang = isEnglish ? 'en' : 'fa';
    root.dir = isEnglish ? 'ltr' : 'rtl';
    body.dir = root.dir;
    document.title = isEnglish
      ? 'Hormoz Saffron | Aria Hormoz Mehr — Iranian Heritage, Global Horizons'
      : 'هرمز زعفران | آریا هرمز مهر — اصالت ایرانی، افق جهانی';
    document.querySelectorAll('[data-fa][data-en]').forEach(el => {
      el.innerHTML = isEnglish ? el.dataset.en : el.dataset.fa;
    });
    if (switcher) {
      switcher.innerHTML = isEnglish ? 'فا <span class="arrow-mark" aria-hidden="true"></span>' : 'EN <span class="arrow-mark" aria-hidden="true"></span>';
      switcher.setAttribute('aria-label', isEnglish ? 'تغییر زبان به فارسی' : 'Switch language to English');
    }
  }
  if (switcher) switcher.addEventListener('click', () => setLanguage(lang === 'fa' ? 'en' : 'fa'));
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    revealEls.forEach(el => observer.observe(el));
  } else revealEls.forEach(el => el.classList.add('is-visible'));
  document.getElementById('year').textContent = new Date().getFullYear();
  setLanguage('fa');
})();