let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}




let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrolly;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
/*===== ===== sticky navbar ===*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);



menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
};


/*========= scroll reveal ============*/

ScrollReveal({
distance: '80px',
duration: 2000,
delay: 200,
});
ScrollReveal().reveal ('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal ('.home-img, .services-container, .project-box, .portfolio-box, .contact form', { origin: 'top' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'bottom' });




/*======= ======== typed js ========= ===*/
const typed = new Typed('.multiple-text', {
    strings: ["I'm a Web Developer","I'm a Java/Python Coder"," I'm currently working as Operations Executive, Level 2 at Uber Process ",' I was Campus Ambasssador for IIM Banglore Vista 2023 (The International Summit for Young Leaders).',' I also Volunteered for Swapna Foundation, Ngo.'],
    typeSpeed: 40,
    backSpeed: 10,
    backDelay: 1000,
    loop: true,
    });          
