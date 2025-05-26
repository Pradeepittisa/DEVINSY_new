 const carousel = document.querySelector('#productCarousel');
  const bsCarousel = new bootstrap.Carousel(carousel, {
    interval: 3000,
    ride: 'carousel',
    touch: true, // explicitly enable touch
    pause: false
  });