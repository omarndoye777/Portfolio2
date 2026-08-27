function Afficher(){
const Horloge = document.getElementById("Horloge");
const maintenant = new Date();
Jour = maintenant.getDay
Heure = maintenant.getHours();
Minute = maintenant.getMinutes();
Seconde = maintenant.getSeconds();
Millisec = maintenant.getMilliseconds();
Horloge.textContent = (Heure + ":" + Minute + ":" + Seconde + ":" + Millisec);

}
setInterval(() => {
    Afficher()
}, 1);
