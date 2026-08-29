var projet1 = document.getElementById("pj1");
var projet2 = document.getElementById("pj2");
var projet3 = document.getElementById("pj3");
var projet4 = document.getElementById("pj4");
var projet5 = document.getElementById("pj5");
var projet6 = document.getElementById("pj6");
var projet7 = document.getElementById("pj7");
var description = document.getElementById("description");
projet1.addEventListener("click",()=>{
    description.innerHTML = ""
    var texte0 = document.createElement("p");
    var span1 = document.createElement("span");
    span1.style.color = "#6a6363"
    span1.textContent = "quiz"
    texte0.innerHTML =  "Ceci est un  petit jeu, un <span style='color:rgb(0, 229, 255);'>quiz</span> sur les pays et leurs <span style='color:rgb(0, 229, 255);'>capitales</span>.";
    texte0.style.marginBottom = "10px"
    var texte1 = document.createElement("h3");
    texte1.innerHTML = "Testez votre culture generale <a class='a' href='./Quiz/Quiz.html'>ici &#8592;</a>";
    texte0.className = "texte";
    texte1.className = "texte2";
    description.appendChild(texte0);
    description.appendChild(texte1);
    
});

projet2.addEventListener("click",()=>{
    description.innerHTML="";
    var texte2 = document.createElement("p");
    texte2.innerHTML =  "Ceci est une api <span style='color:rgb(0, 229, 255);'> meteo</span>. <br> Vous pouvez savoir quel <span style='color:rgb(0, 229, 255);;'>temps</span>  il fait partout dans le monde en saisissant le nom de la  <span style='color:rgb(0, 229, 255);;'>ville</span>.";
    texte2.style.marginBottom = "10px"
    var texte3 = document.createElement("h3");
    texte3.innerHTML = "Commencons par chez  <a class='a' href='./Meteo/Meteo.html'>vous &#8592;</a>";
    texte2.className = "texte";
    texte3.className = "texte2";
    description.appendChild(texte2);
    description.appendChild(texte3);
});

projet3.addEventListener("click",()=>{
    description.innerHTML="";
    var texte4 = document.createElement("p");
    texte4.innerHTML =  "Ceci est une <span> montre</span>. <br> Elle montre juste l' <span style='color:rgb(0, 229, 255);;'heure</span> en temps <span style='color:rgb(0, 229, 255);;'>reel</span>.";
    texte4.style.marginBottom = "10px"
    var texte5 = document.createElement("h3");
    texte5.innerHTML = "Quelle heure fait <a class='a' href='./Horloge/Horloge.html'>il ? &#8592;</a>";
    texte4.className = "texte";
    texte5.className = "texte2";
    description.appendChild(texte4);
    description.appendChild(texte5);
});

projet4.addEventListener("click",()=>{
    description.innerHTML="";
    var texte6 = document.createElement("p");
    texte6.innerHTML =  "Ceci est une <span> calculatrice</span> simple. <br> Vous pouvez faire des <span style='color:rgb(0, 229, 255);;'>operations</span> de base.";
    texte6.style.marginBottom = "10px"
    var texte7 = document.createElement("h3");
    texte7.innerHTML = "Quel font <a class='a' href='./Calculatrice/calculatrice.html'>1 + 1 ? &#8592;</a>";
    texte6.className = "texte";
    texte7.className = "texte2";
    description.appendChild(texte6);
    description.appendChild(texte7);
});

projet5.addEventListener("click",()=>{
    description.innerHTML="";
    var texte8 = document.createElement("p");
    texte8.innerHTML =  "Ceci est une <span> todo-list</span> simple. <br> Vous pouvez ecrire vos <span style='color:rgb(0, 229, 255);'>taches</span> et <span style='color:rgb(0, 229, 255);'>cliquer</span> sur cette derniere une fois la tache accomplie";
    texte8.style.marginBottom = "10px"
    var texte9 = document.createElement("h3");
    texte8.innerHTML = "Que voulez vous faire de votre journee d' <a class='a' href='./Todo-list/Todo.html'>aujourd'hui ? &#8592;</a>";
    texte8.className = "texte";
    texte9.className = "texte2";
    description.appendChild(texte8);
    description.appendChild(texte9);
});
projet6.addEventListener("click",()=>{
    description.innerHTML="";
    var texte10 = document.createElement("p");
    texte10.innerHTML =  "Ceci est un <span>convertisseur</span> simple. <br> Vous pouvez faire des conversion sur les <span style='color:rgb(0, 229, 255);'>distances, poids </span> et <span style='color:rgb(0, 229, 255);'>temperature</span>.";
    texte10.style.marginBottom = "10px";
    var texte11 = document.createElement("h3");
    texte11.innerHTML = "Quelle devises utilise votre pays pour mesurer le <a class='a' href='./convertisseur/convertisseur.html'>poids &#8592;</a>";
    texte10.className = "texte";
    texte11.className = "texte2";
    description.appendChild(texte10);
    description.appendChild(texte11);
});
projet7.addEventListener("click",()=>{
    description.innerHTML="";
    var texte12 = document.createElement("p");
    texte12.innerHTML =  "Ceci est un <span>site e-commerce</span>. <br> Vous pouvez voir toutes les fonctionnalites <span style='color:rgb(0, 229, 255);'>frontEnd</span> du site ajouter au <span style='color:rgb(0, 229, 255);'>panier</span> et passer vos <span style='color:rgb(0, 229, 255);'>commandes</span>.";
    texte12.style.marginBottom = "10px";
    var texte13 = document.createElement("h3");
    texte13.innerHTML = "Cliquez et faites vos  <a class='a' href='./e-commerce3/commerce.html'>commandes &#8592;</a>";
    texte12.className = "texte";
    texte13.className = "texte2";
    description.appendChild(texte12);
    description.appendChild(texte13);
});
