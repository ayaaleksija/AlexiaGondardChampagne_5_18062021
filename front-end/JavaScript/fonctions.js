// paramètre d'environnement

const url = "http://localhost:3000/api/teddies";

// prix en cts, fonction de conversion du prix en euros
function conversionPrix(produitPrix) {
    let prix = `${produitPrix}`;
    prix = Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', code: "€", minimumFractionDigits: 2, }).format(prix / 100);
    return prix;
}

function listeProduits(produit) {
    const listeProduits = document.getElementById("produitsAjoutes");
    listeProduits.innerHTML += `<tr class="text-center">
    <td><img src="${produit.imgurl}" class="img-fluid img-thumbnail" alt="${produit.name}"></td>
    <td><span>${produit.name}</span></td>
    <td><span>${produit.colors}</span></td>
    <td><span>${conversionPrix(produit.price)}</span></td>
    <td><span>${conversionPrix(produit.quantite * produit.price)}</span></td>
</tr>`;
}