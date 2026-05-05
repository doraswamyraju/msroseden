document.addEventListener('DOMContentLoaded', () => {
    console.log("Ms. Rose's Den - Systems Initialized");

    // Handle Header Active State
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Handle Option Box Selection
    const optionBoxes = document.querySelectorAll('.option-box');
    optionBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const parent = box.parentElement;
            if (parent.classList.contains('option-grid')) {
                parent.querySelectorAll('.option-box').forEach(b => b.classList.remove('active'));
            }
            box.classList.toggle('active');
        });
    });

    // Handle Toggles
    const toggles = document.querySelectorAll('.toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
        });
    });

    // Detailed Form Simulation
    const mainForm = document.querySelector('form');
    if (mainForm) {
        mainForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = mainForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            btn.disabled = true;
            btn.textContent = "PROCESSING PROTOCOL...";
            btn.style.opacity = "0.5";
            
            setTimeout(() => {
                btn.textContent = "ANALYSIS COMPLETE";
                btn.style.backgroundColor = "#222";
                alert("Your declaration has been encrypted and submitted to the Den. Await psychological clearance (48-72 hours).");
            }, 2000);
        });
    }

    // Scroll Effects for Navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = "1rem 5%";
            navbar.style.background = "rgba(8, 8, 8, 0.95)";
        } else {
            navbar.style.padding = "1.5rem 5%";
            navbar.style.background = "rgba(8, 8, 8, 0.85)";
        }
    });
});
