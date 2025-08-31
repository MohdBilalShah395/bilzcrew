//javascript 

document.addEventListener("DOMContentLoaded", () => {
    // Hero title animation
    gsap.from(".hero-title span", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
    });

    // Hero description
    gsap.from(".hero-description", {
        y: 50,
        opacity: 0,
        delay: 0.3,
        duration: 1,
        ease: "power2.out",
    });

    //  for Buttons
    gsap.from(".hero-buttons a", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.2,
        delay: 0.6, // thoda late start
        clearProps: "all" 
    });

    // Section titles animation
    gsap.utils.toArray(".section-title").forEach(title => {
        gsap.from(title, {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: title,
                start: "top 85%",
            }
        });
    });

    // Image animations
    gsap.utils.toArray("img").forEach(img => {
        gsap.from(img, {
            opacity: 0,
            scale: 0.9,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: img,
                start: "top 85%",
            }
        });
    });
});
//-----------------------------------------------------------------------------------
//contact 
  // Animate Heading
  gsap.from(".container h1", {
    scrollTrigger: {
      trigger: ".container",
      start: "top 80%",
    },
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });

  // Animate Paragraph
  gsap.from(".container p", {
    scrollTrigger: {
      trigger: ".container",
      start: "top 80%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power2.out"
  });




// Mobile Navigation Toggle 
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});
// Smooth Scrolling for Navigation Links 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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
// Navbar Background on Scroll 
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(17, 24, 39, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(17, 24, 39, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});
// Form Submission Handler 
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        //  loading state 
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        try {
            //  form submission 
            await new Promise(resolve => setTimeout(resolve, 2000));
            // Show success message alert
            alert('Message sent successfully! We\'ll get back to you soon.');
            contactForm.reset();
        } catch (error) {
            alert('Failed to send message. Please try again.');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}
// Scroll Animations 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);
// Observe all sections for animations 
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});
// Back to Top Button 
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑';
backToTopButton.className = 'back-to-top';
Object.assign(backToTopButton.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    opacity: '0',
    visibility: 'hidden',
    transition: 'all 0.3s ease',
    zIndex: '1000'
});
document.body.appendChild(backToTopButton);
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.opacity = '1';
        backToTopButton.style.visibility = 'visible';
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.visibility = 'hidden';
    }
});
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Initialize all functionality 
document.addEventListener('DOMContentLoaded', () => {
    console.log('BilzCrew website initialized successfully!');
});


// career 
    // Minimal client-side handling: prevent default and show a friendly message.
        document.getElementById('apply-form').addEventListener('submit', function (e) {
          e.preventDefault();
          var resp = document.getElementById('apply-response');
          resp.style.display = 'block';
          resp.innerHTML = '<strong>Thanks!</strong> Your application has been received. We will review and contact you at the email you provided.';
          this.reset();
          resp.scrollIntoView({behavior: 'smooth'});
        });