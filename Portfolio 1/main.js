document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    if (mobileMenuButton) {
        const mobileMenu = document.createElement('div');
        mobileMenu.id = 'mobileMenu';
        mobileMenu.className = 'hidden md:hidden absolute top-16 right-0 bg-white shadow-lg rounded-lg p-4 z-50 w-48';
        mobileMenu.innerHTML = `
            <a href="index.html" class="block py-2 px-4 hover:bg-purple-50 rounded">Home</a>
            <a href="childhood.html" class="block py-2 px-4 hover:bg-purple-50 rounded">Childhood</a>
            <a href="education.html" class="block py-2 px-4 hover:bg-purple-50 rounded">Education</a>
            <a href="skills.html" class="block py-2 px-4 hover:bg-purple-50 rounded">Skills</a>
            <a href="aspirations.html" class="block py-2 px-4 hover:bg-purple-50 rounded">Aspirations</a>
            <a href="contact.html" class="block py-2 px-4 hover:bg-purple-50 rounded">Contact</a>
        `;
        document.body.appendChild(mobileMenu);

        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenu.contains(e.target) && e.target !== mobileMenuButton) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // Social media links
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.querySelector('i').classList[1].replace('fa-', '');
            alert(`This would link to your ${platform} profile in a real implementation`);
        });
    });

    // Set active nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (currentPage === linkPage) {
            link.classList.add('text-purple-500', 'border-b-4', 'border-purple-500');
            link.classList.remove('text-gray-500', 'hover:text-purple-500');
        }
    });

    // Homepage animations
    if (window.location.pathname.endsWith('index.html')) {
        const heroElements = document.querySelectorAll('.animate-fade-in');
        heroElements.forEach((el, i) => {
            el.style.animationDelay = `${i * 0.1}s`;
        });
    }
});