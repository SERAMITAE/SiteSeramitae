/**
 * Main JavaScript File for Robotics Team Website
 * Handles mobile navigation, ultra-smooth scroll animations, and form interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Mobile Menu Toggle
    // ==========================================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');

    if (mobileMenuBtn && navList) {
        mobileMenuBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
            
            // Smooth hamburger to X animation
            const spans = mobileMenuBtn.querySelectorAll('span');
            if (navList.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
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
            });
        });
    }

    // ==========================================
    // 2. Ultra-Smooth Scroll Fade-in Animation
    // Uses Intersection Observer with hardware-accelerated CSS delays for zero-stutter staggering
    // ==========================================
    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeObserverOptions = {
        root: null,
        // Trigger slightly before the element is fully in view for a seamless feel
        rootMargin: '0px 0px -60px 0px', 
        threshold: 0.05
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const target = entry.target;
                
                // Find the element's index within its parent grid/container to create a stagger effect
                const parent = target.parentElement;
                const siblings = Array.from(parent.children).filter(child => child.classList.contains('fade-in'));
                const index = siblings.indexOf(target);
                
                // Apply a smooth CSS transition delay (much smoother than JS setTimeout)
                // 120ms stagger per item, capped at 500ms so it doesn't wait too long for large grids
                const delay = Math.min(index * 120, 500); 
                target.style.transitionDelay = `${delay}ms`;
                
                // Trigger the animation
                target.classList.add('visible');
                
                // Stop observing once animated to save memory
                observer.unobserve(target);
            }
        });
    }, fadeObserverOptions);

    fadeElements.forEach(el => {
        fadeObserver.observe(el);
    });

    // ==========================================
    // 3. Contact Form Handling (Demo)
    // ==========================================
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