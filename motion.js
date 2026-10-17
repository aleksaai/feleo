/* Slow, weighted desktop scrolling; native touch and reduced-motion fallback. */
(() => {
  const root = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = matchMedia('(min-width: 701px) and (pointer: fine)');
  const header = document.querySelector('.nav-wrap');
  const hero = document.querySelector('.hero');
  const scene = document.querySelector('.conversation-section');
  const navLinks = [...document.querySelectorAll('.nav-links a')];
  const navGroup = document.querySelector('.nav-links');
  const dialog = document.querySelector('#contact');
  let lenis = null;
  let frame = 0;
  let observer = null;
  let sceneVisible = false;
  let heroVisible = true;
  let currentLink = null;
  const clamp = (n, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, n));

  function indicator(link) {
    if (!link || innerWidth <= 700) {
      navGroup.style.setProperty('--indicator-opacity', '0');
      return;
    }
    navGroup.style.setProperty('--indicator-x', `${link.offsetLeft}px`);
    navGroup.style.setProperty('--indicator-width', `${link.offsetWidth}px`);
    navGroup.style.setProperty('--indicator-opacity', '1');
  }
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => indicator(link));
    link.addEventListener('focus', () => indicator(link));
  });
  navGroup.addEventListener('mouseleave', () => indicator(currentLink));
  navGroup.addEventListener('focusout', e => {
    if (!navGroup.contains(e.relatedTarget)) indicator(currentLink);
  });
  const sections = navLinks.map(link => ({link, section:document.querySelector(link.hash)}));
  function paint() {
    frame = 0;
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 80);
    if (!reduce.matches && desktop.matches) {
      if (heroVisible) root.style.setProperty('--hero-progress', clamp(y / hero.offsetHeight).toFixed(4));
      if (sceneVisible) {
        const rect = scene.getBoundingClientRect();
        scene.style.setProperty('--scene-progress', clamp((innerHeight - rect.top) / (innerHeight + rect.height)).toFixed(4));
      }
    }
    let active = null;
    sections.forEach(({link, section}) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= innerHeight * .38 && rect.bottom > 120) active = link;
    });
    if (active !== currentLink) {
      currentLink = active;
      navLinks.forEach(link => active === link ? link.setAttribute('aria-current','location') : link.removeAttribute('aria-current'));
      if (!navGroup.matches(':hover') && !navGroup.contains(document.activeElement)) indicator(active);
    }
  }
  function schedule() { if (!frame) frame = requestAnimationFrame(paint); }
  function setupMotion() {
    lenis?.destroy(); lenis = null;
    observer?.disconnect();
    document.querySelectorAll('.reveal-pending').forEach(el => el.classList.remove('reveal-pending'));
    root.style.setProperty('--hero-progress','0');
    scene.style.setProperty('--scene-progress','0');
    root.classList.toggle('motion-enabled', !reduce.matches);
    if (!reduce.matches && desktop.matches && window.Lenis) {
      lenis = new Lenis({autoRaf:true,lerp:.065,smoothWheel:true,wheelMultiplier:.85,syncTouch:false,anchors:true,prevent:node=>node.closest?.('[data-lenis-prevent]')});
      root.dataset.scrollEngine = 'lenis';
      if (dialog.open) lenis.stop();
    } else root.dataset.scrollEngine = 'native';
    if (!reduce.matches && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending');
          observer.unobserve(entry.target);
        }
      }), {threshold:.06,rootMargin:'0px 0px -35px 0px'});
      document.querySelectorAll('.intro .section-label,.intro-copy,.capabilities article,.convo-copy,.conversation-stage,.approach-heading,.steps li,.faq>div,.closing h2,.closing>.button').forEach((el,i) => {
        el.dataset.reveal = '';
        el.style.setProperty('--reveal-delay',`${el.matches('.capabilities article') ? (i % 3)*70 : 0}ms`);
        if (el.getBoundingClientRect().top > innerHeight) el.classList.add('reveal-pending');
        observer.observe(el);
      });
    }
    schedule();
  }
  if ('IntersectionObserver' in window) {
    const visibility = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.target === hero) heroVisible = entry.isIntersecting;
      if (entry.target === scene) sceneVisible = entry.isIntersecting;
      schedule();
    }), {rootMargin:'100px'});
    visibility.observe(hero); visibility.observe(scene);
  }
  new MutationObserver(() => {
    if (dialog.open) lenis?.stop(); else lenis?.start();
  }).observe(dialog,{attributes:true,attributeFilter:['open']});
  document.addEventListener('visibilitychange',()=>{
    if (document.hidden) lenis?.stop(); else if (!dialog.open) {lenis?.start();schedule();}
  });
  window.addEventListener('scroll',schedule,{passive:true});
  window.addEventListener('resize',()=>{schedule();indicator(currentLink)},{passive:true});
  reduce.addEventListener('change',setupMotion);
  desktop.addEventListener('change',setupMotion);
  setupMotion();
})();
