document.addEventListener("DOMContentLoaded", function (event) {


    const accordeon = document.querySelectorAll('.accordeon')
    const link = document.querySelectorAll('.link');
    const img = document.querySelectorAll('.accordeon-item__img');


    link.forEach((e, arr) => {
        e.addEventListener('mouseenter', (event) => {
            img[arr].classList.toggle('visible');
            console.log(img[arr], arr);
        });
    });
    link.forEach((e, arr) => {
        e.addEventListener('mouseleave', (event) => {
            img[arr].classList.toggle('hidden');
            console.log(img[arr], arr);
        });
    });
});