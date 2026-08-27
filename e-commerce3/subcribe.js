function validerFormulaire() {

    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;
    var motdepasse = document.getElementById("motdepasse").value;
    var formulaireValide = true;
      
    document.getElementById("Emailoblg").textContent = "";
    document.getElementById("passoblg").textContent = "";
    document.getElementById("Nomoblg").textContent = "";

    if (nom === "") {
        document.getElementById("Nomoblg").textContent = "*Le nom est obligatoire.";
        formulaireValide = false;
    }

    if (email === "") {
        document.getElementById("Emailoblg").textContent = "*L'email est obligatoire.";
        formulaireValide = false;
    }

    if (motdepasse.length < 6) {
        document.getElementById("passoblg").textContent = "*Le mot de passe doit avoir au moins 6 caractères.";
        formulaireValide = false;
    }

    if(formulaireValide){
      var resultat = document.getElementById("reussite");
      resultat.innerHTML = "Inscription reussit !!";
    }
}