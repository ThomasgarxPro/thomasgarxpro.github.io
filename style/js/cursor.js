// Sélectionne les éléments du curseur
const cursorLarge = document.querySelector('.cursor-large');
const cursorCenter = document.querySelector('.cursor-center');

// Suivre le mouvement de la souris
document.addEventListener('mousemove', (e) => {
    // Positionne le grand cercle
    cursorLarge.style.left = `${e.clientX}px`;
    cursorLarge.style.top = `${e.clientY}px`;

    // Positionne le petit cercle
    cursorCenter.style.left = `${e.clientX}px`;
    cursorCenter.style.top = `${e.clientY}px`;
});

// Détecte lorsque le curseur entre dans un lien
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursorCenter.classList.add('cursor-hover'); // Ajoute la classe pour le petit cercle rouge
    });
    

    link.addEventListener('mouseleave', () => {
        cursorCenter.classList.remove('cursor-hover'); // Enlève la classe pour revenir au noir
    });
});

// Dans les éléments portant la class grid-item
document.querySelectorAll('.grid-item , .grid-item2').forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursorCenter.classList.add('cursor-hover'); // Ajoute la classe pour le petit cercle rouge
    });
    

    link.addEventListener('mouseleave', () => {
        cursorCenter.classList.remove('cursor-hover'); // Enlève la classe pour revenir au noir
    });
});