const order = JSON.parse(localStorage.getItem("order"));

// affiche Mes informations
const recapitulatif = document.getElementById("recapitulatif");
recapitulatif.innerHTML +=
    `<p>Merci pour votre achat sur notre site !</p>
    <p>Elle porte la référence <span>${order.orderId}</span>.</p>`;

localStorage.clear();