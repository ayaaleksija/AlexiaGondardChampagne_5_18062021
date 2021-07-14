// paramètre d'environnement

const url = "http://localhost:3000/api/teddies";
const urlId = "http://localhost:3000/api/teddies/${idProduit}";

// prix en cts, fonction de conversion du prix en euros
function conversionPrix(produitPrix) {
    let prix = `${produitPrix}`;
    prix = Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', code: "€", minimumFractionDigits: 2, }).format(prix / 100);
    return prix;
}

// création de l'objet / class de mon nounours
class Produit {
    constructor(id, nom, description, prix, couleur, quantite, image) {
        this.id = id;
        this.name = nom;
        this.description = description;
        this.prix = prix;
        this.couleur = couleur;
        this.quantite = quantite;
        this.image = image;
    }
}