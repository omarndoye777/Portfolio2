var ecran = document.getElementById("ecran");
var b1 = document.getElementById("b1b");
var b2 = document.getElementById("b2b");
var b3 = document.getElementById("b3b");
var b4 = document.getElementById("b4b");
var b5 = document.getElementById("b5b");
var b6 = document.getElementById("b6b");
var b7 = document.getElementById("b7b");
var b8 = document.getElementById("b8b");
var b9 = document.getElementById("b9b");
var b0 = document.getElementById("b0b");
var bbp = document.getElementById("bbp");
var bbm = document.getElementById("bbm");
var bbf = document.getElementById("bbf");
var bbd = document.getElementById("bbd");
var bbe = document.getElementById("bbe");
var effacer = document.getElementById("eff");
b1.addEventListener("click", ()=>{
ecran.value += 1;
});
b2.addEventListener("click", ()=>{
ecran.value +=  2;
});
b3.addEventListener("click", ()=>{
ecran.value += 3;
});
b4.addEventListener("click", ()=>{
ecran.value += 4;
});
b5.addEventListener("click", ()=>{
ecran.value += 5;
});
b6.addEventListener("click", ()=>{
ecran.value += 6;
});
b7.addEventListener("click", ()=>{
ecran.value += 7;
});
b8.addEventListener("click", ()=>{
ecran.value += 8;
});
b9.addEventListener("click", ()=>{
ecran.value += 9;
});
b0.addEventListener("click", ()=>{
ecran.value += 0;
});
bbp.addEventListener("click", ()=>{
ecran.value += "+";
});
bbm.addEventListener("click", ()=>{
ecran.value += "-";
});
bbf.addEventListener("click", ()=>{
ecran.value += "*";
});
bbd.addEventListener("click", ()=>{
ecran.value += "/";
});
bbe.addEventListener("click", ()=>{
ecran.value = eval(ecran.value)
});
effacer.addEventListener("click", ()=>{
ecran.value = ecran.value.slice(0, -1);
});

