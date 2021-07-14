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
        choixCouleur(produit);
    })
    // gestion des erreurs
    .catch(function(error) {
        alert(error)
    })

// fonction de création de la fiche produit 
function getFicheProduit(produit) {
    let produitImage = document.getElementById("imageProduit");
    produitImage.innerHTML += `<img src="${produit.imageUrl}" class="img-fluid img-thumbnail" alt="${produit.name}">`;
    let produitNom = document.getElementById("nomProduit");
    produitNom.innerHTML += `<h3>${produit.name}</h3>`;
    let produitDescription = document.getElementById("descriptionProduit");
    produitDescription.innerHTML += `<h3>${produit.description}</h3>`;
    let produitPrix = document.getElementById("prixProduit");
    produitPrix.innerHTML += `<h4>${conversionPrix(produit.price)}</h4>`;
}

// fonction pour le choix de la couleur
function choixCouleur(produit) {
    let choixCouleur = document.getElementById("choixCouleur");
    for (let i = 0; i < produit.colors.length; i++) {
        let option = document.createElement("option");
        option.innerText = produit.colors[i];
        choixCouleur.appendChild(option);
    }
}