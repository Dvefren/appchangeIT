document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".class-container");
    const buttons = Array.from(container.children);
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;
    let autoSlideInterval;

    // Clone buttons for infinite effect
    buttons.forEach(button => {
        const clone = button.cloneNode(true);
        container.appendChild(clone);
    });

    container.addEventListener("mousedown", startDrag);
    container.addEventListener("mousemove", dragging);
    container.addEventListener("mouseup", endDrag);
    container.addEventListener("mouseleave", endDrag);
    container.addEventListener("touchstart", startDrag);
    container.addEventListener("touchmove", dragging);
    container.addEventListener("touchend", endDrag);

    function startDrag(event) {
        isDragging = true;
        startPos = getPositionX(event);
        cancelAnimationFrame(animationID);
        clearInterval(autoSlideInterval);
    }

    function dragging(event) {
        if (isDragging) {
            const currentPosition = getPositionX(event);
            currentTranslate = prevTranslate + currentPosition - startPos;
            setSliderPosition();
        }
    }

    function endDrag() {
        isDragging = false;
        prevTranslate = currentTranslate;
        startAutoSlide();
    }

    function getPositionX(event) {
        return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
    }

    function animation() {
        setSliderPosition();
        if (isDragging) requestAnimationFrame(animation);
    }

    function setSliderPosition() {
        container.style.transform = `translateX(${currentTranslate}px)`;
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            currentTranslate -= 1;
            if (Math.abs(currentTranslate) >= container.scrollWidth / 2) {
                currentTranslate = 0;
                prevTranslate = 0;
            }
            setSliderPosition();
        }, 10);
    }

    startAutoSlide();
});
