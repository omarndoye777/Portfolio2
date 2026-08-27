var button = document.getElementById("btn");
var liste = document.getElementById("liste")
button.addEventListener("click",()=>{
    var input = document.getElementById("input").value;
    if(input == ""){
        const span = document.createElement("span");
        span.className = "spans";
        document.getElementById("inputs").appendChild(span);
        span.textContent = "Veuillez renseigner ce champs";
        span.style.color = "red";
    }
    else{
        const Ulist = document.createElement("li");
        Ulist.className = "Ulist";
        liste.appendChild(Ulist);
        Ulist.textContent = input;
        document.getElementById("input").value = "";
        document.createElement("br");
        Ulist.addEventListener("click",()=>{
            liste.removeChild(Ulist);
        })
    }
})


