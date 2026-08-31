/**
 * Enhanced JavaScript - Smoother, more natural interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 0. Theme and language preferences
    // ==========================================
    const translations = {
        'Home': 'Acasă',
        'About': 'Despre noi',
        'About Us': 'Despre noi',
        'Robots': 'Roboți',
        'Contact': 'Contact',
        'Building the': 'Construim',
        'Future': 'Viitorul',
        'of Robotics': 'Roboticii',
        "We're a team of passionate students designing, building, and coding competitive robots for FIRST Tech Challenge competitions.": 'Suntem o echipă de elevi pasionați care proiectează, construiesc și programează roboți competitivi pentru FIRST Tech Challenge.',
        'View Our Robots': 'Vezi roboții',
        'Meet the Team': 'Cunoaște echipa',
        'Who Are We?': 'Cine suntem?',
        "We're Seramitae, a competitive robotics team competing in FIRST Tech Challenge. Our team brings together students passionate about engineering, programming, and design.": 'Suntem Seramitae, o echipă competitivă de robotică din FIRST Tech Challenge. Reunim elevi pasionați de inginerie, programare și design.',
        "From mechanical design to autonomous programming, we handle every aspect of robot development. We've competed at national championships and qualified for international events.": 'De la design mecanic la programare autonomă, ne ocupăm de fiecare etapă a dezvoltării robotului. Am concurat la campionate naționale și ne-am calificat la evenimente internaționale.',
        'Learn More': 'Află mai multe',
        'Our Sponsors': 'Sponsorii noștri',
        'Ready to join the revolution?': 'Vrei să ni te alături?',
        "Whether you want to sponsor our team or become a member, we'd love to hear from you.": 'Fie că dorești să susții echipa sau să devii membru, vrem să te cunoaștem.',
        'Get in Touch': 'Contactează-ne',
        'Quick Links': 'Linkuri rapide',
        'Contact Info': 'Date de contact',
        'Follow Us': 'Urmărește-ne',
        'A student-led robotics team competing in FIRST Tech Challenge.': 'O echipă de robotică formată din elevi, care concurează în FIRST Tech Challenge.',
        'About Our Team': 'Despre echipa noastră',
        'A student-led FIRST Tech Challenge team from Galați, Romania, building robots and growing a stronger STEM community.': 'O echipă FIRST Tech Challenge formată din elevi din Galați, România, care construiește roboți și dezvoltă comunitatea STEM.',
        'Workshop Photo': 'Imagine din atelier',
        'Our Mission': 'Misiunea noastră',
        'Seramitae #23486 began four years ago at the “Costache Negri” National College, where two students and their physics teacher turned a shared passion for technology into a robotics club. Today, we compete in FIRST Tech Challenge and develop skills across mechanical design, programming, CAD, 3D printing, drive team, and outreach.': 'Seramitae #23486 a început acum patru ani la Colegiul Național „Costache Negri”, unde doi elevi și profesorul lor de fizică au transformat pasiunea pentru tehnologie într-un club de robotică. Astăzi concurăm în FIRST Tech Challenge și ne dezvoltăm abilitățile în design mecanic, programare, CAD, imprimare 3D, drive team și outreach.',
        'We build more than robots. Through projects such as Caravana Seramitae and STEM Beyond Borders, we create hands-on STEM experiences, mentor younger students, and collaborate with FIRST communities in Romania and abroad. Guided by our mentors, we learn to test ideas, improve through mistakes, and support one another as a team.': 'Construim mai mult decât roboți. Prin proiecte precum Caravana Seramitae și STEM Beyond Borders, creăm experiențe STEM practice, mentorăm elevi mai mici și colaborăm cu comunități FIRST din România și din străinătate. Ghidați de mentori, învățăm să testăm idei, să progresăm prin greșeli și să ne susținem ca echipă.',
        'Our Robots': 'Roboții noștri',
        'Designing, building, and coding competitive machines.': 'Proiectăm, construim și programăm roboți competitivi.',
        'Weight: 15kg': 'Greutate: 15 kg',
        'Weight: 8kg': 'Greutate: 8 kg',
        'This is the final version of our robot for the 2024-2025 FIRST Tech Challenge season, Into The Deep. With this robot, we competed in the National Championship and qualified for an international event, the Chicago Robotics Invitational. The robot features both vertical and horizontal extensions, runs a 5-specimen autonomous routine, scores 13 specimens during TeleOp for a total of 18 specimens, and is capable of a Level 2 Ascent.': 'Aceasta este versiunea finală a robotului nostru pentru sezonul FIRST Tech Challenge 2024–2025, Into The Deep. Cu el am concurat la Campionatul Național și ne-am calificat la Chicago Robotics Invitational. Robotul are extensii verticale și orizontale, rulează o rutină autonomă de 5 specimen, marchează 13 specimen în TeleOp, pentru un total de 18, și poate realiza Level 2 Ascent.',
        'Meet the initial iteration of our robot for the DECODE season. While this early build lacked long-range scoring capabilities, it made up for it with high reliability—featuring a rock-solid 12-artifact autonomous routine, a mobile turret, and an ultra-fast transfer mechanism. This iteration marked a major milestone for our team, securing our very first League Meet victory.': 'Descoperă prima iterație a robotului nostru pentru sezonul DECODE. Deși acest prototip nu putea marca de la distanță, a oferit o fiabilitate excelentă: o rutină autonomă stabilă de 12 artefacte, o turelă mobilă și un mecanism de transfer foarte rapid. Această versiune ne-a adus prima victorie la un League Meet.',
        'This is the final iteration of our robot used at the Regional Championship, where our performance qualified us for the National Championship. Featuring a rapid 0.3-second cycle time, it boasted an autonomous routine capable of scoring 15 close-range artifacts and 18 long-range artifacts. Additionally, its high-speed turret enabled us to shoot on the fly from any distance.': 'Aceasta este iterația finală a robotului folosită la Campionatul Regional, unde performanța noastră ne-a calificat la Campionatul Național. Cu un ciclu rapid de 0,3 secunde, avea o rutină autonomă capabilă să marcheze 15 artefacte de aproape și 18 de la distanță. Turela sa de mare viteză ne permitea să marcăm din mers, de la orice distanță.',
        'Get In Touch': 'Ia legătura cu noi',
        'Have questions? Want to sponsor us or join the team? Reach out below.': 'Ai întrebări? Vrei să ne susții sau să te alături echipei? Scrie-ne mai jos.',
        'Send us a Message': 'Trimite-ne un mesaj',
        'Full Name': 'Nume complet',
        'Email Address': 'Adresă de email',
        'Subject': 'Subiect',
        'General Inquiry': 'Întrebare generală',
        'Sponsorship': 'Sponsorizare',
        'Joining the Team': 'Alătură-te echipei',
        'Message': 'Mesaj',
        'Send Message': 'Trimite mesajul',
        'Our Location': 'Locația noastră',
        'Map Placeholder': 'Hartă',
        'Contact Details': 'Date de contact'
    };

    const setLanguage = (language) => {
        document.querySelectorAll('body *').forEach((element) => {
            if (element.children.length || element.matches('script, style')) return;
            const english = element.dataset.english || element.textContent.trim();
            if (!english || element.closest('.site-controls')) return;
            element.dataset.english = english;
            element.textContent = language === 'ro' ? (translations[english] || english) : english;
        });

        document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach((field) => {
            const english = field.dataset.englishPlaceholder || field.placeholder;
            field.dataset.englishPlaceholder = english;
            field.placeholder = language === 'ro' && english === 'Your message here...' ? 'Mesajul tău aici...' : english;
        });

        document.documentElement.lang = language;
        document.querySelectorAll('.language-toggle').forEach((button) => {
            button.textContent = language === 'ro' ? 'EN' : 'RO';
            button.setAttribute('aria-label', language === 'ro' ? 'Switch language to English' : 'Schimbă limba în română');
        });
        localStorage.setItem('seramitae-language', language);
    };

    const setTheme = (theme) => {
        const isLight = theme === 'light';
        document.body.classList.toggle('light-theme', isLight);
        document.querySelectorAll('.theme-toggle').forEach((button) => {
            button.textContent = isLight ? '☾' : '☼';
            button.title = isLight ? 'Dark mode' : 'Light mode';
            button.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
        });
        localStorage.setItem('seramitae-theme', theme);
    };

    const savedTheme = localStorage.getItem('seramitae-theme') || 'dark';
    const savedLanguage = localStorage.getItem('seramitae-language') || 'en';
    setTheme(savedTheme);
    setLanguage(savedLanguage);

    document.querySelectorAll('.theme-toggle').forEach((button) => {
        button.addEventListener('click', () => setTheme(document.body.classList.contains('light-theme') ? 'dark' : 'light'));
    });

    document.querySelectorAll('.language-toggle').forEach((button) => {
        button.addEventListener('click', () => setLanguage(document.documentElement.lang === 'ro' ? 'en' : 'ro'));
    });

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
        rootMargin: '0px 0px -30px 0px', 
        threshold: 0.05
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const parent = target.parentElement;
                const siblings = Array.from(parent.children).filter(child => child.classList.contains('fade-in'));
                const index = siblings.indexOf(target);
                
                const delay = Math.min(index * 75, 300); 
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
