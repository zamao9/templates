document.addEventListener('DOMContentLoaded', () => {
  /* Accordion */
  const accordionHead = document.querySelectorAll('.accordion__head'),
    accordionBody = document.querySelectorAll('.accordion__list');

  /* Клик по accordion открывает, закрывает его, а также клик по следующему закрывает предыдущий */
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

      /* Клик вне accordion-wrapper закрывает accordion */
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

  /* Select */

  const sel = document.querySelectorAll('.select');

  /* Перебор для нескольких селектов в форме */
  sel.forEach((el) => {
    const selectArrow = el.querySelector('.select__arrow'),
      selectHead = el.querySelector('.select__head'),
      selectList = el.querySelector('.select__list'),
      selectItems = selectList.querySelectorAll('.select__items'),
      selectInput = el.querySelector('.select__input');
    /* Клик на button открывает и закрывает select */
    const select = () => {
      selectHead.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('active');
        e.currentTarget.setAttribute('aria-expanded', false);
        selectArrow.classList.toggle('active');
        selectList.classList.toggle('active');
        selectList.setAttribute('aria-hidden', true);

        if (selectHead.classList.contains('active')) {
          selectList.setAttribute('aria-hidden', false);
          e.currentTarget.setAttribute('aria-expanded', true);
        }
      });

      /* Клик по любому selectItems закрыват select и передает данные */
      selectItems.forEach((el) => {
        el.addEventListener('click', () => {
          selectHead.classList.remove('active');
          selectList.classList.remove('active');
          selectArrow.classList.remove('active');
          selectHead.innerText = el.innerText; //меняет текст в шапке
          selectInput.value = el.dataset.value; //отправляет текст в input
        });
      });

      /* Кликаю вне select закрывает его */
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.select')) {
          selectHead.classList.remove('active');
          selectList.classList.remove('active');
          selectArrow.classList.remove('active');
        }
      });
    };
    select();
  });
});