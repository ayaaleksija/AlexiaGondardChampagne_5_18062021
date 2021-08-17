// paramètre d'environnement

const url = "http://localhost:3000/api/teddies";

// prix en cts, fonction de conversion du prix en euros
function conversionPrix(produitPrix) {
    let prix = `${produitPrix}`;
    prix = Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', code: "€", }).format(prix / 100);
    return prix;
}

function popupConfirmation() {
    if (window.confirm(`Votre produit a bien été ajouté au panier!
OK pour aller au panier
ou ANNULER pour continuer votre shopping!`)) {
        window.location.href = "panier.html";
    } else {
        window.location.assign = "../index.html";
    }
}