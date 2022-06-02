const $btn = document.querySelector('.js-charity__read-more');
const $content = document.querySelector('.js-charity__hidden');

$btn.addEventListener('click', btnClick);

function btnClick() {
  if ($content.classList.contains('is-hidden')) {
    $btn.textContent = 'Скрыть';
  } else {
    $btn.textContent = 'Читать далее';
  }

  $content.classList.toggle('is-hidden');
}
