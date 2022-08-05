document.addEventListener('DOMContentLoaded', () => {
  let headerBlock = document.querySelector('.header__view');
  headerBlock.addEventListener('click', toggleHeader);
});


// Function to show|hide header menu
function toggleHeader() {
  document.querySelector('.header').classList.toggle('open');
}

new Glider(document.querySelector('.slider__inner'), {
  slidesToShow: 3,
  slidesToScroll: 1,
  draggable: true,
  arrows: {
    prev: '#prev-slide-1',
    next: '#next-slide-1'
  }
});

new Glider(document.querySelector('.feedback-slider'), {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  arrows: {
    prev: '#prev-slide-2',
    next: '#next-slide-2'
  }
});