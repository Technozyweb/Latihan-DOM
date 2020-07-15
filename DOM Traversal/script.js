// const card = document.querySelectorAll('.card');
// const close = document.querySelectorAll('.close');

// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none';
//     });
// }

// close.forEach(el => {
//     el.addEventListener('click', e => {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//     });
// });

const container = document.querySelector('.container');

container.addEventListener('click', e => {
    if (e.target.className == "close") {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});