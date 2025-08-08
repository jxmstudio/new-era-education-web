// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileNavigation();
    initSmoothScrolling();
    initFormHandling();
    initScrollEffects();
    initBookingIntegration();
    initFAQ();
});

// Mobile Navigation
function initMobileNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navButtons = document.querySelector('.nav-buttons');

    // Create mobile menu elements
    const mobileMenuOverlay = document.createElement('div');
    mobileMenuOverlay.className = 'mobile-menu-overlay';
    mobileMenuOverlay.id = 'mobile-menu-overlay';

    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.id = 'mobile-menu';

    // Create mobile menu header
    const mobileMenuHeader = document.createElement('div');
    mobileMenuHeader.className = 'mobile-menu-header';
    
    const mobileMenuClose = document.createElement('button');
    mobileMenuClose.className = 'mobile-menu-close';
    mobileMenuClose.innerHTML = '&times;';
    mobileMenuClose.id = 'mobile-menu-close';
    
    mobileMenuHeader.appendChild(mobileMenuClose);
    mobileMenu.appendChild(mobileMenuHeader);

    // Clone navigation menu for mobile
    const mobileMenuNav = document.createElement('div');
    mobileMenuNav.className = 'mobile-menu-nav';
    
    if (navMenu) {
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const mobileLink = link.cloneNode(true);
            mobileMenuNav.appendChild(mobileLink);
        });
    }
    
    mobileMenu.appendChild(mobileMenuNav);

    // Clone buttons for mobile
    const mobileMenuButtons = document.createElement('div');
    mobileMenuButtons.className = 'mobile-menu-buttons';
    
    if (navButtons) {
        const buttons = navButtons.querySelectorAll('.btn');
        buttons.forEach(button => {
            const mobileButton = button.cloneNode(true);
            mobileMenuButtons.appendChild(mobileButton);
        });
    }
    
    mobileMenu.appendChild(mobileMenuButtons);

    // Add mobile menu to page
    document.body.appendChild(mobileMenuOverlay);
    document.body.appendChild(mobileMenu);

    // Mobile menu functionality
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            openMobileMenu();
        });
    }

    // Close mobile menu
    function closeMobileMenu() {
        mobileMenuOverlay.classList.remove('active');
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
        
        // Remove focus trap
        document.removeEventListener('keydown', handleEscapeKey);
    }

    function openMobileMenu() {
        mobileMenuOverlay.classList.add('active');
        mobileMenu.classList.add('active');
        hamburger.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus trap and ESC key handling
        document.addEventListener('keydown', handleEscapeKey);
        
        // Focus the close button
        setTimeout(() => {
            mobileMenuClose.focus();
        }, 300);
    }

    function handleEscapeKey(e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    }

    // Close menu event listeners
    mobileMenuClose.addEventListener('click', closeMobileMenu);
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);

    // Close menu when clicking on mobile links
    const mobileLinks = mobileMenu.querySelectorAll('.nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close menu when clicking on mobile buttons
    const mobileButtons = mobileMenu.querySelectorAll('.btn');
    mobileButtons.forEach(button => {
        button.addEventListener('click', closeMobileMenu);
    });

    // Focus trap for accessibility
    const focusableElements = mobileMenu.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    mobileMenu.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    e.preventDefault();
                    lastFocusableElement.focus();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    e.preventDefault();
                    firstFocusableElement.focus();
                }
            }
        }
    });
}

// Smooth Scrolling for Anchor Links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Form Handling
function initFormHandling() {
    // Contact forms now use their own animated popup system
    // This function is kept for potential future use but disabled for contact forms
    console.log('Form handling initialized - contact forms use animated popup system');
}



// Booking Integration
function initBookingIntegration() {
    // Remove the old booking modal functionality
    // All booking now goes through the dedicated booking page
    const bookNowButtons = document.querySelectorAll('#book-now-btn, #book-now-cta');
    
    bookNowButtons.forEach(button => {
        // Let the buttons work normally - they link to book.html
        // No need to prevent default or show modal
    });
}

// Booking modal functionality removed - all booking now goes through book.html

// Scroll Effects
function initScrollEffects() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(0, 0, 0, 0.98)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.3)';
        }
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .testimonial-card, .about-feature');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add notification styles
    const notificationStyles = `
        <style>
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                z-index: 3000;
                max-width: 400px;
                animation: slideInRight 0.3s ease-out;
            }
            
            .notification-content {
                background-color: white;
                border-radius: 0.5rem;
                padding: 1rem 1.5rem;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                border-left: 4px solid;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
            }
            
            .notification-success {
                border-left-color: #10b981;
            }
            
            .notification-error {
                border-left-color: #ef4444;
            }
            
            .notification-info {
                border-left-color: #3b82f6;
            }
            
            .notification-message {
                color: #1f2937;
                font-weight: 500;
            }
            
            .notification-close {
                background: none;
                border: none;
                font-size: 1.25rem;
                cursor: pointer;
                color: #6b7280;
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: background-color 0.3s ease;
            }
            
            .notification-close:hover {
                background-color: #f3f4f6;
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes fadeOut {
                from {
                    opacity: 1;
                }
                to {
                    opacity: 0;
                }
            }
            
            @media (max-width: 768px) {
                .notification {
                    right: 10px;
                    left: 10px;
                    max-width: none;
                }
            }
        </style>
    `;
    
    if (!document.querySelector('#notification-styles')) {
        const styleElement = document.createElement('style');
        styleElement.id = 'notification-styles';
        styleElement.textContent = notificationStyles;
        document.head.appendChild(styleElement);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', function() {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization: Debounced scroll handler
const debouncedScrollHandler = debounce(function() {
    // Any scroll-based functionality can be added here
}, 16);

window.addEventListener('scroll', debouncedScrollHandler);

// Service Worker Registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Analytics tracking (placeholder for Google Analytics)
function trackEvent(eventName, eventData = {}) {
    // Replace with actual analytics implementation
    console.log('Event tracked:', eventName, eventData);
    
    // Example: Track button clicks
    if (eventName === 'button_click') {
        // Send to analytics service
    }
}

// Track important user interactions
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn')) {
        const buttonText = e.target.textContent.trim();
        trackEvent('button_click', {
            button_text: buttonText,
            button_type: e.target.className.includes('primary') ? 'primary' : 'secondary'
        });
    }
});

// Form tracking
document.addEventListener('submit', function(e) {
    if (e.target.matches('#contact-form')) {
        trackEvent('form_submit', {
            form_type: 'contact'
        });
    }
});

// FAQ Functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('i');
        
        if (question && answer) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherIcon = otherItem.querySelector('.faq-question i');
                        if (otherIcon) {
                            otherIcon.style.transform = 'rotate(0deg)';
                        }
                    }
                });
                
                // Toggle current item
                if (isActive) {
                    item.classList.remove('active');
                    if (icon) {
                        icon.style.transform = 'rotate(0deg)';
                    }
                } else {
                    item.classList.add('active');
                    if (icon) {
                        icon.style.transform = 'rotate(180deg)';
                    }
                }
            });
            
            // Keyboard accessibility
            question.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    question.click();
                }
            });
        }
    });
}

// Export functions for potential external use
window.NewEraEducation = {
    showNotification,
    trackEvent,
    showBookingModal
}; 