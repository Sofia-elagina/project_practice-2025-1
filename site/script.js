document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-list a');
  const sections = document.querySelectorAll('section');

  function onScroll() {
    const scrollPos = window.scrollY + 100;
    sections.forEach((section) => {
      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        links.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href').slice(1) === section.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', onScroll);
});
