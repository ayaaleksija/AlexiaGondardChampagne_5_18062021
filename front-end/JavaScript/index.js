//fetch de l'URL - récupération des données
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        addFiche(data);
    })
    // gestion des erreurs
    .catch(function(error) {
        alert(error)
    })


function addFiche(data) {
    //création d'une boucle pour chaque fiche produit
    for (produit of data) {
        //recupère l'élément "liste" dans le HTML
        let fiche = document.getElementById("liste");
        // déclaration de la variable prix pour utiliser cette variable formatée
        let prix = conversionPrix(produit.price);
        // création de la fiche produit
        fiche.innerHTML +=
            `<div class="container-produit">
                <div class="card bg-light border rounded">
                        <img src="${produit.imageUrl}" class="img-fluid p-1 img-thumbnail" alt="${produit.name}">
                        <h3 class="card-title">${produit.name}</h3>
                        <h4 class="card-title">${prix}</h4>
                        <a href="./front-end/produits.html?_id=${produit._id}"><button> Voir plus </button></a>
                <div>
            </div>`;
    }
}