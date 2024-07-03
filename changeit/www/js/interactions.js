document.addEventListener('DOMContentLoaded', function () {
    const likeIcons = document.querySelectorAll('.like-icon');
    const markIcons = document.querySelectorAll('.mark-icon')
    
    likeIcons.forEach(function(icon) {
        icon.addEventListener('click', function () {
            this.classList.toggle('liked');
        });
    });
    markIcons.forEach(function(icon) {
        icon.addEventListener('click', function () {
            this.classList.toggle('marked');
        });
    });
});