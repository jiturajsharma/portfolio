document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navbar links
    const navLinks = document.querySelectorAll(".nav-links a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").slice(1); // Remove the '#' from href
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Adjust for header height if necessary
                    behavior: "smooth"
                });
            }
        });
    });

    // Smooth scroll for the "Get in touch" button
    const getInTouchButton = document.querySelector(".resume-btn[href='#contact']");
    const contactSection = document.getElementById("contact");

    if (getInTouchButton && contactSection) {
        getInTouchButton.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({
                top: contactSection.offsetTop - 60, // Adjust for header height
                behavior: "smooth"
            });
        });
    }

    // Form submission alert
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you for reaching out! We'll get back to you soon.");
            form.reset(); // Optionally reset the form fields
        });
    }
});
