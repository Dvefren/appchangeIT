let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    var footer = document.querySelector('.footer');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Al hacer scroll hacia abajo
        footer.style.transform = 'translateX(-50%) translateY(100%)';
        footer.style.opacity = '0';
    } else {
        // Al hacer scroll hacia arriba
        footer.style.transform = 'translateX(-50%) translateY(0)';
        footer.style.opacity = '1';
    }
    lastScrollTop = scrollTop;
});