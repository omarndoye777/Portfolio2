document.getElementById("nosprod").addEventListener('click', function (e) {
    const coeur = e.target.closest('.heart');
    if (coeur) {
        const isLiked = coeur.classList.toggle('liked');
        const icon = coeur.querySelector('.heart-icon');
        icon.innerHTML = isLiked ? '&#9829;' : '&#9825;';
        return;
    }
    const bouton = e.target.closest('.bagg1');
    if (bouton) {
        const produit = {
            nom: bouton.dataset.nom,
            prix: bouton.dataset.prix,
            image: bouton.dataset.image
        };

        let panier = JSON.parse(localStorage.getItem("panier")) || [];
        const existant = panier.find(p => p.nom === produit.nom && p.image === produit.image);
        if (existant) {
            existant.quantite = (existant.quantite || 1) + 1;
        } else {
            produit.quantite = 1;
            panier.push(produit);
        }
        localStorage.setItem("panier", JSON.stringify(panier));
        const texteInitial = bouton.textContent;
        bouton.textContent = "Ajoute \u2713";
        bouton.disabled = true;
        setTimeout(function () {
            bouton.textContent = texteInitial;
            bouton.disabled = false;
        }, 1000);
    }
});
async function chargerProduits(categorieChoisie) {
    let grille = document.getElementById("nosprod");
    if (categorieChoisie === "Tout") {
        window.location.href = "produit.html";
        return;
    }
    let reponse = await fetch('produit.json');
    let produits = await reponse.json();
    grille.innerHTML = "";
    let html = `
        <div class="vetements">
            <br>
            <h2 class="vetement">${categorieChoisie}</h2>
            <ul>`;
    for (let i = 0; i < produits.length; i++) {
        let produit = produits[i];
        if (produit.Categorie === categorieChoisie) {
            html += `
    <li>
        <div class="contents">

            <img src="${produit.place}" alt="${produit.nom}">

            <p style="font-weight:bold;">
                ${produit.nom}
            </p>

            <p>
                ${produit.prix} fr
            </p>

            <button 
                class="bagg1"
                data-nom="${produit.nom}"
                data-prix="${produit.prix}"
                data-image="${produit.place}">
                Add to bag
            </button>

        </div>
    </li>
`;
        }
    }

    html += `
            </ul>
        </div>`;

    grille.innerHTML = html;
}