const backToTopBtn = document.getElementById("backToTopBtn");
const navBar = document.getElementById("navBar");
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");
const techStackBtn = document.getElementById("techStackBtn");
const toolsBtn = document.getElementById("toolsBtn");
const techStackDiv = document.getElementById("techStackDiv");
const toolsDiv = document.getElementById("toolsDiv");
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-fixed ul li a, .menubar ul li a');

document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".auto-type", {
        strings: ["Web Developer", "Mobile Developer", "Full-Stack Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });

    techStackBtn.classList.add("active");
    techStackDiv.style.display = "block";
    toolsDiv.style.display = "none";

    function updateActiveLink() {
        let scrollPosition = window.scrollY || window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 500;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active-link');
                });
                
                document.querySelectorAll(`.nav-fixed ul li a[href="#${sectionId}"], .menubar ul li a[href="#${sectionId}"]`).forEach(link => {
                    link.classList.add('active-link');
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
    
    document.querySelectorAll('.nav-fixed ul li a, .menubar ul li a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
        navBar.classList.add("active");
    } else {
        navBar.classList.remove("active");
    }
});

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

const toggleNav = () => {
    navbar.classList.toggle("active");
    mobileNav.classList.toggle("hamburger-active");
};

mobileNav.addEventListener("click", () => toggleNav());

AOS.init({
    duration: 1000, 
    once: true,
    mirror: false,
    easing: 'ease-in-out',     

    disable: function() {
        return window.innerWidth < 991;
    }
});

function techStackOnClick() {
    const isActive = techStackBtn.classList.contains("active");
    if (isActive) return;

    techStackBtn.classList.add("active");
    toolsBtn.classList.remove("active");
    techStackDiv.style.display = "block";
    toolsDiv.style.display = "none";
}

function toolsOnClick() {
    const isActive = toolsBtn.classList.contains("active");
    if (isActive) return;

    toolsBtn.classList.add("active");
    techStackBtn.classList.remove("active");
    techStackDiv.style.display = "none";
    toolsDiv.style.display = "block";
}
