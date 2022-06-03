export default class Header {
  constructor($el) {
    this.$el = $el;

    this.init();
  }

  init() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll() {
    if (window.scrollY) {
      this.$el.classList.add('fixed');
    } else {
      this.$el.classList.remove('fixed');
    }
  }
}

let header = null;
const $el = document.querySelector('.header');

if ($el) {
  header = new Header($el);
}

export { header };
