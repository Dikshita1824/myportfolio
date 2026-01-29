// --- Theme Toggle Functionality ---
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

document.documentElement.setAttribute('data-theme', currentTheme);
updateIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let newTheme = theme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
});

function updateIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// --- Search Functionality ---
function executeSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const content = document.body.innerText.toLowerCase();
    
    if (query && content.includes(query)) {
        // Simple visual feedback - scrolls to first match
        window.find(query); 
    } else {
        alert("No matches found.");
    }
}

// --- Resume Link ---
function openResume() {
    // Replace 'resume.pdf' with your actual file path
    window.open('resume.pdf', '_blank');
}

// --- Contact Form Validation ---
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const status = document.getElementById('formStatus');

        if (name.length < 2) {
            status.innerText = "Please enter a valid name.";
            status.style.color = "red";
            return;
        }

        if (!email.includes('@')) {
            status.innerText = "Please enter a valid email.";
            status.style.color = "red";
            return;
        }

        status.innerText = "Message sent successfully!";
        status.style.color = "green";
        contactForm.reset();
    });
}

// --- Dynamic Footer Injection ---
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.getElementById('main-footer');
    if (footer) {
        footer.innerHTML = `
            <div class="container" style="padding: 4rem 0; border-top: 1px solid var(--border-color); margin-top: 4rem; text-align: center;">
                <p>&copy; ${new Date().getFullYear()} Alex Rivera. All rights reserved.</p>
                <div class="social-icons" style="margin-top: 1rem; font-size: 1.5rem; display: flex; justify-content: center; gap: 20px;">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-github"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        `;
    }
});