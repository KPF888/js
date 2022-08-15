window.addEventListener('DOMContentLoaded', function () {
    (function () {
        var swiper = new Swiper(".mySwiper", {
            pagination: {
                el: ".swiper-pagination",
            },
            autoplay: true,
            delay: 2000,
            loop: true,
        });
    })()
})