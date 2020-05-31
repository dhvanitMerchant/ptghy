(function navSmoothScrolling() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    for (let i in internalLinks) {
      if (internalLinks.hasOwnProperty(i)) {
        internalLinks[i].addEventListener('click', e => {
          e.preventDefault();
          document.querySelector(internalLinks[i].hash).scrollIntoView({
            block: 'start',
            behavior: 'smooth'
          });
        });
      }
    }
  })();
