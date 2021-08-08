let confirmation = localStorage.getItem("orderId");

// affiche Mes informations
const recapitulatif = document.getElementById("recapitulatif");
recapitulatif.innerHTML +=
    `<h3>Récapitulatif de votre commande</h3>
    <p>Référence n° : <span>${confirmation}</span>.</p>`;

localStorage.clear();