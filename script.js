// This script adds additional functionality beyond what Alpine.js provides

document.addEventListener('DOMContentLoaded', function() {
    // Handle parallax effect on scroll for hero section
    const heroSection = document.getElementById('hero-section');
    const myWorkSection = document.getElementById('my-work-section');
    const header = document.querySelector('header');
    
    let lastScrollTop = 0;
    
    // Function to handle scroll effects
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Handle header visibility on scroll
        if (scrollPosition > 100) { // Only apply after scrolling a bit
            if (scrollPosition > lastScrollTop) {
                // Scrolling down - hide header
                header.classList.add('header-hidden');
            } else {
                // Scrolling up - show header
                header.classList.remove('header-hidden');
            }
        } else {
            // At the top - always show header
            header.classList.remove('header-hidden');
        }
        
        // Update last scroll position
        lastScrollTop = scrollPosition;
        
        // Parallax effect for hero section
        if (heroSection) {
            heroSection.style.backgroundPositionY = `calc(50% + ${scrollPosition * 0.1}px)`;
        }
        
        // My Work section animation
        if (myWorkSection) {
            const sectionTop = myWorkSection.offsetTop;
            const sectionHeight = myWorkSection.offsetHeight;
            const scrollTriggerPoint = sectionTop + windowHeight / 2;
            
            // Check if we've scrolled past the trigger point
            if (scrollPosition > scrollTriggerPoint) {
                myWorkSection.classList.add('show-gallery');
            } else {
                myWorkSection.classList.remove('show-gallery');
            }
            
            // Parallax effect for the heading based on scroll position
            const scrollProgress = (scrollPosition - sectionTop) / sectionHeight;
            if (scrollProgress >= 0 && scrollProgress <= 1) {
                const headingElement = myWorkSection.querySelector('.artists-heading');
                const subheadingElement = myWorkSection.querySelector('.artists-subheading');
                
                if (headingElement && subheadingElement) {
                    // Apply parallax effect to heading
                    const translateY = Math.min(scrollProgress * 100, 50);
                    const opacity = Math.max(1 - scrollProgress * 1.5, 0.2);
                    headingElement.style.transform = `translateY(-${translateY}px)`;
                    headingElement.style.opacity = opacity;
                    
                    // Show subheading as we scroll
                    if (scrollProgress > 0.2) {
                        subheadingElement.style.transform = 'translateY(0)';
                        subheadingElement.style.opacity = Math.min(scrollProgress * 2, 1);
                    } else {
                        subheadingElement.style.transform = 'translateY(20px)';
                        subheadingElement.style.opacity = 0;
                    }
                }
            }
        }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Run once on load to set initial states
    handleScroll();
    
    // Force show the gallery initially for testing
    setTimeout(() => {
        if (myWorkSection) {
            myWorkSection.classList.add('show-gallery');
        }
    }, 500);
    
    // Preload images for better performance
    const preloadImages = () => {
        const imageUrls = [
            'images/art/Bodypaint%20Brigitte-07.jpg',
            'images/art/DSC00329.jpg',
            'images/art/DSC08399.jpg'
        ];
        
        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    };
    
    preloadImages();
});
