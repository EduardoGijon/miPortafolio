

//Inicializar EmailJS
emailjs.init('vPtmu6kUGEfqHdn0N');

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Prepara los parámetros del correo
    const templateParams = {
        title: document.getElementById('title').value,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Envía el correo
    emailjs.send('service_u9h8339', 'template_n2a4nb9', templateParams)
        .then(function(response) {
            alert('¡Gracias por tu mensaje! Te responderé pronto.');
            document.getElementById('contactForm').reset();
        }, function(error) {
            alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
        });
});

// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Cambiar el header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});