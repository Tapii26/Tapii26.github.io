
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const headernav = document.querySelector('.header-nav');
  
    // Abrir/cerrar el menú al hacer clic en el ícono de hamburguesa
    hamburger.addEventListener('click', function (event) {
      hamburger.classList.toggle('svg-active');
      headernav.classList.toggle('active');
    });
  
    // Cerrar el menú al hacer clic fuera
    document.addEventListener('click', function (event) {
      if (headernav.classList.contains('active') && !event.target.closest('.header-nav') && !event.target.closest('.hamburger')) {
        headernav.classList.remove('active');
      }
      if (hamburger.classList.contains('svg-active') && !event.target.closest('.hamburger') && !event.target.closest('.hamburger')) {
        hamburger.classList.remove('svg-active');
      }
    });
});