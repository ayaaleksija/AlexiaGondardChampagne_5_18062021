////// utilisation de JSON.PARSE pour récupérer les données présentes dans localstorage
let localS = JSON.parse(localStorage.getItem("produit"));

main();

function main() {
    afficherPanier();
    viderPanier();
    afficherFormulaire();
    validationFormulaireCommande();
}



function afficherPanier() {
    ////// récupération de mes variables
    const panierPlein = document.getElementById("panierPlein");
    const formulaireCommande = document.getElementById("formulaireCommande");
    const panierVide = document.getElementById("panierVide");
    ////// si le panier est vide
    if (localStorage.getItem("produit") < 1) {
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


function validationFormulaireCommande() {
    const regexName = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
    const regexAddress = /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$/;
    const regexCity = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/;
    // création de l'objet fiche client
    let ficheClient = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email").value,
    };
    console.log(ficheClient);

    const validationCommande = document.getElementById("order");
    validationCommande.addEventListener("click", (e) => {
        e.preventDefault();
        // condition pour valider si le formulaire est correctement rempli par le client
        if (((regexName.test(ficheClient.firstName) === false) ||
                (regexEmail.test(ficheClient.email) === false) ||
                (regexAddress.test(ficheClient.address) === false) ||
                (regexCity.test(ficheClient.city) === false))) {
            messageError = "Merci de vérifier les champs à compléter.";
        }
        // déclaration d'un tableai des produits acheté à push
        let produitsAchetes = [];
        produitsAchetes.push(localS);

        let commande = {
            contact: ficheClient,
            products: produitsAchetes,
        };

        // Envoi de la requete POST pour le backend
        const choixClient = {
            method: "POST",
            body: JSON.stringify(commande),
            headers: { "Content-Type": "application/json" },
        };

        fetch("http://localhost:3000/api/teddies/order", choixClient)
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("commande", JSON.stringify(data));
                document.location.href = "commande.html";
            })
            .catch((erreur) => console.log("erreur : " + erreur));
    });
}