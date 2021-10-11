'use strict'

const accordionClickables = document.querySelectorAll('.accordion__clickable');

accordionClickables.forEach((clickable) => {
   clickable.addEventListener('click', () => {
      let parentElementClasses = clickable.parentElement.classList;
      if (parentElementClasses.contains('active')) {
         closeAllAccordionItems();
      } else {
         closeAllAccordionItems();
         parentElementClasses.add('active');
         clickable.setAttribute('aria-expanded', 'true');
      }
   });
});


function closeAllAccordionItems() {
   accordionClickables.forEach((clickable) => {
      clickable.parentElement.classList.remove('active');
      clickable.setAttribute('aria-expanded', 'false');
   });
}