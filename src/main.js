
import './style.css';

console.log('Amaranoc website is working!');

document.addEventListener('DOMContentLoaded', () => {

    const countVal = document.querySelector('.count-value');
    const plusBtn = document.querySelector('.btn-counter-plus');
    const minusBtn = document.querySelector('.btn-counter-minus');

    if (countVal && plusBtn && minusBtn) {

        plusBtn.addEventListener('click', () => {
            let val = parseInt(countVal.textContent, 10) || 0;
            countVal.textContent = val + 1;
        });

        minusBtn.addEventListener('click', () => {
            let val = parseInt(countVal.textContent, 10) || 0;

            if (val > 0) {
                countVal.textContent = val - 1;
            }
        });
    }

    const favButtons = document.querySelectorAll('.fav-btn');

    favButtons.forEach(btn => {
        btn.addEventListener('click', () => {

            const icon = btn.querySelector('i');

            if (!icon) return;

            const isFavorite = icon.classList.contains('fa-solid');

            if (isFavorite) {
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
                icon.style.color = '';
            } else {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
                icon.style.color = '#ff7d00';
            }

        });
    });

    const categories = document.querySelectorAll('.category-card');

    categories.forEach(cat => {
        cat.addEventListener('click', () => {

            categories.forEach(c => {
                c.classList.remove('active');
            });

            cat.classList.add('active');

        });
    });

    const form = document.getElementById('announcementForm');

    if (form) {
        form.addEventListener('submit', (e) => {

            e.preventDefault();

            alert('Ձեր հայտարարության հայտը հաջողությամբ ուղարկվեց։ Մենք կկապվենք Ձեզ հետ։');

            form.reset();

        });
    }

    const pageButtons = document.querySelectorAll('.page-btn');

    pageButtons.forEach(btn => {
        btn.addEventListener('click', () => {

            if (btn.querySelector('i')) return;

            pageButtons.forEach(b => {
                b.classList.remove('active');
            });

            btn.classList.add('active');

        });
    });

});
