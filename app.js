// Fonction pour basculer l'état de favori
function toggleFavori(element) {
    element.classList.toggle('favori');

    const bonbonElement = element.closest('.bonbon');
    const bonbonId = bonbonElement.id;
    const favoris = JSON.parse(localStorage.getItem('favoris')) || [];

    if (element.classList.contains('favori')) {
        // Ajouter aux favoris
        if (!favoris.includes(bonbonId)) {
            favoris.push(bonbonId);
        }
    } else {
        // Supprimer des favoris
        const index = favoris.indexOf(bonbonId);
        if (index > -1) {
            favoris.splice(index, 1);
        }
    }

    localStorage.setItem('favoris', JSON.stringify(favoris));
}

// Fonction pour ajouter au panier
function ajouterAuPanier(bonbonId) {
    // Sélectionner le bonbon en utilisant l'ID passé en argument
    const bonbonElement = document.getElementById(bonbonId);

    if (!bonbonElement) {
        console.error(`Aucun élément trouvé avec l'ID: ${bonbonId}`);
        return;
    }

    // Récupérer les détails du bonbon sélectionné
    const arome = bonbonElement.querySelector('#arome');
    const gelifiant = bonbonElement.querySelector('#gelifiant');
    const whey = bonbonElement.querySelector('#whey');
    const stevia = bonbonElement.querySelector('#stevia');
    const ppDePp = bonbonElement.querySelector('#ppDePp');

    // Vérifier que tous les éléments existent
    if (!arome || !gelifiant || !whey || !stevia || !ppDePp) {
        console.error('Un ou plusieurs éléments requis sont manquants dans le bonbon:', bonbonId);
        return;
    }

    // Créer un objet bonbon avec les détails nécessaires
    const bonbon = {
        id: bonbonId, // ID unique du bonbon
        arome: arome.querySelector('h2').textContent,
        gelifiant: gelifiant.querySelector('h2').textContent,
        whey: whey.querySelector('h2').textContent,
        stevia: stevia.querySelector('h2').textContent,
        ppDePp: ppDePp.querySelector('h2').textContent
    };

    // Ajouter le bonbon au panier (simulé)
    ajouterAuPanierSimule(bonbon);

    // Afficher une confirmation (optionnel)
    alert(`Le bonbon ${bonbon.arome} a été ajouté au panier.`);
}

// Fonction pour simuler l'ajout au panier (à adapter selon votre logique d'application)
function ajouterAuPanierSimule(bonbon) {
    // Logique de simulation d'ajout au panier
    console.log('Ajout au panier :', bonbon);
}
