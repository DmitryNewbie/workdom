"use strict";

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать, 
код с решением задачи пишем под комментарием.
*/

/*
1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс
"super-dropdown", необходимо использовать методы forEach, querySelectorAll и
свойство classList у элементов.
*/
const dropdownElm = document.querySelectorAll(".dropdown-item");
dropdownElm.forEach(elm => {
  elm.classList.add("super-dropdown")
  console.log(elm);
});

/*
2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он
присутствует у этого элемента, либо добавить, если такого класса у элемента
не было.
*/
const btnElm = document.querySelectorAll(".btn");
btnElm.forEach(element => {
  if(element.classList.contains(".btn-secondary")){
    element.classList.remove(".btn-secondary");
  }else{
    element.classList.add(".btn-secondary")
  }
  console.log(element);
});

/*
3. Необходимо удалить класс "dropdown-menu" у элемента, у которого
присутствует класс "menu".
*/
const menuElm = document.querySelector(".menu");
menuElm.classList.contains(".dropdown-menu");
menuElm.classList.remove(".dropdown-menu");
console.log(menuElm);
/*
4. Используя метод insertAdjacentHTML добавьте после div'a с классом
"dropdown" следующую разметку:
  <a href="#">link</a>
*/
const divELm = document.querySelector("div.dropdown");
divELm.insertAdjacentHTML('afterend', '<a href="#">link</a>');
/*
5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
*/
const dropMBElm = document.querySelector('#dropdownMenuButton').id = "superDropdown";
console.log(dropMBElm);
/*
6. Добавьте атрибут data-dd со значением 3 элементу у которого существует
атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
*/

/*
7. Удалите атрибут type у элемента с классом "dropdown-toggle".
*/
