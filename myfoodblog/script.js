// Modal functionality
const modal = document.querySelector('.modal');
const closeBtn = document.getElementById('close');

document.querySelectorAll('.read-more').forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
