

/* ============= Light/dark toggle  ============= */

const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
});


/* ============= Animate accordion  ============= */

document.querySelectorAll('.project__accordion').forEach(details => {
  const summary = details.querySelector('summary');
  const content = details.querySelector('.project__detail');

  // Set initial max-height for CSS transition
  content.style.maxHeight = '0';
  content.style.overflow = 'hidden';
  content.style.transition = 'max-height 350ms ease';

  summary.addEventListener('click', e => {
    if (e.target.closest('a')) return;

    e.preventDefault();

    if (details.open) {
      // Close
      content.style.maxHeight = '0';

      content.addEventListener('transitionend', () => {
        details.removeAttribute('open');
      }, { once: true });
    } else {
      details.setAttribute('open', '');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});


/* ============= Header shadow  ============= */

const siteHeader = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  siteHeader.classList.toggle('site-header--scrolled', window.scrollY >= 50);
}, { passive: true });


/* ============= Footer copy year  ============= */

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}


/*=============== Scroll animations ===============*/
/* Animates elements when scrolled into viewport */
document.addEventListener("DOMContentLoaded", function () {
    const animationClasses = ["slide-up", "slide-down", "slide-left", "slide-right", "fade-in", "pulse"];
    const selector = animationClasses.map(c => `.${c}`).join(", ");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const match = animationClasses.find(c => entry.target.classList.contains(c));
            if (match) {
                entry.target.classList.add(`${match}-animation`);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(selector).forEach(el => observer.observe(el));
});