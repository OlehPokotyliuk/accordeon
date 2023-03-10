document.addEventListener("DOMContentLoaded", function (event) {


    const accordeon = document.querySelectorAll('.accordeon')
    const link = document.querySelectorAll('.link');
    const item = document.querySelectorAll('.accordeon-item');
    const img = document.querySelectorAll('.accordeon-item__img');


    item.forEach((e, arr) => {
        e.addEventListener('mouseenter', (event) => {
            img[arr].classList.toggle('visible');
            console.log(img[arr], arr);
        });
        e.addEventListener('mouseleave', (event) => {
            img[arr].classList.toggle('hidden');
            console.log(img[arr], arr);
        });
    });

})