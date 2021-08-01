main();

function main() {
    afficherPanier();
    viderPanier();
    afficherFormulaire();
}

function afficherPanier() {
    ////// utilisation de JSON.PARSE pour récupérer les données présentes dans localstorage
    let localS = JSON.parse(localStorage.getItem("produit"));
    ////// récupération de mes variables
    const panierPlein = document.getElementById("panierPlein");
    const formulaireCommande = document.getElementById("formulaireCommande");
    const panierVide = document.getElementById("panierVide");
    ////// si le panier est vide
    if (localS < 1) {
        panierPlein.classList.add("d-none");
        formulaireCommande.classList.add("d-none");
    } else {
        // si le panier n'est pas vide
        panierVide.classList.add("d-none");
        formulaireCommande.classList.add("d-none");
        let listeProduitPanier = [];
        // pour chaque objet on créer une boucle qui affichera les produits du localstorage
        for (cpt = 0; cpt < localS.length; cpt++) {
            listeProduitPanier = listeProduitPanier + `
        <tr class="tableau">
        <td class="liste"><span>${localS[cpt].name}</span></td>
        <td class="liste"><span>${localS[cpt].colors}</span></td>
        <td class="liste"><span> ${localS[cpt].quantite}</span></td>
        <td class="liste"><span>${localS[cpt].price}</span></td>
        </tr>`;
        }
        if (cpt == localS.length) {
            let listePanier = document.getElementById("listeProduitPanier");
            listePanier.innerHTML = listeProduitPanier;
        }
    }
}

//fonction pour vider le panier lorsque le client appuie sur vider le panier
function viderPanier() {
    const btnViderPanier = document.getElementById("viderPanier");
    btnViderPanier.addEventListener("click", (e) => {
        e.preventDefault;
        localStorage.clear();
        location.reload();
    });
}

// fonction pour l'affichage du formulaire lorsque le client appuie sur valider panier
function afficherFormulaire() {
    const btnValidationPanier = document.getElementById("validationPanier");
    const formulaireCommande = document.getElementById("formulaireCommande");
    btnValidationPanier.addEventListener("click", (e) => {
        e.preventDefault;
        formulaireCommande.classList.toggle("d-none");
    });
}