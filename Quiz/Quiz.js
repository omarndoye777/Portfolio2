var com = document.createElement("img");
com.src = "Comore_moroni.jpg";
com.className = "com";
var alg = document.createElement("img");
alg.src = "Algerie_alger.webp";
alg.className = "alg";
var ang = document.createElement("img");
ang.src = "Angola_Luanda.jpg"
ang.className = "ang";
var bot = document.createElement("img");
bot.src = "Botswana_gaborone.webp";
bot.className = "bot"
var esw = document.createElement("img");
esw.src = "Eswatini_mbabane.webp";
esw.className = "esw";
var div = document.getElementById("pour");
var QUestion = document.getElementById("hh1"); 
var btnoui = document.getElementById("Oui");
var btnnon = document.getElementById("Non");
var drapeau = document.getElementById("drapeau");
var question = document.getElementById("question");
var reponso = document.getElementById("reponse");
var liste = document.getElementById("liste");
btnnon.addEventListener("click", ()=>{
    QUestion.textContent = "";
    div.remove(document.getElementsByClassName(".btn"));
})
btnoui.addEventListener("click",()=>{
    QUestion.textContent = "";
    div.remove(document.getElementsByClassName(".btn"));
    var h1 = document.createElement("h1");
    h1.textContent = "Quelle est la capital de ce pays ?";
    question.appendChild(h1);
    liste.appendChild(com);

    var pretoria = document.createElement("button");
    pretoria.textContent = "Pretoria";
    pretoria.className = "pret";
    liste.appendChild(pretoria);

    pretoria.addEventListener("click",()=>{
        pretoria.style.background = "red"
    })

    var alger = document.createElement("button");
    alger.textContent = "alger";
    alger.className = "alger";
    liste.appendChild(alger);

    alger.addEventListener("click",()=>{
        alger.style.background = "red"
    })

    var luanda = document.createElement("button");
    luanda.textContent = "luanda";
    luanda.className = "luanda";
    liste.appendChild(luanda);

    luanda.addEventListener("click",()=>{
        luanda.style.background = "red"
    })

    var moroni = document.createElement("button");
    moroni.textContent = "moroni";
    moroni.className = "moroni";
    liste.appendChild(moroni);

    moroni.addEventListener("click",()=>{
        moroni.style.background = "green"
        var svt = document.createElement("button"); 
        svt.textContent = "Suivant >>>";
        svt.className = "svt";
        liste.appendChild(svt);

        svt.addEventListener("click",()=>{
            liste.removeChild(com);
            liste.removeChild(moroni);
            liste.removeChild(pretoria);
            liste.removeChild(luanda);
            liste.removeChild(alger);
            liste.removeChild(svt)
            liste.appendChild(esw);

            var gitega = document.createElement("button");
            liste.appendChild(gitega);
            gitega.textContent = "Gitega";
            gitega.className = "gitega";
            gitega.addEventListener("click",()=>{
                gitega.style.background = "red"
            });
            var gaborone = document.createElement("button");
            liste.appendChild(gaborone);
            gaborone.textContent = "Gaborone";
            gaborone.className = "gaborone";
            gaborone.addEventListener("click",()=>{
                gaborone.style.background = "red"
            });
            var moroni1 = document.createElement("button");
            moroni1.textContent = "Moroni";
            moroni1.className = "moroni1";
            liste.appendChild(moroni1);
            moroni1.addEventListener("click",()=>{
                moroni.style.background = "red";
            });
            var mbabane = document.createElement("button");
            mbabane.textContent = "Mbabane";
            mbabane.className = "mbabane"
            liste.appendChild(mbabane);
            mbabane.addEventListener("click",()=>{
                mbabane.style.background = "green";
                var termine = document.createElement("button");
                termine.className = "svt";
                termine.textContent = "Terminer"
                liste.appendChild(termine);
                termine.addEventListener("click",()=>{
                    location.reload();
                })
            })
        });
    });
})
