document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');
  
    for (const link of links) {
      link.addEventListener('click', smoothScroll);
    }
  
    function smoothScroll(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      if (targetElement) {
        const offsetTop = targetElement.getBoundingClientRect().top;
        const headerOffset = 50; 
        window.scrollBy({
          top: offsetTop - headerOffset,
          behavior: 'smooth'
        });
      }
    }
  });
  