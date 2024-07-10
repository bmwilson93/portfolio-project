let contactButton = document.querySelector('.contact');

var scrollFunc = () => {
  var y = window.scrollY;
  if (y >= 800) {
    contactButton.classList.add('contact-scrolled')
  } else {
    contactButton.classList.remove('contact-scrolled');
  }
}

window.addEventListener('scroll', scrollFunc);