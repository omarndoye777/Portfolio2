var longueur = document.getElementById("long");
var poids = document.getElementById("poids");
var temperature = document.getElementById("temps");
var main = document.getElementById("main");
var unite = document.getElementById("unite");
var unite2 = document.getElementById("unite2");
var convertir = document.getElementById("conv");
var resultat = document.getElementById("hh22");
var uniteresultat = document.getElementById("p3");
var input = document.getElementById("input");
longueur.style.background = "white";
longueur.style.color = "rgb(31, 31, 67)";
document.getElementById("conv").addEventListener("click",()=>{
    if(unite.value == "cm"){
        if(unite2.value == "cm"){
            resultat.textContent = input.value;
            uniteresultat.textContent = "centimetre";
        }
        if(unite2.value == "m"){
            resultat.textContent = (input.value * (1 / 100)).toFixed(3);
            uniteresultat.textContent = "metre";
        }
        if(unite2.value == "km"){
            resultat.textContent = (input.value * (1 / 100000)).toFixed(3);
            uniteresultat.textContent = "kilometre";
        }
        if(unite2.value == "mi"){
            resultat.textContent = (input.value * (1 / 160934.4)).toFixed(3);
            uniteresultat.textContent = "miles";
        }
    }
    if(unite.value == "m"){
        if(unite2.value == "cm"){
            resultat.textContent = input.value * 100;
            uniteresultat.textContent = "centimetre";
        }
        if(unite2.value == "m"){
            resultat.textContent = input.value.toFixed(3);
            uniteresultat.textContent = "metre";
        }
        if(unite2.value == "km"){
            resultat.textContent = (input.value * (1 / 1000)).toFixed(3);
            uniteresultat.textContent = "kilometre";
        }
        if(unite2.value == "mi"){
            resultat.textContent = (input.value * (1 / 1609.344)).toFixed(3);
            uniteresultat.textContent = "miles";
        }
    }
    if(unite.value == "km"){
        if(unite2.value == "cm"){
            resultat.textContent = input.value * 100000;
            uniteresultat.textContent = "centimetre";
        }
        if(unite2.value == "m"){
            resultat.textContent = input.value * 100;
            uniteresultat.textContent = "metre";
        }
        if(unite2.value == "km"){
            resultat.textContent = input.value;
            uniteresultat.textContent = "kilometre";
        }
        if(unite2.value == "mi"){
            resultat.textContent = (input.value * (1 / 1609.344)).toFixed(3);
            uniteresultat.textContent = "miles";
        }
    }
    if(unite.value == "mi"){
        if(unite2.value == "cm"){
            resultat.textContent = (input.value * 160934.4);
            uniteresultat.textContent = "centimetre";
        }
        if(unite2.value == "m"){
            resultat.textContent = input.value * 1609.344;
            uniteresultat.textContent = "metre";
        }
        if(unite2.value == "km"){
            resultat.textContent = input.value * 1.609344;
            uniteresultat.textContent = "kilometre";
        }
        if(unite2.value == "mi"){
            resultat.textContent = input.value ;
            uniteresultat.textContent = "miles";
        }
    }
}); 
longueur.addEventListener("click",()=>{
    longueur.style.background = "white";
    longueur.style.color = "rgb(31, 31, 67)";
    unite.innerHTML = "<option value='cm'>Centimetre(cm)</option> <option value='m'>Metre(m)</option> <option value='km'>Kilometre(Km)</option> <option value='mi'>Mile(mi)</option> ";
    unite2.innerHTML = "<option value='cm'>Centimetre(cm)</option> <option value='m'>Metre(m)</option> <option value='km'>Kilometre(Km)</option> <option value='mi'>Mile(mi)</option> ";
    poids.style.background = "rgb(31, 31, 67)";
    poids.style.color = "white";
    temperature.style.background = "rgb(31, 31, 67)";
    temperature.style.color = "white";
    document.getElementById("conv").addEventListener("click",()=>{
    if(unite.value == "cm"){
        if(unite2.value == "cm"){
            resultat.textContent = input.value;
            uniteresultat.textContent = "centimetre";
        }
        if(unite2.value == "m"){
            resultat.textContent = (input.value * (1 / 100)).toFixed(3);
            uniteresultat.textContent = "metre";
        }
        if(unite2.value == "km"){
            resultat.textContent = (input.value * (1 / 100000)).toFixed(3);
            uniteresultat.textContent = "kilometre";
        }
        if(unite2.value == "mi"){
            resultat.textContent = (input.value * (1 / 160934.4)).toFixed(3);
            uniteresultat.textContent = "miles";
        }
    }
    if(unite.value == "m"){
        if(unite2.value == "cm"){
            resultat.textContent = input.value * 100;
            uniteresultat.textContent = "centimetre";
        }
        if(unite2.value == "m"){
            resultat.textContent = input.value.toFixed(3);
            uniteresultat.textContent = "metre";
        }
        if(unite2.value == "km"){
            resultat.textContent = (input.value * (1 / 1000)).toFixed(3);
            uniteresultat.textContent = "kilometre";
        }
        if(unite2.value == "mi"){
            resultat.textContent = (input.value * (1 / 1609.344)).toFixed(3);
            uniteresultat.textContent = "miles";
        }
    }
    if(unite.value == "km"){
        if(unite2.value == "cm"){
            resultat.textContent = input.value * 100000;
            uniteresultat.textContent = "centimetre";
        }
        if(unite2.value == "m"){
            resultat.textContent = input.value * 100;
            uniteresultat.textContent = "metre";
        }
        if(unite2.value == "km"){
            resultat.textContent = input.value;
            uniteresultat.textContent = "kilometre";
        }
        if(unite2.value == "mi"){
            resultat.textContent = (input.value * (1 / 1609.344)).toFixed(3);
            uniteresultat.textContent = "miles";
        }
    }
    if(unite.value == "mi"){
        if(unite2.value == "cm"){
            resultat.textContent = (input.value * 160934.4);
            uniteresultat.textContent = "centimetre";
        }
        if(unite2.value == "m"){
            resultat.textContent = input.value * 1609.344;
            uniteresultat.textContent = "metre";
        }
        if(unite2.value == "km"){
            resultat.textContent = input.value * 1.609344;
            uniteresultat.textContent = "kilometre";
        }
        if(unite2.value == "mi"){
            resultat.textContent = input.value ;
            uniteresultat.textContent = "miles";
        }
    }
    });

});
poids.addEventListener("click",()=>{
    poids.style.background = "white";
    poids.style.color = "rgb(31, 31, 67)";
    unite.innerHTML = "<option value='g'>Gramme(g)</option> <option value='kg'>Kilogramme(kg)</option> <option value='t'>Tonne(t)</option> <option value='ib'>Livre(ib)</option>";
    unite2.innerHTML = "<option value='g'>Gramme(g)</option> <option value='kg'>Kilogramme(kg)</option> <option value='t'>Tonne(t)</option> <option value='ib'>Livre(ib)</option>";
    temperature.style.background = "rgb(31, 31, 67)";
    temperature.style.color = "white";
    longueur.style.background = "rgb(31, 31, 67)";
    longueur.style.color = "white";
    document.getElementById("conv").addEventListener("click",()=>{
        if(unite.value = "g"){
            if(unite2.value == "g"){
                resultat.textContent = input.value;
                uniteresultat.textContent = "gramme";
            }
            if(unite2.value == "kg"){
                resultat.textContent = (input.value * (1 / 1000)).toFixed(3);
                uniteresultat.textContent = "kilogramme";
            }
            if(unite2.value == "t"){
                resultat.textContent = (input.value * (1/1000000)).toFixed(3);
                uniteresultat.textContent = "tonne";
            }
            if(unite2.value == "ib"){
                resultat.textContent = input.value * (1 / 453.592).toFixed(3);
                uniteresultat.textContent = "livre"
            }
        }
        if(unite.value = "kg"){
            if(unite2.value == "g"){
                resultat.textContent = input.value * 1000;
                uniteresultat.textContent = "gramme";
            }
            if(unite2.value == "kg"){
                resultat.textContent = input.value;
                uniteresultat.textContent = "kilogramme";
            }
            if(unite2.value == "t"){
                resultat.textContent = (input.value * (1/1000)).toFixed(3);
                uniteresultat.textContent = "tonne";
            }
            if(unite2.value == "ib"){
                resultat.textContent = input.value * (1 / 0.453592).toFixed(3);
                uniteresultat.textContent = "livre";
            }
        }
        if(unite.value = "t"){
            if(unite2.value == "g"){
                resultat.textContent = input.value * 1000000;
                uniteresultat.textContent = "gramme";
            }
            if(unite2.value == "kg"){
                resultat.textContent = input.value * 1000;
                uniteresultat.textContent = "kilogramme";
            }
            if(unite2.value == "t"){
                resultat.textContent = input.value;
                uniteresultat.textContent = "tonne";
            }
            if(unite2.value == "ib"){
                resultat.textContent = (input.value * (1 / 0.000453592)).toFixed(3);
                uniteresultat.textContent = "livre";
            }
        }
        if(unite.value = "ib"){
            if(unite2.value == "g"){
                resultat.textContent = (input.value * 453.592).toFixed(3);
                uniteresultat.textContent = "gramme";
            }
            if(unite2.value == "kg"){
                resultat.textContent = (input.value * 0.453592).toFixed(3);
                uniteresultat.textContent = "kilogramme";
            }
            if(unite2.value == "t"){
                resultat.textContent = (input.value * 0.000453592).toFixed(3);
                uniteresultat.textContent = "tonne";
            }
            if(unite2.value == "ib"){
                resultat.textContent = input.value;
                uniteresultat.textContent = "livre";
            }
        }
    });
 
});

temperature.addEventListener("click",()=>{
    longueur.style.background = "rgb(31, 31, 67)";
    longueur.style.color = "white";
    poids.style.background = "rgb(31, 31, 67)";
    poids.style.color = "white";
    temperature.style.background = "white";
    temperature.style.color = "rgb(31, 31, 67)";
    unite.innerHTML = "<option value='C'>Celcius</option> <option value='F'>Fahrenheit</option> <option value='K'>Kelvin</option>";
    unite2.innerHTML = "<option value='C'>Celcius</option> <option value='F'>Fahrenheit</option> <option value='K'>Kelvin</option>";
    convertir.addEventListener("click",()=>{
        if(unite.value == "C"){
            if(unite2.value == "C"){
                resultat.textContent = input.value;
            }
            if(unite2.value == "F"){
                resultat.textContent = ((input.value - 32) * (5 / 9)).toFixed(3);
                uniteresultat.textContent = "Fahrenheit"
            }
            if(unite2.value == "K"){
                resultat.textContent = (input.value - 273.15).toFixed(3);
                uniteresultat.textContent = "Kelvin";
            }
        }
        if(unite.value == "F"){
            if(unite2.value == "C"){
                resultat.textContent = ((input.value * (9 / 5)) +32).toFixed(3);
            }
            if(unite2.value == "F"){
                resultat.textContent = input.value;
                uniteresultat.textContent = "Fahrenheit"
            }
            if(unite2.value == "K"){
                resultat.textContent = (((input.value - 32) * (5 / 9)) + 273.15).toFixed(3);
                uniteresultat.textContent = "Kelvin";
            }
        }
        if(unite.value == "K"){
            if(unite2.value == "C"){
                resultat.textContent = input.value + 273.15;
            }
            if(unite2.value == "F"){
                resultat.textContent = (((input.value - 273.15) * (9/5)) + 32).toFixed(3);
                uniteresultat.textContent = "Fahrenheit"
            }
            if(unite2.value == "K"){
                resultat.textContent = input.value;
                uniteresultat.textContent = "Kelvin";
            }
        }
    });
});
