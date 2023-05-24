document.addEventListener('DOMContentLoaded', () => {
  /* Accordion */
  const accordionHead = document.querySelectorAll('.accordion__head'),
    accordionBody = document.querySelectorAll('.accordion__list');

  const accordion = (control, content) => {
    for (let i = 0; control.length > i; ++i) {
      control[i].addEventListener('click', () => {
        if (control[i].classList.contains('open')) {
          control[i].classList.remove('open');
          control[i].setAttribute('aria-expended', false);
          content[i].style.maxHeight = null;
          content[i].style.opacity = null;
          content[i].style.padding = '0 10px';
          content[i].setAttribute('aria-hidden', true);
          return;
        }
        for (let i = 0; control.length > i; ++i) {
          control[i].classList.remove('open');
          control[i].setAttribute('aria-expended', false);
          for (let i = 0; content.length > i; ++i) {
            content[i].style.maxHeight = null;
            content[i].style.opacity = null;
            content[i].style.padding = '0 10px';
            content[i].setAttribute('aria-hidden', true);
          }
        }
        control[i].classList.add('open');
        control[i].setAttribute('aria-expended', true);
        content[i].style.maxHeight = content[i].scrollHeight + 'px';
        content[i].style.opacity = '1';
        content[i].style.padding = '6px 10px';
        content[i].setAttribute('aria-hidden', false);
      });

      /* Клик вне элемента */
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.accordion-wrapper__items')) {
          control[i].classList.remove('open');
          control[i].setAttribute('aria-expended', false);
          content[i].style.maxHeight = null;
          content[i].style.opacity = null;
          content[i].style.padding = '0 10px';
          content[i].setAttribute('aria-hidden', true);
        }
      });
    }
  };
  accordion(accordionHead, accordionBody);

  /* Filter */
});