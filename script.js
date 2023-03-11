document.addEventListener("DOMContentLoaded", function (event) {
    const item = document.querySelectorAll('.accordeon-item');
    const img = document.querySelectorAll('.accordeon-item__img');
    const chosenOne = document.querySelectorAll('.accordeon-item__img img');

    img[0].classList.add('visibleimg');

    item.forEach((e, arr) => {
        e.addEventListener('mouseenter', (event) => {
            img[arr].classList.add('visibleimg');
        });
        e.addEventListener('mouseleave', (event) => {
            img[arr].classList.remove('visibleimg');
        });
    });
})