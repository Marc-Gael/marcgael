// Interaction pour le bouton "En savoir plus"
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('passion-btn');
    const details = document.getElementById('passion-details');

    button.addEventListener('click', () => {
        if (details.classList.contains('hidden')) {
            details.classList.remove('hidden');
            button.textContent = "Réduire";
        } else {
            details.classList.add('hidden');
            button.textContent = "En savoir plus";
        }
    });
});