// Función para mostrar u ocultar la carta de amor
function toggleLetter() {
    const loveLetter = document.getElementById('love-letter');
    const toggleBtn = document.getElementById('toggle-btn');

    if (loveLetter.classList.contains('show')) {
        loveLetter.classList.remove('show');
        loveLetter.classList.add('hidden'); // Ocultar la carta
        toggleBtn.style.display = 'none'; // Ocultar el botón al ocultar la carta

        // Mover la imagen al primer plano
        document.body.style.backgroundImage = "url('corazón.webp')"; // Cambiar a la imagen de fondo
    }
}

// Añadir una pequeña demora antes de mostrar la carta al cargar
window.onload = function() {
    setTimeout(() => {
        const loveLetter = document.getElementById('love-letter');
        loveLetter.classList.add('show'); // Mostrar la carta después de que la página se haya cargado
    }, 100); // Aparece inmediatamente
};￼Enter
