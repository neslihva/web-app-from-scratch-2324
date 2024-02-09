fetch('me.json').then(function (response) {
    return response.json();
}).then(function (obj) {
    console.log(obj);
}).catch(function (error) {
    console.error('Something went wrong with retrieving me!');
    console.error(error);
});

let swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });