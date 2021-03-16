window.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.header-nav'),
  navbarItem = document.querySelectorAll('.nav-item'),
  hamburger = document.querySelector('.header-burger'),

  toggleBurger = () => {
    hamburger.classList.toggle('burger-active');
    navbar.classList.toggle('nav-active');
  };

  hamburger.addEventListener('click', () => {
      toggleBurger();
  });

  navbarItem.forEach(item => {
      item.addEventListener('click', () => {
        toggleBurger();
      })
  })
})