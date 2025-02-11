// Sélectionner le bouton et le paragraphe où afficher le message
const button = document.getElementById('messageButton');
const messageElement = document.getElementById('message');

// Fonction appelée lorsqu'on clique sur le bouton
button.addEventListener('click', function() {
    messageElement.textContent = 'Merci d\'avoir cliqué ! 😊';
});