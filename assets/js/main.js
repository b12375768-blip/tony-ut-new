// Local Culture & Travel — shared site behaviour

// Mobile nav toggle
const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');
if(navToggle && navMenu){
  navToggle.addEventListener('click', ()=>{
    navMenu.classList.toggle('open');
    navMenu.style.display = navMenu.classList.contains('open') ? 'flex' : '';
  })
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href && href.startsWith('#')){
      const el = document.querySelector(href);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    }
  })
})

// Contact form
const form = document.querySelector('#contact-form');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    alert(`Thanks ${data.name || 'traveller'}! We'll reply to ${data.email || 'your inbox'} soon.`);
    form.reset();
  });
}

// Travel notice popup — shows on index page on EVERY load/refresh.
(function(){
  const path = window.location.pathname;
  const isHome = /(^\/$|index\.html$)/.test(path);
  if(!isHome) return;

  const bd = document.createElement('div');
  bd.className = 'modal-backdrop';
  bd.setAttribute('role', 'dialog');
  bd.setAttribute('aria-modal', 'true');
  bd.setAttribute('aria-labelledby', 'travel-notice-title');
  bd.innerHTML = `
    <div class="modal">
      <span class="badge">Local Culture &amp; Travel</span>
      <h3 id="travel-notice-title" style="margin:12px 0 8px">Travel Notice</h3>
      <p>Welcome to Local Culture &amp; Travel. We celebrate the food, festivals, crafts and everyday rituals of the places we visit — and we always ask local communities before sharing their stories.</p>
      <p style="opacity:.8;font-size:14px">This notice appears on every visit to the home page.</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:6px">
        <a class="btn" href="services.html">Explore Journeys</a>
        <button class="btn ghost" id="notice-close" type="button">Close</button>
      </div>
    </div>`;
  document.body.appendChild(bd);
  bd.style.display = 'flex';

  function closeNotice(){ bd.style.display = 'none'; bd.remove(); }
  bd.querySelector('#notice-close').addEventListener('click', closeNotice);
  bd.addEventListener('click', (e)=>{ if(e.target === bd) closeNotice(); });
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeNotice(); });
  bd.querySelector('#notice-close').focus();
})();
