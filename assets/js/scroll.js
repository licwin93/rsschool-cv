window.addEventListener("DOMContentLoaded", () => {
    const educationSection = document.querySelector("#education");
    const languagesSection = document.querySelector("#languages");
    const navLinks = document.querySelectorAll(".nav-list a");

    
    const updateNavLinksColor = () => {
        const isInEducationSection = window.scrollY >= educationSection.offsetTop && window.scrollY < (educationSection.offsetTop + educationSection.offsetHeight);
        const isInLanguagesSection = window.scrollY >= languagesSection.offsetTop && window.scrollY < (languagesSection.offsetTop + languagesSection.offsetHeight);

        if (isInEducationSection || isInLanguagesSection) {
            navLinks.forEach(link => {
                link.classList.add("nav-link-active");
            });
        } else {
            navLinks.forEach(link => {
                link.classList.remove("nav-link-active");
            });
        }
    };

    updateNavLinksColor();
    window.addEventListener("scroll", updateNavLinksColor);
});



document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-list li a');

    function changeLinkState() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        if (navLinks[index]) {
            navLinks[index].classList.add('active');
        }
    }

    changeLinkState();
    window.addEventListener('scroll', changeLinkState);
});