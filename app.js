const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container ');
const home = document.querySelector('.header .nav-bar .nav-list .bar .home-active');
const service = document.querySelector('.header .nav-bar .nav-list .bar .service-active');
const about = document.querySelector('.header .nav-bar .nav-list .bar .about-active');
const proj = document.querySelector('.header .nav-bar .nav-list .bar .proj-active');
const contact = document.querySelector('.header .nav-bar .nav-list .bar .contact-active');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250) {
        header.style.backgroundColor = '#1e2b31';
    } else {
        header.style.backgroundColor = 'transparent';
    }
    
    if(scroll_position > 650) {
        home.style.color = '#fff';
    } else {
        home.style.color = '#9c5655';
    }

    if (scroll_position > 650) {
        service.style.color = '#9c5655';
    } else {
        service.style.color = '#fff';
    }
    if (scroll_position > 1220) {
        service.style.color = '#fff';
    } 
    
    if (scroll_position > 1220) {
        proj.style.color = '#9c5655';
    } else {
        proj.style.color = '#fff';
    }
    if (scroll_position > 3000) {
        proj.style.color = '#fff';
    }

    if (scroll_position > 3000) {
        about.style.color = '#9c5655';
    } else {
        about.style.color = '#fff';
    }
    if (scroll_position > 3900) {
        about.style.color = '#fff';
    }

    if (scroll_position > 3900) {
        contact.style.color = '#9c5655';
    } else {
        contact.style.color = '#fff';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

function refreshPage() {
    location.reload();
};