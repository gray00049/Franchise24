document.addEventListener('DOMContentLoaded', () => {
  // Плавное появление элементов
  let headerBlock = document.querySelector('.header__view');
  headerBlock.addEventListener('click', toggleHeader);

  let steps = document.querySelectorAll('.fade-anim');
  for (let step of steps) {
    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        }
      });
    });

    observer.observe(step);
  }


  // Управление модалкой
  let modalTrigger = document.querySelectorAll('.modal-trigger');

  for(let btn of modalTrigger) {
    btn.addEventListener('click', toggleModal)
  }

  
  // Маска для номера телефона
  let phoneInputs = document.querySelectorAll('#phone');

  let phoneSettings = {
      mask: '+7 (000) 000-00-00',
      lazy: false
  } 

  for (let input of phoneInputs) {
    new IMask(input, phoneSettings);
  }


  // Маска для email
  let emailInputs = document.querySelectorAll('#email');

  let emailSettings = {    
    mask:function (value) {
      if(/^[a-z0-9_\.-]+$/.test(value))
          return true;
      if(/^[a-z0-9_\.-]+@$/.test(value))
          return true;
      if(/^[a-z0-9_\.-]+@[a-z0-9-]+$/.test(value))
          return true;
      if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.$/.test(value))
          return true;
      if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(value))
          return true;
      if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/.test(value))
          return true;
      if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/.test(value))
          return true;
      return false;
    },
    lazy: false
  } 

  for (let input of emailInputs) {
    new IMask(input, emailSettings);
  }
});


// Функция открытия меню
function toggleHeader() {
  document.querySelector('.header').classList.toggle('open');
}


// Функция вызова модального окна
function toggleModal() {
  document.querySelector('.modal').classList.toggle('open');
}


// Настройка слайдера
new Glider(document.querySelector('.slider__inner'), {
  slidesToShow: 2,
  slidesToScroll: 1,
  draggable: true,
  arrows: {
    prev: '#prev-slide-1',
    next: '#next-slide-1'
  },
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 450,
      settings: {
        arrows: {
          prev: '#prev-slide-1-2',
          next: '#next-slide-1-2'
        },
      }
    }
  ]
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