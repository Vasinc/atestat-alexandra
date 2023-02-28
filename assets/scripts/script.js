const burgerMenu = document.querySelector('.burger-menu');
const headerUl = document.querySelector('ul');
const backdrop = document.getElementById('backdrop');


function handleHeaderUl () {
    burgerMenu.classList.toggle('active-burger')
    backdrop.classList.toggle('display-block')
    headerUl.classList.toggle('display-flex')
    setTimeout(() => {
        headerUl.classList.toggle('width-70')
    }, 1);
}

burgerMenu.addEventListener('click', handleHeaderUl)

backdrop.addEventListener('click', handleHeaderUl)

addEventListener('resize', () => {
    if (innerWidth >= 800 && backdrop.classList.contains('display-block')) {
        handleHeaderUl()
    }
})