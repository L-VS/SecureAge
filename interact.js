// Gérer la barre de recherche
document.getElementById('searchBtn').addEventListener('click', function() {
    let searchQuery = document.getElementById('searchBar').value;
    let iframe = document.getElementById('iframeDisplay');
    iframe.src = `https://www.google.com/search?q=${searchQuery}`;
    saveHistory(searchQuery);
});

// Fonction pour sauvegarder les recherches dans l'historique
function saveHistory(query) {
    let historyList = document.getElementById('historyList');
    let newItem = document.createElement('li');
    newItem.innerText = query;
    historyList.appendChild(newItem);
}

// Enregistrer la page actuelle hors connexion
document.getElementById('savePageBtn').addEventListener('click', function() {
    let iframeSrc = document.getElementById('iframeDisplay').src;
    alert('Enregistrement de la page ' + iframeSrc + ' pour une utilisation hors ligne.');
    // Implémenter une fonctionnalité réelle d'enregistrement hors ligne
});

// Fonctionnalités à ajouter dans le futur
// - Suppression de publicité
// - IA pour assistance personnalisée
// - Gestion des pages hors ligne et récupération des données