const geocode = "https://geocoding-api.open-meteo.com/v1/search";
const apiurl = "https://api.open-meteo.com/v1/forecast";
const meteocode = {
  0: "ciel degage",
  1:"Plutôt dégagé",
  2: "Partiellement nuageux",
  3: "Couvert",
  45: "Brouillard",
  48: "Brouillard givrant",
  51: "Bruine légère",
  53: "Bruine",
  55: "Bruine dense",
  61: "Pluie faible",
  63: "Pluie",
  65: "Pluie forte",
  71: "Neige faible",
  73: "Neige",
  75: "Neige forte",
  80: "Averses faibles",
  81: "Averses",
  82: "Averses violentes",
  95: "Orage",
  96: "Orage avec grêle",
  99: "Orage violent",
};
const formulaire = document.getElementById("formulaire");
const input = document.getElementById("ville");
const Message = document.getElementById("message");
const Resultat = document.getElementById("result");
const Place = document.getElementById("place");
const Temp = document.getElementById("temp");
const Condition = document.getElementById("condition");
const sensation =document.getElementById("sensation");
const Humidite = document.getElementById("humidite");
const Vent = document.getElementById("vent");

formulaire.addEventListener("submit", async(e)=>{
    e.preventDefault();
    const ville = input.value.trim();
    if (!ville) return;
    await ChercheMeteo(ville);

});

async function ChercheMeteo(ville) {
    showMessage("Recherche en cours..");
    Resultat.classList.add("hiddden");
    try{
        const localisation = await geocodeVille(ville);
        if (!localisation){
            showMessage("Aucune ville trouvee pour " + ville, true);
            return;
        }
      const Meteo = await getMeteo(localisation.latitude, localisation.longitude);
      afficheMeteo(localisation, Meteo);
      showMessage("");
    }
    catch (err){
        console.error(err);
        showMessage("Erreur lors de la recuperation des donnees");
    }
}

async function geocodeVille(ville) {
    const url = `${geocode}?name=${encodeURIComponent(ville)}&count=1&language=fr&format=json`;
    const reponse = await fetch(url);
    if (!reponse.ok){
        throw new Error(`Erreur geocodage: ${reponse.statuts}`);
    }
    const data = await reponse.json();
    if (!data.results || data.results.length === 0){
        return null;
    }
    const result = data.results[0];
    return{
        Nom: result.name,
        Pays: result.country,
        latitude: result.latitude,
        longitude:result.longitude,
    };
}

async function getMeteo(latitude, longitude) {
    const params = new URLSearchParams({
        latitude,
        longitude,
        current: "temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code",
    });
    const response = await fetch(`${apiurl}?${params}`);
    if(!response.ok){
        throw new Error(`Erreur meteo: ${response.status}`);
    }
    const data = await response.json();
    return data.current;
}
function afficheMeteo(localisation, meteo) {
  Place.textContent = `${localisation.Nom}, ${localisation.Pays}`;
  Temp.textContent = Math.round(meteo.temperature_2m);
  Condition.textContent = meteocode[meteo.weather_code] || "Conditions inconnues";
  sensation.textContent = `${Math.round(meteo.apparent_temperature)}°`;
  Humidite.textContent = `${Math.round(meteo.relative_humidity_2m)}%`;
  Vent.textContent = `${Math.round(meteo.wind_speed_10m)} km/h`;

  Resultat.style.visibility = "visible";
}

function showMessage(text, isError = false) {
  Message.textContent = text;
  Message.classList.toggle("error", isError);
}