// utilisation de JSON.PARSE pour récupérer les données présentes dans localstorage
let produitAjoute = JSON.parse(localStorage.getItem("produit"));

// envoi des informations dans la div du panier
const tableauPanier = document.getElementById("tableauPanier");
console.log(tableauPanier);

// si le panier est vide
if (produitAjoute === null) {
    console.log("je suis vide");
} else {
    console.log("je ne suis pas vide");
    // si le panier n'est pas vide

}