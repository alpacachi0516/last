const swiper = new Swiper('.carousel', {
    loop: true,
    speed: 1000,
        autoplay: {
            delay: 1000,
        },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination'
    }
})