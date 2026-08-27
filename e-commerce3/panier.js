let panier = JSON.parse(localStorage.getItem("panier")) || [];
const panierContainer = document.getElementById("panier");
const sousTotalElement = document.getElementById("sousTotal");
const livraisonElement = document.getElementById("livraison");
const totalElement = document.getElementById("total");

function afficherPanier() {
    panierContainer.innerHTML = "";
    let sousTotal = 0;
    if (panier.length === 0) {
        panierContainer.innerHTML = `
            <p class="panier-vide">
                Votre panier est vide.
            </p>
        `;
        sousTotalElement.textContent = "0";
        livraisonElement.textContent = "0";
        totalElement.textContent = "0";
        return;
    }
    panier.forEach(function(produit, index) {
        if (!produit.quantite) {
            produit.quantite = 1;
        }
        let prix = parseInt(
            produit.prix.replace(/\D/g, "")
        );
        sousTotal += prix * produit.quantite;
        panierContainer.innerHTML += `
            <div class="produit-panier">
                <img class="pann"
                    src="${produit.image}"
                    alt="${produit.nom}"
                >
                <div class="info-produit">
                    <h3>
                        ${produit.nom}
                    </h3>
                    <p>
                        ${prix} fr
                    </p>
                    <div class="quantite">
                        <button class="moins"
                            onclick="diminuerQuantite(${index})">
                            -
                        </button>
                        <span>
                            ${produit.quantite}
                        </span>
                        <button class="plus"
                            onclick="augmenterQuantite(${index})">
                            +
                        </button>
                    </div>
                    <button
                        class="supprimer"
                        onclick="supprimerProduit(${index})">
                        Supprimer
                    </button>
                </div>
            </div>
        `;
    });
    let livraison = 0;
    if (sousTotal < 50000) {
        livraison = 2000;
    }
    let total = sousTotal + livraison;
    sousTotalElement.textContent = sousTotal;
    livraisonElement.textContent = livraison;
    totalElement.textContent = total;
    localStorage.setItem(
        "panier",
        JSON.stringify(panier)
    );
}

function augmenterQuantite(index) {
    panier[index].quantite++;
    localStorage.setItem(
        "panier",
        JSON.stringify(panier)
    );
    afficherPanier();
}

function diminuerQuantite(index) {
    if (panier[index].quantite > 1) {
        panier[index].quantite--;
    } else {
        panier.splice(index, 1);
    }
    localStorage.setItem(
        "panier",
        JSON.stringify(panier)
    );
    afficherPanier();
}

function supprimerProduit(index) {
    panier.splice(index, 1);
    localStorage.setItem(
        "panier",
        JSON.stringify(panier)
    );
    afficherPanier();
}

document.getElementById("viderPanier").addEventListener("click", function() {
        panier = [];
        localStorage.removeItem("panier");
        afficherPanier();
    });

document.getElementById("commander").addEventListener("click", function() {
        if (panier.length === 0) {
            alert("Votre panier est vide.");
        } else {
            alert("Commande prête !");
        }
    });

afficherPanier();