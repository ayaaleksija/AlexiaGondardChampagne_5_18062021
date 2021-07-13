// récupération de l'id produit pour l'affichage
let urlSearchParams = (new URL(document.location)).searchParams;
const idProduit = urlSearchParams.get("_id");



// fonction pour créer la fiche du produit
function addFiche(produit) {
    // fetch de l'url utilisation des données pour création des fiches produits
    fetch(urlId)
        .then((response) => response.json())
        .then((data) => {
            produit = data;
            addFiche(data);
        })
        // gestion des erreurs
        .catch(function(error) {
            alert(error)
        })
        // éléments à insérer dans la fiche de chaque produit
    let produitImage = document.getElementById(imageProduit)
    produitImage.innerHTML += `
            <img src="${produit.imageURL}" class="img-fluid img-thumbnail" alt="${produit.name}">
        `;
    let produitNom = document.getElementById(nomProduit)
    produitNom.innerHTML += `
            <h3 class="card-title" src="${produit.name}"</h3>
        `;
    let produitPrix = document.getElementById(prixProduit)
    produitPrix.innerHTML += `
            <h3 class="card-title" src="${produit.prix}"</h3>
        `;
    let produitDescription = document.getElementById(nomDescription)
    produitDescription.innerHTML += `
            <p class="card-title" src="${produit.description}"</p>
        `;
}