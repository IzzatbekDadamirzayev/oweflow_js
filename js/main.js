var button = document.getElementById('button'),
    button_more = document.getElementById('button_more'),
    button_less = document.getElementById('button_less'),
    input = document.getElementById('input'),
    box = document.querySelector('.box');

    button.addEventListener('click', () => {
        input = input.value;
        box.scrollTop = input;
    });

    button_more.addEventListener('click', () => {
          box.style.height = box.scrollHeight + 'px';
          box.style.overflow = 'hidden';
    });

    button_less.addEventListener('click', () => {
        box.style.height = '40vh';
        box.style.overflow = 'scroll';
    });
