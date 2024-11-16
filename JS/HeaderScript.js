const header = document.querySelector('header');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        square.classList.add('header-transition');
        return;
      }
  
      square.classList.remove('header-transition');
    });
  });
  
  observer.observe(document.querySelector('header'));