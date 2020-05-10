const  toggleMenu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active-menu'); 
    });
    menu.addEventListener('click', () => {
        menu.classList.remove('active-menu');
    });
};
export default toggleMenu;
