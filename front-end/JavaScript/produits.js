// recherche de l'id Produit pour effectuer la requete
const params = new URLSearchParams(document.location.search);
const urlID = params.get('_id');

// déclaration de ma nouvelle id dans mes fonctions - paramètres d'environnement
const idProduit = "http://localhost:3000/api/teddies/" + urlID;

// requête avec la nouvelle adresse 
fetch(idProduit)
    .then((produit) => produit.json())
    .then((produit) => {
        getFicheProduit(produit);
    })
    // gestion des erreurs
    .catch(function(error) {
        alert(error)
    })

// fonction de création de la fiche produit 
function getFicheProduit(produit) {
    let ficheProduit = document.getElementById("produits")
        // déclaration de la variable prix pour utiliser cette variable formatée
    let prix = conversionPrix(produit.price);
    ficheProduit.innerHTML +=
        `<div class="col-sm-12 col-md-6 pb-3  ">
            <div class="card bg-light md-5 border rounded p-3">
                <img src="${produit.imageUrl}" class="img-fluid p-1 img-thumbnail" alt="${produit.name}">
                <h3 class="card-title">${produit.name}</h3>
                <h4 class="card-title">${prix}</h4>
            <div>
        </div>`;
}