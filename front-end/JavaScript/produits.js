// recherche de l'id Produit pour effectuer la requete
const params = new URLSearchParams(document.location.search);
const urlID = params.get('_id');

// déclaration de ma nouvelle id dans mes fonctions - paramètres d'environnement
const idProduit = "http://localhost:3000/api/teddies/" + urlID;

let produitImage = document.getElementById("imageProduit");
let produitNom = document.getElementById("nomProduit");
let produitDescription = document.getElementById("descriptionProduit");
let produitPrix = document.getElementById("prixProduit");


// requête avec la nouvelle adresse 
fetch(idProduit)
    .then((produit) => produit.json())
    .then((produit) => {
        getFicheProduit(produit);
        choixCouleur(produit);
        ajoutPanier();
    })
    // gestion des erreurs
    .catch(function(error) {
        alert(error)
    })

// fonction de création de la fiche produit 
function getFicheProduit(produit) {
    produitImage.innerHTML += `<img src="${produit.imageUrl}" class="imgTeddy imgFicheProduit" alt="${produit.name}">`;
    produitNom.innerHTML += `<p>${produit.name}</p>`;
    produitDescription.innerHTML += `<p>${produit.description}</p>`;
    produitPrix.innerHTML += `<p>${conversionPrix(produit.price)}</p>`;
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

// fonction d'ajout au panier
function ajoutPanier() {
    // création de la constante du btn
    const btnAjoutPanier = document.getElementById("btnAjoutPanier");
    // écoute de l'evenement clic sur le btn d'ajout au panier 
    btnAjoutPanier.addEventListener("click", (event) => {
        event.preventDefault();

        // création constante pour choix de la couleur et récupération de la valeur
        const idCouleur = document.getElementById("choixCouleur");
        const choixCouleur = idCouleur.value;

        // création constante pour choix de la quantité et récupération de la valeur
        const idQuantite = document.getElementById("quantite");
        const choixQuantite = idQuantite.value;

        // création de l'obet pour l'ajout au panier
        let newProduit = {
            imageUrl: produitImage.innerHTML,
            name: produitNom.innerHTML,
            price: produitPrix.innerHTML,
            colors: choixCouleur,
            quantite: choixQuantite,
            _id: urlID
        };

        // déclaration d'une variable pour l'enregistrement des donnéesKey et value dans le localstorage
        // utilisation de JSON.PARSE pour récupérer les données présentes dans localstorage
        let produitAjoute = JSON.parse(localStorage.getItem("produit"));
        // si produits dans le localstorage

        if (produitAjoute < 1) {
            // Déclaration du tableau ou seront stockés les choix produits
            produitAjoute = [];
        }
        produitAjoute.push(newProduit);
        localStorage.setItem("produit", JSON.stringify(produitAjoute));
        popupConfirmation();

    });
}