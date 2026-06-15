document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // STICKY NAVIGATION & SCROLL EVENTS
    // -------------------------------------------------------------
    const nav = document.getElementById('nav');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    };
    
    // Initial check on page load
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    // -------------------------------------------------------------
    // MOBILE NAVIGATION DRAWER
    // -------------------------------------------------------------
    const navToggle = document.getElementById('navToggle');
    const navLinksContainer = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');

    const toggleMenu = () => {
        navToggle.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
        // Prevent body scrolling when menu is open on mobile
        document.body.style.overflow = navLinksContainer.classList.contains('active') ? 'hidden' : '';
    };

    const closeMenu = () => {
        navToggle.classList.remove('active');
        navLinksContainer.classList.remove('active');
        document.body.style.overflow = '';
    };

    navToggle.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside of it
    document.addEventListener('click', (e) => {
        if (navLinksContainer.classList.contains('active') && 
            !navLinksContainer.contains(e.target) && 
            !navToggle.contains(e.target)) {
            closeMenu();
        }
    });

    // -------------------------------------------------------------
    // FADE-UP INTERSECTION OBSERVER
    // -------------------------------------------------------------
    const fadeElements = document.querySelectorAll('.fade-up');
    
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -80px 0px', // Trigger slightly before coming into view
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        }, observerOptions);

        fadeElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        fadeElements.forEach(el => el.classList.add('visible'));
    }

    // -------------------------------------------------------------
    // CONTACT FORM HANDLING
    // -------------------------------------------------------------
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    if (contactForm && successMessage) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simple client-side validation check (HTML5 does most of it)
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                return; // Let standard validation fire
            }

            // Simulate sending progress (disable button)
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending Message...';

            // Simulate API response delay
            setTimeout(() => {
                // Fade out form
                contactForm.style.transition = 'opacity 0.4s ease';
                contactForm.style.opacity = '0';
                
                setTimeout(() => {
                    contactForm.style.display = 'none';
                    // Reveal success message
                    successMessage.style.display = 'block';
                    // Reset form
                    contactForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;
                }, 400);

            }, 1200);
        });
    }
});
