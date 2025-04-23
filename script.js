// This script adds additional functionality beyond what Alpine.js provides

document.addEventListener('DOMContentLoaded', function() {
    // Handle parallax effect on scroll for hero section
    const heroSection = document.getElementById('hero-section');
    const myWorkSection = document.getElementById('my-work-section');
    const header = document.querySelector('header');
    const navLeft = document.querySelector('.nav-left');
    const heroContent = document.querySelector('.hero-content');
    const heroVideo = document.getElementById('hero-video');
    
    let lastScrollTop = 0;
    
    // Cache DOM nodes outside scroll handler for efficiency
    const headingElement = myWorkSection ? myWorkSection.querySelector('.artists-heading') : null;
    const subheadingElement = myWorkSection ? myWorkSection.querySelector('.artists-subheading') : null;

    // Throttle scroll event using requestAnimationFrame
    let ticking = false;
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        // Header visibility
        if (scrollPosition > 100) {
            if (scrollPosition > lastScrollTop) {
                header.classList.add('header-hidden');
            } else {
                header.classList.remove('header-hidden');
            }
        } else {
            header.classList.remove('header-hidden');
        }
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

            if (scrollPosition > scrollTriggerPoint) {
                myWorkSection.classList.add('show-gallery');
            } else {
                myWorkSection.classList.remove('show-gallery');
            }

            // Parallax effect for the heading based on scroll position
            const scrollProgress = (scrollPosition - sectionTop) / sectionHeight;
            if (scrollProgress >= 0 && scrollProgress <= 1 && headingElement && subheadingElement) {
                const translateY = Math.min(scrollProgress * 100, 50);
                const opacity = Math.max(1 - scrollProgress * 1.5, 0.2);
                headingElement.style.transform = `translateY(-${translateY}px)`;
                headingElement.style.opacity = opacity;

                if (scrollProgress > 0.2) {
                    subheadingElement.style.transform = 'translateY(0)';
                    subheadingElement.style.opacity = Math.min(scrollProgress * 2, 1);
                } else {
                    subheadingElement.style.transform = 'translateY(20px)';
                    subheadingElement.style.opacity = 0;
                }
            }
        }
        ticking = false;
    };

    const onScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(handleScroll);
            ticking = true;
        }
    };
    window.addEventListener('scroll', onScroll);

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
