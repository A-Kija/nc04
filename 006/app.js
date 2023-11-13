const b = document.querySelector('button');

b.addEventListener('click', _ => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});