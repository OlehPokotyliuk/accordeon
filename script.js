document.addEventListener("DOMContentLoaded", function (event) {


    const accordeon = document.querySelectorAll('.accordeon');
    const allitems = document.querySelector('.allitems');
    const link = document.querySelectorAll('.link');
    const item = document.querySelectorAll('.accordeon-item');
    const img = document.querySelectorAll('.accordeon-item__img');


    img[0].classList.toggle('visibleimg');

    item.forEach((e, arr) => {
        e.addEventListener('mouseenter', (event) => {
            img[arr].classList.toggle('visibleimg');
        });
    });

    item.forEach((e, arr) => {
        e.addEventListener('mouseleave', (event) => {
            img[arr].classList.toggle('hiddenimg');
        });
    });


})