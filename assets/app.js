var menuButton = document.getElementById('menu-button');
var menuNav = document.getElementById('menu-nav');
var menuOpen = false

menuButton.addEventListener('click', function(event) {
    console.log('click', event);

    menuOpen = !menuOpen;

    if (menuOpen) {
        menuNav.classList.add('menu-open')
    } else {
        menuNav.classList.remove('menu-open')
    }

});