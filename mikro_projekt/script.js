const form = document.getElementById('contactForm');

if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        alert('Dziękuje za kontakt! Odezwę sie jak najszybiej mogę!');

        form.reset();
    });
}