// paramètre d'environnement

const url = "http://localhost:3000/api/teddies";

// prix en cts, fonction de conversion du prix en euros
function conversionPrix(produitPrix) {
    let prix = `${produitPrix}`;
    prix = Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', code: "€", minimumFractionDigits: 2, }).format(prix / 100);
    return prix;
}