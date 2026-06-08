// Cursor Animation
const cur = document.getElementById('cursor');
const cring = document.getElementById('cring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;
});

(function animateCursor() {
  cur.style.left = mx + 'px';
  cur.style.top = my + 'px';
  rx += (mx - rx) * 0.1;
  ry += (my - ry) * 0.1;
  cring.style.left = rx + 'px';
  cring.style.top = ry + 'px';
  requestAnimationFrame(animateCursor);
})();

// Hover effect on cursor
document.querySelectorAll('a, button').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cur.style.width = '18px';
    cur.style.height = '18px';
  });
  el.addEventListener('mouseleave', () => {
    cur.style.width = '10px';
    cur.style.height = '10px';
  });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});

// Reveal Animation on Scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Modal Functions
function openZeninModal() {
  document.getElementById('zeninModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeZeninModal() {
  document.getElementById('zeninModal').style.display = 'none';
  document.body.style.overflow = '';
}

function openThesisModal() {
  document.getElementById('thesisModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeThesisModal() {
  document.getElementById('thesisModal').style.display = 'none';
  document.body.style.overflow = '';
}

// Close modals when clicking outside
document.getElementById('zeninModal')?.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeZeninModal();
});

document.getElementById('thesisModal')?.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeThesisModal();
});