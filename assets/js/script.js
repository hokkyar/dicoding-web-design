const dropdownIcon = document.querySelector('.dropdown-icon');
const dropdownContent = document.querySelector('.dropdown-content');

const ul = document.getElementById('menu');
const a = ul.querySelectorAll('a');

ul.style.display = 'none';

a.forEach(e => {
    e.style.display = 'block';
    e.style.textTransform = 'capitalize';
    e.style.textDecoration = 'none';
    e.style.borderBottom = '1px dotted #363062';
    e.style.padding = '10px';
    e.style.width = '100%';
    e.style.backgroundColor = 'white';
    e.style.transition = '.1s';
    e.addEventListener('mouseenter', function() {
        e.style.backgroundColor = '#363062';
        e.style.color = 'white';
    });
    e.addEventListener('mouseleave', function() {
        e.style.backgroundColor = 'white';
        e.style.color = '#363062';
    });
});

let isDisplay = false;
dropdownIcon.addEventListener('click', function() {
    if (isDisplay) {
        ul.style.display = 'none';
        isDisplay = false;
    } else {
        ul.style.display = 'block';
        isDisplay = true;
    }
});

setInterval(() => {
    if (!(window.innerWidth < 536)) {
        ul.style.display = 'none';
    }
}, 10);