/**
 * Enhanced JavaScript - Optimized for mobile with better touch interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 0. Performance Detection & Optimization
    // ==========================================
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;

    // Reduce animations on mobile/low-end devices
    if (isMobile || isLowEndDevice) {
        document.documentElement.classList.add('mobile-device');
    }

    // ==========================================
    // 1. Smooth Wheel Scrolling (Desktop Only)
    // ==========================================
    if (!prefersReducedMotion && !isMobile) {
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
    
    // ==========================================
    // 2. Mobile Menu with Overlay
    // ==========================================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');

    // Create overlay element
    let overlay = document.querySelector('.menu-overlay');
    if (!overlay && mobileMenuBtn) {
        overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);
    }

    if (mobileMenuBtn && navList) {
        const toggleMenu = (show) => {
            if (show) {
                navList.classList.add('active');
                if (overlay) overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                navList.classList.remove('active');
                if (overlay) overlay.classList.remove('active');
                document.body.style.overflow = '';
                
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        };

        mobileMenuBtn.addEventListener('click', () => {
            toggleMenu(!navList.classList.contains('active'));
        });

        // Close menu when clicking overlay
        if (overlay) {
            overlay.addEventListener('click', () => toggleMenu(false));
        }

        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                toggleMenu(false);
            });
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navList.classList.contains('active')) {
                toggleMenu(false);
            }
        });

        // Close menu on swipe left (mobile gesture)
        if (isMobile) {
            let touchStartX = 0;
            let touchEndX = 0;

            navList.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });

            navList.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, { passive: true });

            const handleSwipe = () => {
                const swipeThreshold = 50;
                if (touchEndX < touchStartX && touchStartX - touchEndX > swipeThreshold) {
                    toggleMenu(false);
                }
            };
        }
    }

    // ==========================================
    // 3. Optimized Scroll Animations
    // ==========================================
    const fadeElements = document.querySelectorAll('.fade-in');

    // Use smaller root margin on mobile for better performance
    const rootMargin = isMobile ? '0px 0px -30px 0px' : '0px 0px -50px 0px';
    
    const fadeObserverOptions = {
        root: null,
        rootMargin: rootMargin, 
        threshold: 0.05
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const target = entry.target;
                
                // Reduce delay on mobile for snappier feel
                if (!isMobile) {
                    const parent = target.parentElement;
                    const siblings = Array.from(parent.children).filter(child => child.classList.contains('fade-in'));
                    const index = siblings.indexOf(target);
                    
                    const delay = Math.min(index * 80, 320); 
                    target.style.transitionDelay = `${delay}ms`;
                }
                
                target.classList.add('visible');
                observer.unobserve(target);
            }
        });
    }, fadeObserverOptions);

    fadeElements.forEach(el => fadeObserver.observe(el));

    // ==========================================
    // 4. Image Lazy Loading & Optimization
    // ==========================================
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    } else {
        // Fallback for older browsers
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ==========================================
    // 5. Contact Form Handling
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
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Construct email
            const targetEmail = "mattteopastrasc2@gmail.com";
            const emailSubject = encodeURIComponent(name);
            const emailBody = encodeURIComponent(
                `From: ${name}\n` +
                `Email: ${email}\n` +
                `Type: ${subject}\n\n` +
                `Message:\n${message}`
            );
            
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${emailSubject}&body=${emailBody}`;
            
            setTimeout(() => {
                window.open(gmailUrl, '_blank');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
            }, 500);
        });
    }

    // ==========================================
    // 6. Viewport Height Fix for Mobile Browsers
    // ==========================================
    const setVH = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('resize', setVH);

    // ==========================================
    // 7. Smooth Scroll for Anchor Links
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href.length < 2) return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = 80; // Header height
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================
    // 8. Debounced Resize Handler
    // ==========================================
    let resizeTimer;
    window.addEventListener('resize', () => {
        document.body.classList.add('resize-transition');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove('resize-transition');
        }, 250);
    });
});