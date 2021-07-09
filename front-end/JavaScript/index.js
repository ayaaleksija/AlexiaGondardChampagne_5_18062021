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
    for (let produit of data) {
        //recupère l'élément "liste" dans le HTML
        let fiche = document.getElementById("liste");
        // création de la fiche produit
        fiche.innerHTML +=
            `<div class="col-sm-12 col-md-6 col-lg-6 pb-3  ">
                <img src="${produit.imageUrl}" class="img-fluid" alt="${produit.name}">
                    <h5 class="card-title">${produit.name}</h5>
                    <h5 class="card-title">${produit.price}</h5>
                    <p class="card-text text-truncate">${produit.description}</p>
                    <button> Acheter ce produit </button>
            </div>`;
    }
}