function showSurprise() {
    const welcomeCard = document.querySelector('.glass-card');
    
    // Añadimos una animación de salida
    welcomeCard.style.transition = 'all 0.5s ease';
    welcomeCard.style.opacity = '0';
    welcomeCard.style.transform = 'scale(0.9)';

    // Redirigir a la página de la carta después de 500ms
    setTimeout(() => {
        window.location.href = 'carta.html';
    }, 500);
}

function openLetter() {
    const envelope = document.querySelector('.envelope-container');
    envelope.classList.add('open');
    
    setTimeout(() => {
        document.getElementById('extra-content').style.opacity = '1';
    }, 1000);
}

// Generador de corazones flotantes de fondo
function createParticles() {
    const container = document.getElementById('particles-js');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.color = 'rgba(255,255,255,0.3)';
        heart.style.zIndex = '-1';
        heart.style.animation = `floatUp ${Math.random() * 5 + 5}s linear infinite`;
        container.appendChild(heart);
    }
}

// Estilo inyectado para la animación de las partículas
const style = document.createElement('style');
style.innerHTML = `
@keyframes floatUp {
    to {
        transform: translateY(-110vh) rotate(360deg);
        opacity: 0;
    }
}`;
document.head.appendChild(style);

function revealSecret() {
    const messageContainer = document.getElementById('secret-message');
    const btn = event.target;
    
    // Cambiamos el texto y mostramos
    messageContainer.innerText = "YO TE QUIERO EN MI VIDA PARA SIEMPRE";
    messageContainer.classList.add('reveal');
    
    // Feedback visual en el botón
    btn.style.transform = "scale(0.9) translateY(-5px)";
    btn.style.background = "var(--accent)";
    
    setTimeout(() => {
        btn.style.transform = "translateY(-5px)";
    }, 150);

    // Si ya estaba revelado, hace un pequeño destello
    if(messageContainer.classList.contains('reveal')) {
        messageContainer.style.transition = 'none';
        messageContainer.style.filter = 'brightness(2)';
        setTimeout(() => {
            messageContainer.style.transition = 'all 1s ease';
            messageContainer.style.filter = 'brightness(1)';
        }, 50);
    }
}