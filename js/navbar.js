const navDrop = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
   
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
   });

}

const App = () => {
    navDrop();
}

App();