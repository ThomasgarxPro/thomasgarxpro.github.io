document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('a');

    function handleLinkClick(event) {
        const link = event.currentTarget;

        // Si target="_blank", laisser l'ouverture normale
        if (link.target === "_blank") return;

        // Si c'est une ancre interne (commence par #) ou le même domaine + #, on ignore le fade
        const href = link.getAttribute('href');
        if (href.startsWith("#") || href.includes(`${window.location.pathname}#`)) return;

        event.preventDefault(); // Stop navigation
        const targetUrl = link.href;

        // Fade-out animation
        document.body.classList.add('fade-out');

        setTimeout(() => {
            window.location.href = targetUrl;
        }, 500); // Durée de l'animation
    }

    links.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });
});
