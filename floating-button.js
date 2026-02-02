// floating-button.js
// Floating Appointment Button - Standalone (No Tailwind Required)

(function() {
    // Email template configuration
    const emailConfig = {
        to: 'divyasbisen45@gmail.com',
        subject: 'Content Strategy Appointment Request',
        body: `Hello Divya,

I would like to schedule an appointment to discuss content strategy services.

My Details:
Name: 
Email: 
Phone: 
Business/Practice Type: 

Service Interested In:
[ ] Signature Program - One-Month Content Intensive
[ ] Quick Start - Content Audit
[ ] Tailored Content Services
[ ] Monthly Package

Brief Description of My Needs:


Preferred Time for Discovery Call:


Best regards`
    };

    // Create comprehensive styles
    const style = document.createElement('style');
    style.textContent = `
        /* Floating Button Base Styles */
        .floating-appointment-btn {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            z-index: 99999;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 1rem 1.75rem;
            background: linear-gradient(135deg, #f6c453 0%, #f0b840 50%, #e6a830 100%);
            color: #2d5f4f;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 700;
            font-size: 1rem;
            font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
            box-shadow: 0 10px 40px rgba(201, 169, 110, 0.5);
            transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
            border: 2px solid rgba(255, 255, 255, 0.3);
            cursor: pointer;
            overflow: hidden;
            animation: float-pulse 2s infinite ease-in-out, bounce-subtle 3s infinite ease-in-out;
        }

        .floating-appointment-btn:hover {
            transform: translateY(-8px) scale(1.1);
            box-shadow: 0 20px 60px rgba(201, 169, 110, 0.8);
        }

        .floating-appointment-btn:active {
            transform: translateY(-4px) scale(1.05);
        }

        .floating-btn-icon {
            font-size: 1.25rem;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
            animation: bell-ring 2s infinite;
            display: inline-block;
        }

        .floating-btn-text {
            font-weight: 700;
            letter-spacing: 0.02em;
            filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
        }

        /* Animations */
        @keyframes float-pulse {
            0%, 100% {
                box-shadow: 0 10px 40px rgba(201, 169, 110, 0.5), 
                            0 0 0 0 rgba(246, 196, 83, 0.4);
            }
            50% {
                box-shadow: 0 15px 50px rgba(201, 169, 110, 0.7), 
                            0 0 0 15px rgba(246, 196, 83, 0);
            }
        }

        @keyframes bell-ring {
            0%, 100% {
                transform: rotate(0deg);
            }
            10%, 30% {
                transform: rotate(-12deg);
            }
            20%, 40% {
                transform: rotate(12deg);
            }
        }

        @keyframes bounce-subtle {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-5px);
            }
        }

        @keyframes shine {
            0% {
                left: -100%;
            }
            20%, 100% {
                left: 100%;
            }
        }

        /* Shine Effect */
        .floating-appointment-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 50%;
            height: 100%;
            background: linear-gradient(
                90deg,
                transparent,
                rgba(255, 255, 255, 0.6),
                transparent
            );
            animation: shine 3s infinite;
            pointer-events: none;
        }

        /* Hover Glow Effect */
        .floating-appointment-btn:hover::after {
            content: '';
            position: absolute;
            inset: -2px;
            background: linear-gradient(45deg, #f6c453, #ffe3a3, #f6c453, #ffe3a3);
            border-radius: 50px;
            z-index: -1;
            opacity: 0.6;
            filter: blur(10px);
            animation: rotate-glow 3s linear infinite;
        }

        @keyframes rotate-glow {
            0% {
                filter: blur(10px) hue-rotate(0deg);
            }
            100% {
                filter: blur(10px) hue-rotate(360deg);
            }
        }

        /* Ripple Effect */
        @keyframes ripple {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(4);
                opacity: 0;
            }
        }

        .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            width: 20px;
            height: 20px;
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        }

        /* Transition effects */
        .floating-appointment-btn.opacity-0 {
            opacity: 0 !important;
        }

        .floating-appointment-btn.opacity-100 {
            opacity: 1 !important;
        }

        .floating-appointment-btn.scale-0 {
            transform: scale(0) !important;
        }

        .floating-appointment-btn.scale-100 {
            transform: scale(1) !important;
        }

        .floating-appointment-btn.pointer-events-none {
            pointer-events: none !important;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
            .floating-appointment-btn {
                bottom: 1.5rem;
                right: 1.5rem;
                width: 64px;
                height: 64px;
                padding: 0;
                justify-content: center;
            }

            .floating-btn-text {
                display: none;
            }

            .floating-btn-icon {
                font-size: 1.875rem;
            }
        }

        @media (max-width: 480px) {
            .floating-appointment-btn {
                bottom: 1rem;
                right: 1rem;
                width: 56px;
                height: 56px;
            }

            .floating-btn-icon {
                font-size: 1.5rem;
            }
        }
    `;
    
    // Append styles to head
    document.head.appendChild(style);

    // Create the floating button
    const floatingButton = document.createElement('a');
    floatingButton.className = 'floating-appointment-btn';
    floatingButton.href = `mailto:${emailConfig.to}?subject=${encodeURIComponent(emailConfig.subject)}&body=${encodeURIComponent(emailConfig.body)}`;
    floatingButton.innerHTML = `
        <span class="floating-btn-icon">📅</span>
        <span class="floating-btn-text">Book Appointment</span>
    `;

    // Add ripple effect on click
    floatingButton.addEventListener('click', function(e) {
        console.log('Appointment button clicked');
        
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        
        const rect = floatingButton.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        floatingButton.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        // Insert the button as the last element in body
        document.body.appendChild(floatingButton);

        // Add entrance animation
        setTimeout(() => {
            floatingButton.style.opacity = '0';
            floatingButton.style.transform = 'scale(0) translateY(20px)';
            floatingButton.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
            
            requestAnimationFrame(() => {
                floatingButton.style.opacity = '1';
                floatingButton.style.transform = 'scale(1) translateY(0)';
            });
        }, 500);

        // Optional: Hide button on contact section
        const contactSection = document.querySelector('.contact');
        if (contactSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        floatingButton.classList.add('opacity-0', 'pointer-events-none', 'scale-0');
                        floatingButton.classList.remove('opacity-100', 'scale-100');
                    } else {
                        floatingButton.classList.add('opacity-100', 'scale-100');
                        floatingButton.classList.remove('opacity-0', 'pointer-events-none', 'scale-0');
                    }
                });
            }, {
                threshold: 0.1
            });

            observer.observe(contactSection);
        }
    }

})();