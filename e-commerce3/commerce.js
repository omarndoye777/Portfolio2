const coeur = document.querySelectorAll('.heart1');
const coeur1 = document.querySelectorAll('.heart');
 
coeur.forEach(function (btn) {
    btn.addEventListener('click', function () {
        const isLiked = btn.classList.toggle('liked');
        const icon = btn.querySelector('.heart-icon');
        if (isLiked) {
             icon.innerHTML = '&#9829;'; // ♥ coeur plein
        }
       else {
             icon.innerHTML = '&#9825;'; // ♡ coeur vide
       }
    });
});
coeur1.forEach(function (btn) {
    btn.addEventListener('click', function () {
        const isLiked = btn.classList.toggle('liked');
        const icon = btn.querySelector('.heart-icon');
        if (isLiked) {
             icon.innerHTML = '&#9829;';
        }
       else {
             icon.innerHTML = '&#9825;';
       }
    });
});

document.querySelectorAll('.bagg').forEach(function (btn) {
    btn.addEventListener('click', function () {
        const produit = {
            nom: btn.dataset.nom,
            prix: btn.dataset.prix,
            image: btn.dataset.image
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
        const texteInitial = btn.textContent;
        btn.textContent = "Ajoute \u2713";
        btn.disabled = true;
        setTimeout(function () {
            btn.textContent = texteInitial;
            btn.disabled = false;
        }, 1000);
    });
});
async function chargerProduits(categorieChoisie) {
    let grille = document.getElementById("nosprod");
    if (categorieChoisie === "Tout") {
        window.location.href = "commerce.html";
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
                        <p style="font-weight:bold;">${produit.nom}</p>
                        <p>${produit.prix} fr</p>
                        <button>Add to bag</button>
                    </div>
                </li>`;
        }
    }

    html += `
            </ul>
        </div>`;

    grille.innerHTML = html;
}