document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    // Toggle Dropdown Menu
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close Menu When Clicking a Navigation Link
    navLinksItems.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.slice(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    const header = document.querySelector('.main-header');
                    const headerHeight = header ? header.offsetHeight : 0;
                    let offset = headerHeight;

                    if (window.innerWidth <= 768) {
                        offset += 20;
                    }

                    const sectionPosition = targetSection.offsetTop - offset;

                    window.scrollTo({
                        top: sectionPosition,
                        behavior: 'smooth'
                    });
                }
            }

            // Always close the menu
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close Menu When Clicking Outside the <a> links
    document.addEventListener('click', (e) => {
        const clickedInsideLink = e.target.closest('.nav-links a');
        const clickedHamburger = hamburger.contains(e.target);

        const isMenuOpen = navLinks.classList.contains('active');

        // If clicked outside <a> links and hamburger, close the menu
        if (!clickedInsideLink && !clickedHamburger && isMenuOpen) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});
