document.addEventListener("DOMContentLoaded", () => {
    // Sélectionne tous les liens de navigation
    const links = document.querySelectorAll('a');

    // Fonction pour ajouter la classe fade-out et retarder le changement de page
    function handleLinkClick(event) {
        // Si le lien a l'attribut target="_blank", on le laisse s'ouvrir normalement
        if (event.currentTarget.target === "_blank") return;

        event.preventDefault(); // Empêche le changement de page immédiat
        const targetUrl = event.currentTarget.href; // Récupère l'URL du lien cliqué

        // Ajoute la classe fade-out
        document.body.classList.add('fade-out');

        // Attendre la fin de l'animation de fondu avant de changer de page
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 500); // Durée de l'animation CSS
    }

    // Attache l'événement fade-out sur chaque lien
    links.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });

   
});

window.addEventListener("load", () => {
    // Vérifie si l'écran est en format "mobile" (largeur <= 768px)
    if (window.matchMedia("(max-width: 768px)").matches) {
        setTimeout(() => {
            window.scrollTo({
                top: window.innerHeight / 1, // Défile à 1/4 de la hauteur de l'écran
                behavior: "smooth" // Effet de défilement fluide
            });
        }, 500); // Délai pour laisser le temps au contenu de se charger
    }
    // Sinon (pour les écrans de bureau), aucune action n'est effectuée
});

