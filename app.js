// Electronics Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Profile Photo Upload Functionality - Fixed
    const profilePhotoContainer = document.querySelector('.profile-photo-container');
    const profilePhoto = document.getElementById('profile-photo');
    const photoUpload = document.getElementById('photo-upload');
    
    if (profilePhotoContainer && photoUpload && profilePhoto) {
        // Handle photo upload click
        profilePhotoContainer.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            photoUpload.click();
        });
        
        // Handle file selection
        photoUpload.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                // Show loading state
                profilePhotoContainer.classList.add('loading');
                
                // Validate file type
                if (!file.type.startsWith('image/')) {
                    alert('Please select a valid image file.');
                    profilePhotoContainer.classList.remove('loading');
                    return;
                }
                
                // Validate file size (5MB limit)
                if (file.size > 5 * 1024 * 1024) {
                    alert('Please select an image smaller than 5MB.');
                    profilePhotoContainer.classList.remove('loading');
                    return;
                }
                
                const reader = new FileReader();
                reader.onload = function(e) {
                    profilePhoto.src = e.target.result;
                    profilePhoto.alt = 'Profile Photo';
                    profilePhotoContainer.classList.remove('loading');
                    
                    // Add a success animation
                    profilePhotoContainer.style.animation = 'fadeInUp 0.6s ease-out';
                    setTimeout(() => {
                        profilePhotoContainer.style.animation = '';
                    }, 600);
                };
                
                reader.onerror = function() {
                    alert('Error reading file. Please try again.');
                    profilePhotoContainer.classList.remove('loading');
                };
                
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Active Navigation Highlighting
    const sections = document.querySelectorAll('.section, .hero');
    const navLinks = document.querySelectorAll('.nav__link');
    
    function highlightActiveNav() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Scroll-based animations
    function animateOnScroll() {
        const elements = document.querySelectorAll('.card, .skill-tag, .project-card, .competition-card, .course-card, .contact-item');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('fade-in-up');
            }
        });
    }
    
    // Header background opacity on scroll
    const header = document.querySelector('.header');
    function updateHeaderOnScroll() {
        if (header) {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                header.style.background = 'rgba(26, 31, 46, 0.98)';
            } else {
                header.style.background = 'rgba(26, 31, 46, 0.95)';
            }
        }
    }
    
    // Scroll event listener
    window.addEventListener('scroll', function() {
        highlightActiveNav();
        animateOnScroll();
        updateHeaderOnScroll();
    });
    
    // Initial call to highlight active nav and animate elements
    highlightActiveNav();
    animateOnScroll();
    
    // Typing animation for hero section
    function createTypingEffect() {
        const heroTitle = document.querySelector('.hero__text h1');
        if (heroTitle) {
            const text = heroTitle.textContent;
            heroTitle.textContent = '';
            
            let i = 0;
            function typeWriter() {
                if (i < text.length) {
                    heroTitle.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            }
            
            // Start typing animation after a delay
            setTimeout(typeWriter, 500);
        }
    }
    
    // Initialize typing effect
    createTypingEffect();
    
    // Parallax effect for hero background
    function parallaxEffect() {
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.2;
            hero.style.transform = `translateY(${rate}px)`;
        }
    }
    
    // Add parallax effect on scroll
    window.addEventListener('scroll', parallaxEffect);
    
    // Certificate link handlers - Fixed
    document.querySelectorAll('.certificate-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create a modal or notification for certificate viewing
            const certificateName = this.closest('.course-card').querySelector('h3').textContent;
            showCertificateModal(certificateName);
        });
    });
    
    function showCertificateModal(certificateName) {
        // Create modal overlay
        const modal = document.createElement('div');
        modal.className = 'certificate-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Certificate: ${certificateName}</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <p>Certificate for "${certificateName}" will be available soon.</p>
                    <p>Please check back later or contact me directly for verification.</p>
                </div>
            </div>
        `;
        
        // Add modal styles
        const modalStyles = `
            .certificate-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            .certificate-modal.show {
                opacity: 1;
            }
            .modal-content {
                background: var(--color-surface);
                border: 1px solid var(--color-border);
                border-radius: 12px;
                padding: 2rem;
                max-width: 500px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                position: relative;
            }
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1rem;
                padding-bottom: 1rem;
                border-bottom: 1px solid var(--color-border);
            }
            .modal-header h3 {
                color: var(--color-primary);
                margin: 0;
            }
            .modal-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                color: var(--color-text-secondary);
                cursor: pointer;
                transition: color 0.3s ease;
            }
            .modal-close:hover {
                color: var(--color-primary);
            }
            .modal-body {
                color: var(--color-text-secondary);
                line-height: 1.6;
            }
        `;
        
        // Add styles to head if not already present
        if (!document.querySelector('#modal-styles')) {
            const style = document.createElement('style');
            style.id = 'modal-styles';
            style.textContent = modalStyles;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(modal);
        
        // Show modal with animation
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
        
        // Close modal functionality
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', function() {
            modal.classList.remove('show');
            setTimeout(() => {
                if (modal.parentNode) {
                    document.body.removeChild(modal);
                }
            }, 300);
        });
        
        // Close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('show');
                setTimeout(() => {
                    if (modal.parentNode) {
                        document.body.removeChild(modal);
                    }
                }, 300);
            }
        });
    }
    
    // GitHub links - Fixed to properly open without loading issues
    document.querySelectorAll('a[href*="github.com"]').forEach(link => {
        // Remove any existing event listeners that might interfere
        link.removeEventListener('click', function() {});
        
        // Ensure target="_blank" is set for GitHub links
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        
        // Add hover effect instead of click loading
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Intersection Observer for better performance
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe all animatable elements
    document.querySelectorAll('.card, .skill-tag, .project-card, .competition-card, .course-card, .contact-item').forEach(el => {
        observer.observe(el);
    });
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close any open modals
            const modals = document.querySelectorAll('.certificate-modal');
            modals.forEach(modal => {
                modal.classList.remove('show');
                setTimeout(() => {
                    if (modal.parentNode) {
                        modal.parentNode.removeChild(modal);
                    }
                }, 300);
            });
            
            // Close mobile menu
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        }
    });
    
    // Add focus management for accessibility
    document.querySelectorAll('.btn, .nav__link').forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--color-primary)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
    
    // Prevent default drag behavior on images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('dragstart', function(e) {
            e.preventDefault();
        });
    });
    
    // Add click handlers for contact links
    document.querySelectorAll('.contact-item a').forEach(link => {
        if (link.href.startsWith('mailto:') || link.href.startsWith('tel:')) {
            link.addEventListener('click', function(e) {
                // Let the default behavior handle mailto and tel links
                return true;
            });
        } else {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
    
    // Add smooth reveal animation for sections
    function addSectionReveal() {
        const sections = document.querySelectorAll('.section');
        sections.forEach((section, index) => {
            section.style.animationDelay = `${index * 0.1}s`;
        });
    }
    
    addSectionReveal();
    
    // Console welcome message
    console.log('%c🔧 Electronics Portfolio Loaded! 🔧', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
    console.log('%cWelcome to Priyanshu Sil\'s Electronics Engineering Portfolio', 'color: #9ca3af; font-size: 14px;');
    console.log('%cBuilt with modern web technologies and electronics-themed design', 'color: #9ca3af; font-size: 12px;');
    
});