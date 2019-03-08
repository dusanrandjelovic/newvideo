const odgovor1 = document.getElementById("odg1");
const odgovor2 = document.getElementById("odg2");
const odgovor3 = document.getElementById("odg3");
const odgovor4 = document.getElementById("odg4");
const odgovor5 = document.getElementById("odg5");
const odgovor6 = document.getElementById("odg6");
const odgovor7 = document.getElementById("odg7");
const odgovor8 = document.getElementById("odg8");
const odgovor9 = document.getElementById("odg9");
const odgovor10 = document.getElementById("odg10");

const resenje1 = document.getElementById("resenje1");
const resenje2 = document.getElementById("resenje2");
const resenje3 = document.getElementById("resenje3");
const resenje4 = document.getElementById("resenje4");
const resenje5 = document.getElementById("resenje5");
const resenje6 = document.getElementById("resenje6");
const resenje7 = document.getElementById("resenje7");
const resenje8 = document.getElementById("resenje8");
const resenje9 = document.getElementById("resenje9");
const resenje10 = document.getElementById("resenje10");

const gledanje = document.getElementById("gledanje");
const resetovanje = document.getElementById("resetovanje");
const novikviz = document.getElementById("novikviz");

let poeni = 0;

function prvo(){
  if(odg1.value.toLowerCase().trim() == "norveskoj"){
    resenje1.innerHTML = "Bravo! &#10004;";
    resenje1.classList.add("zelena");
      resenje1.classList.remove("crvena");
    odg1.style.display = "none";
    poeni ++;
  }
  else if(odg1.value.toLowerCase().trim() == "norveska"){
    resenje1.innerHTML = "Bravo! &#10004;";
    resenje1.classList.add("zelena");
      resenje1.classList.remove("crvena");
    odg1.style.display = "none";
    poeni ++;
  }
  else if(odg1.value.toLowerCase().trim() == "u norveskoj"){
    resenje1.innerHTML = "Bravo! &#10004;";
    resenje1.classList.add("zelena");
      resenje1.classList.remove("crvena");
    odg1.style.display = "none";
    poeni ++;
  }
  else if(odg1.value.toLowerCase().trim() == "norveškoj"){
    resenje1.innerHTML = "Bravo! &#10004;";
    resenje1.classList.add("zelena");
      resenje1.classList.remove("crvena");
    odg1.style.display = "none";
    poeni ++;
  }
  else if(odg1.value.toLowerCase().trim() == "norveška"){
    resenje1.innerHTML = "Bravo! &#10004;";
    resenje1.classList.add("zelena");
      resenje1.classList.remove("crvena");
    odg1.style.display = "none";
    poeni ++;
  }
  else if(odg1.value.toLowerCase().trim() == "u norveškoj"){
    resenje1.innerHTML = "Bravo! &#10004;";
    resenje1.classList.add("zelena");
      resenje1.classList.remove("crvena");
    odg1.style.display = "none";
    poeni ++;
  }
  else {
    resenje1.innerHTML = "&#10006; - Tačan odgovor je Norveška";
    resenje1.classList.add("crvena");
    resenje1.classList.remove("zelena");
    odg1.style.display = "none";
    poeni --;
  }
}

function drugo(){
  if(odg2.value.toLowerCase().trim() == "u južnoj africi"){
    resenje2.innerHTML = "Bravo! &#10004;";
    resenje2.classList.add("zelena");
      resenje2.classList.remove("crvena");
    odg2.style.display = "none";
    poeni ++;
  }
  else if(odg2.value.toLowerCase().trim() == "juzna afrika"){
    resenje2.innerHTML = "Bravo! &#10004;";
    resenje2.classList.add("zelena");
      resenje2.classList.remove("crvena");
    odg2.style.display = "none";
    poeni ++;
  }
  else if(odg2.value.toLowerCase().trim() == "južna afrika"){
    resenje2.innerHTML = "Bravo! &#10004;";
    resenje2.classList.add("zelena");
      resenje2.classList.remove("crvena");
    odg2.style.display = "none";
    poeni ++;
  }
  else if(odg2.value.toLowerCase().trim() == "u juznoj africi"){
    resenje2.innerHTML = "Bravo! &#10004;";
    resenje2.classList.add("zelena");
      resenje2.classList.remove("crvena");
    odg2.style.display = "none";
    poeni ++;
  }
  else if(odg2.value.toLowerCase().trim() == "južnoj africi"){
    resenje2.innerHTML = "Bravo! &#10004;";
    resenje2.classList.add("zelena");
      resenje2.classList.remove("crvena");
    odg2.style.display = "none";
    poeni ++;
  }
  else if(odg2.value.toLowerCase().trim() == "juznoj africi"){
    resenje2.innerHTML = "Bravo! &#10004;";
    resenje2.classList.add("zelena");
      resenje2.classList.remove("crvena");
    odg2.style.display = "none";
    poeni ++;
  }
  else if(odg2.value.toLowerCase().trim() == "u južnoafričkoj republici"){
    resenje2.innerHTML = "Bravo! &#10004;";
    resenje2.classList.add("zelena");
      resenje2.classList.remove("crvena");
    odg2.style.display = "none";
    poeni ++;
  }
  else if(odg2.value.toLowerCase().trim() == "u juznoafrickoj republici"){
    resenje2.innerHTML = "Bravo! &#10004;";
    resenje2.classList.add("zelena");
      resenje2.classList.remove("crvena");
    odg2.style.display = "none";
    poeni ++;
  }
  else if(odg2.value.toLowerCase().trim() == "južnoafričkoj republici"){
    resenje2.innerHTML = "Bravo! &#10004;";
    resenje2.classList.add("zelena");
      resenje2.classList.remove("crvena");
    odg2.style.display = "none";
    poeni ++;
  }
  else if(odg2.value.toLowerCase().trim() == "juznoafrickoj republici"){
    resenje2.innerHTML = "Bravo! &#10004;";
    resenje2.classList.add("zelena");
      resenje2.classList.remove("crvena");
    odg2.style.display = "none";
    poeni ++;
  }
  else {
    resenje2.innerHTML = "&#10006; - Tačan odgovor je Južna Afrika";
    resenje2.classList.add("crvena");
    resenje2.classList.remove("zelena");
    odg2.style.display = "none";
    poeni --;
  }
}

function trece(){
  if(odg3.value.toLowerCase().trim() == "rusiji"){
    resenje3.innerHTML = "Bravo! &#10004;";
    resenje3.classList.add("zelena");
      resenje3.classList.remove("crvena");
    odg3.style.display = "none";
    poeni ++;
  }
  else if(odg3.value.toLowerCase().trim() == "u rusiji"){
    resenje3.innerHTML = "Bravo! &#10004;";
    resenje3.classList.add("zelena");
      resenje3.classList.remove("crvena");
    odg3.style.display = "none";
    poeni ++;
  }
  else if(odg3.value.toLowerCase().trim() == "ruskoj federaciji"){
    resenje3.innerHTML = "Bravo! &#10004;";
    resenje3.classList.add("zelena");
      resenje3.classList.remove("crvena");
    odg3.style.display = "none";
    poeni ++;
  }
  else if(odg3.value.toLowerCase().trim() == "u ruskoj federaciji"){
    resenje3.innerHTML = "Bravo! &#10004;";
    resenje3.classList.add("zelena");
      resenje3.classList.remove("crvena");
    odg3.style.display = "none";
    poeni ++;
  }
  else if(odg3.value.toLowerCase().trim() == "rusija"){
    resenje3.innerHTML = "Bravo! &#10004;";
    resenje3.classList.add("zelena");
      resenje3.classList.remove("crvena");
    odg3.style.display = "none";
    poeni ++;
  }
  else if(odg3.value.toLowerCase().trim() == "ruska federacija"){
    resenje3.innerHTML = "Bravo! &#10004;";
    resenje3.classList.add("zelena");
      resenje3.classList.remove("crvena");
    odg3.style.display = "none";
    poeni ++;
  }
  else {
    resenje3.innerHTML = "&#10006; - Tačan odgovor je Rusija";
    resenje3.classList.add("crvena");
    resenje3.classList.remove("zelena");
    odg3.style.display = "none";
    poeni --;
  }
}

function cetvrto(){
  if(odg4.value.toLowerCase().trim() == "pacifik"){
    resenje4.innerHTML = "Bravo! &#10004;";
    resenje4.classList.add("zelena");
      resenje4.classList.remove("crvena");
    odg4.style.display = "none";
    poeni ++;
  }
  else {
    resenje4.innerHTML = "&#10006; - Tačan odgovor je Pacifik";
    resenje4.classList.add("crvena");
    resenje4.classList.remove("zelena");
    odg4.style.display = "none";
    poeni --;
  }
}

function peto(){
  if(odg5.value.toLowerCase().trim() == "spanija"){
    resenje5.innerHTML = "Bravo! &#10004;";
    resenje5.classList.add("zelena");
      resenje5.classList.remove("crvena");
    odg5.style.display = "none";
    poeni ++;
  }
  else if(odg5.value.toLowerCase().trim() == "spaniji"){
    resenje5.innerHTML = "Bravo! &#10004;";
    resenje5.classList.add("zelena");
      resenje5.classList.remove("crvena");
    odg5.style.display = "none";
    poeni ++;
  }
  else if(odg5.value.toLowerCase().trim() == "u spaniji"){
    resenje5.innerHTML = "Bravo! &#10004;";
    resenje5.classList.add("zelena");
      resenje5.classList.remove("crvena");
    odg5.style.display = "none";
    poeni ++;
  }
  else if(odg5.value.toLowerCase().trim() == "španija"){
    resenje5.innerHTML = "Bravo! &#10004;";
    resenje5.classList.add("zelena");
      resenje5.classList.remove("crvena");
    odg5.style.display = "none";
    poeni ++;
  }
  else if(odg5.value.toLowerCase().trim() == "španiji"){
    resenje5.innerHTML = "Bravo! &#10004;";
    resenje5.classList.add("zelena");
      resenje5.classList.remove("crvena");
    odg5.style.display = "none";
    poeni ++;
  }
  else if(odg5.value.toLowerCase().trim() == "u španiji"){
    resenje5.innerHTML = "Bravo! &#10004;";
    resenje5.classList.add("zelena");
      resenje5.classList.remove("crvena");
    odg5.style.display = "none";
    poeni ++;
  }
  else {
    resenje5.innerHTML = "&#10006; - Tačan odgovor je Španija";
    resenje5.classList.add("crvena");
    resenje5.classList.remove("zelena");
    odg5.style.display = "none";
    poeni --;
  }
}

function sesto(){
  if(odg6.value.toLowerCase().trim() == "tigar"){
    resenje6.innerHTML = "Bravo! &#10004;";
    resenje6.classList.add("zelena");
      resenje6.classList.remove("crvena");
    odg6.style.display = "none";
    poeni ++;
  }
  else {
    resenje6.innerHTML = "&#10006; - Tačan odgovor je Tigar";
    resenje6.classList.add("crvena");
    resenje6.classList.remove("zelena");
    odg6.style.display = "none";
    poeni --;
  }
}

function sedmo(){
  if(odg7.value.toLowerCase().trim() == "drinu"){
    resenje7.innerHTML = "Bravo! &#10004;";
    resenje7.classList.add("zelena");
      resenje7.classList.remove("crvena");
    odg7.style.display = "none";
    poeni ++;
  }
  else if(odg7.value.toLowerCase().trim() == "u drinu"){
    resenje7.innerHTML = "Bravo! &#10004;";
    resenje7.classList.add("zelena");
      resenje7.classList.remove("crvena");
    odg7.style.display = "none";
    poeni ++;
  }
  else if(odg7.value.toLowerCase().trim() == "drina"){
    resenje7.innerHTML = "Bravo! &#10004;";
    resenje7.classList.add("zelena");
      resenje7.classList.remove("crvena");
    odg7.style.display = "none";
    poeni ++;
  }
  else {
    resenje7.innerHTML = "&#10006; - Tačan odgovor je Drina";
    resenje7.classList.add("crvena");
    resenje7.classList.remove("zelena");
    odg7.style.display = "none";
    poeni --;
  }
}

function osmo(){
  if(odg8.value.toLowerCase().trim() == "indijskom"){
    resenje8.innerHTML = "Bravo! &#10004;";
    resenje8.classList.add("zelena");
      resenje8.classList.remove("crvena");
    odg8.style.display = "none";
    poeni ++;
  }
  else if(odg8.value.toLowerCase().trim() == "indijski"){
    resenje8.innerHTML = "Bravo! &#10004;";
    resenje8.classList.add("zelena");
      resenje8.classList.remove("crvena");
    odg8.style.display = "none";
    poeni ++;
  }
  else if(odg8.value.toLowerCase().trim() == "u indijskom"){
    resenje8.innerHTML = "Bravo! &#10004;";
    resenje8.classList.add("zelena");
      resenje8.classList.remove("crvena");
    odg8.style.display = "none";
    poeni ++;
  }
  else if(odg8.value.toLowerCase().trim() == "u indijskom okeanu"){
    resenje8.innerHTML = "Bravo! &#10004;";
    resenje8.classList.add("zelena");
      resenje8.classList.remove("crvena");
    odg8.style.display = "none";
    poeni ++;
  }
  else {
    resenje8.innerHTML = "&#10006; - Tačan odgovor je u Indijskom";
    resenje8.classList.add("crvena");
    resenje8.classList.remove("zelena");
    odg8.style.display = "none";
    poeni --;
  }
}

function deveto(){
  if(odg9.value.toLowerCase().trim() == "atlantski"){
    resenje9.innerHTML = "Bravo! &#10004;";
    resenje9.classList.add("zelena");
      resenje9.classList.remove("crvena");
    odg9.style.display = "none";
    poeni ++;
  }
else if (odg9.value.toLowerCase().trim() == "u atlantski"){
  resenje9.innerHTML = "Bravo! &#10004;";
  resenje9.classList.add("zelena");
    resenje9.classList.remove("crvena");
  odg9.style.display = "none";
  poeni ++;
}
else if (odg9.value.toLowerCase().trim() == "u atlantski okean"){
  resenje9.innerHTML = "Bravo! &#10004;";
  resenje9.classList.add("zelena");
    resenje9.classList.remove("crvena");
  odg9.style.display = "none";
  poeni ++;
}
  else {
    resenje9.innerHTML = "&#10006; - Tačan odgovor je u Atlantski";
    resenje9.classList.add("crvena");
    resenje9.classList.remove("zelena");
    odg9.style.display = "none";
    poeni --;
  }
}

function deseto(){
  if(odg10.value.toLowerCase().trim() == "titikaka"){
    resenje10.innerHTML = "Bravo! &#10004;";
    resenje10.classList.add("zelena");
      resenje10.classList.remove("crvena");
    odg10.style.display = "none";
    poeni ++;
  }
  else if(odg10.value.toLowerCase().trim() == "titikaka jezero"){
    resenje10.innerHTML = "Bravo! &#10004;";
    resenje10.classList.add("zelena");
      resenje10.classList.remove("crvena");
    odg10.style.display = "none";
    poeni ++;
  }
  else if(odg10.value.toLowerCase().trim() == "jezero titikaka"){
    resenje10.innerHTML = "Bravo! &#10004;";
    resenje10.classList.add("zelena");
      resenje10.classList.remove("crvena");
    odg10.style.display = "none";
    poeni ++;
  }
  else {
    resenje10.innerHTML = "&#10006; - Tačan odgovor je Titikaka";
    resenje10.classList.add("crvena");
      resenje10.classList.remove("zelena");
    odg10.style.display = "none";
    poeni --;
  }
}

function ukupno(){
  if(poeni == 1){
  poeniprostor.innerHTML = "Osvojili ste: " + poeni + " poen.";
}
else if (poeni == -1){
    poeniprostor.innerHTML = "Osvojili ste: " + poeni + " poen.";
}
else {
    poeniprostor.innerHTML = "Osvojili ste: " + poeni + " poena.";
}
  poeni = 0;
}

function brisanje(){
  odg1.style.display = "block";
  odg1.value = "";
  resenje1.innerHTML = "";
  odg2.style.display = "block";
  odg2.value = "";
  resenje2.innerHTML = "";
  odg3.style.display = "block";
  odg3.value = "";
  resenje3.innerHTML = "";
  odg4.style.display = "block";
  odg4.value = "";
  resenje4.innerHTML = "";
  odg5.style.display = "block";
  odg5.value = "";
  resenje5.innerHTML = "";
  odg6.style.display = "block";
  odg6.value = "";
  resenje6.innerHTML = "";
  odg7.style.display = "block";
  odg7.value = "";
  resenje7.innerHTML = "";
  odg8.style.display = "block";
  odg8.value = "";
  resenje8.innerHTML = "";
  odg9.style.display = "block";
  odg9.value = "";
  resenje9.innerHTML = "";
  odg10.style.display = "block";
  odg10.value = "";
  resenje10.innerHTML = "";
  poeniprostor.innerHTML = "";
}

gledanje.addEventListener("click", prvo);
gledanje.addEventListener("click", drugo);
gledanje.addEventListener("click", trece);
gledanje.addEventListener("click", cetvrto);
gledanje.addEventListener("click", peto);
gledanje.addEventListener("click", sesto);
gledanje.addEventListener("click", sedmo);
gledanje.addEventListener("click", osmo);
gledanje.addEventListener("click", deveto);
gledanje.addEventListener("click", deseto);
gledanje.addEventListener("click", ukupno);
resetovanje.addEventListener("click", brisanje);
