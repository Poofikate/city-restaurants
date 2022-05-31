const $body = document.querySelector('body');
const $burger = document.querySelector('.js-burger');
const $headerMenu = document.querySelector('.js-header__menu');
const $navLink = document.querySelectorAll('.header-nav__link');

const switchHeaderMenu = function () {
  $headerMenu.classList.toggle('active');
  $burger.classList.toggle('active');
  $body.style.overflowY = 'hidden';
};

const closeHeaderMenu = function () {
  $headerMenu.classList.remove('active');
  $burger.classList.remove('active');
  $body.style.overflowY = '';
};

$burger.addEventListener('click', function () {
  switchHeaderMenu();

  if ($headerMenu.classList.contains('active')) {
    // закрытие меню по клику на пунк меню
    $navLink.forEach((item) => {
      item.addEventListener('click', function () {
        closeHeaderMenu();
      });
    });

    // закрытие меню по клику на подложку
    $headerMenu.addEventListener('click', function (event) {
      if (event.target === $headerMenu) {
        closeHeaderMenu();
      }
    });

    // закрытие меню по нажатию клавиши ESC
    document.addEventListener('keydown', function (event) {
      if (event.code === 27 || event.code === 'Escape') {
        closeHeaderMenu();
      }
    });
  }
});
