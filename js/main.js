/**
 * Enhanced JavaScript - Smoother, more natural interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Smooth wheel scrolling with better feel
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
        let targetScrollY = window.scrollY;
        let animationFrame;

        const animateScroll = () => {
            const currentScrollY = window.scrollY;
            const difference = targetScrollY - currentScrollY;

            if (Math.abs(difference) < 0.5) {
                window.scrollTo(0, targetScrollY);
                animationFrame = undefined;
                return;
            }

            window.scrollTo(0, currentScrollY + difference * 0.12);
            animationFrame = requestAnimationFrame(animateScroll);
        };

        window.addEventListener('wheel', (event) => {
            const target = event.target instanceof Element ? event.target : null;
            if (event.ctrlKey || target?.closest('input, textarea, select, [contenteditable="true"]')) return;

            event.preventDefault();
            const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
            if (!animationFrame) targetScrollY = window.scrollY;
            targetScrollY = Math.max(0, Math.min(maxScrollY, targetScrollY + event.deltaY * 0.8));

            if (!animationFrame) animationFrame = requestAnimationFrame(animateScroll);
        }, { passive: false });
    }
    
    // Mobile Menu Toggle with better animations
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');

    if (mobileMenuBtn && navList) {
        mobileMenuBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
            
            const spans = mobileMenuBtn.querySelectorAll('span');
            if (navList.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
                document.body.style.overflow = 'hidden';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navList.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navList.classList.remove('active');
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
                document.body.style.overflow = '';
            }
        });
    }

    // Ultra-smooth scroll fade-in animation
    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeObserverOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px', 
        threshold: 0.05
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const parent = target.parentElement;
                const siblings = Array.from(parent.children).filter(child => child.classList.contains('fade-in'));
                const index = siblings.indexOf(target);
                
                const delay = Math.min(index * 100, 400); 
                target.style.transitionDelay = `${delay}ms`;
                target.classList.add('visible');
                observer.unobserve(target);
            }
        });
    }, fadeObserverOptions);

    fadeElements.forEach(el => fadeObserver.observe(el));

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
            }, 1500);
        });
    }
});