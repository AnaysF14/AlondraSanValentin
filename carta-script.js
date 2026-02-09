function createFlotantes() {
    const container = document.getElementById('particles-container');
    const imagenes = [
        'https://pngimg.com/uploads/rose/rose_PNG639.png', 
        'https://pngimg.com/uploads/rose/rose_PNG651.png'
    ];
    
    setInterval(() => {
        const img = document.createElement('img');
        img.src = imagenes[Math.floor(Math.random() * imagenes.length)];
        img.className = 'floating-img';
        const size = Math.random() * 25 + 15;
        img.style.width = size + 'px';
        img.style.left = Math.random() * 100 + 'vw';
        const duration = Math.random() * 5 + 5;
        img.style.animationDuration = duration + 's';
        container.appendChild(img);
        setTimeout(() => img.remove(), duration * 1000);
    }, 600);
}

function openMechanism() {
    document.getElementById('envelope').classList.add('open');
    document.getElementById('finalSurprise').classList.remove('visible');
}

function flipPage(event) {
    event.stopPropagation();
    document.getElementById('flippingPage').classList.add('flipped');
    setTimeout(() => {
        document.getElementById('page1').classList.add('page-out');
    }, 600);
}

function closeLetter(event) {
    event.stopPropagation();
    document.getElementById('envelope').classList.remove('open');
    
    // Mostramos el corazón
    setTimeout(() => {
        document.getElementById('finalSurprise').classList.add('visible');
        // Reset del libro para la próxima apertura
        document.getElementById('flippingPage').classList.remove('flipped');
        document.getElementById('page1').classList.remove('page-out');
    }, 800);
}

window.onload = createFlotantes;