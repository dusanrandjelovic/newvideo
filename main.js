let poeni = 0

const koment1 = document.getElementById("odg1")
const pasus1 = document.getElementById("pasus1")
const koment2 = document.getElementById("odg2")
const pasus2 = document.getElementById("pasus2")
const koment3 = document.getElementById("odg3")
const pasus3 = document.getElementById("pasus3")
const koment4 = document.getElementById("odg4")
const pasus4 = document.getElementById("pasus4")
const dugme = document.getElementById("dugme");
const reset = document.getElementById("reset");

/*const novap = document.getElementById("novapitanja");

const prvop = document.getElementById("prvopitanje")
const zamenaprvog = document.getElementById("zamenaprvog")

const koment4 = document.getElementById("odg4")
const pasus4 = document.getElementById("pasus4")*/


function pitanje1(){
  if(odg1.value.toLowerCase().trim() == "kanbera"){
    pasus1.innerHTML = "To je tacno &#10004;";
    poeni ++;
   //poeniprostor.innerHTML = "Ukupan broj bodova je: " + poeni;
  }
  else {
    pasus1.innerHTML = "Netacno &#10006; - Tacan odgovor je Kanbera";
    poeni --;
    //poeniprostor.innerHTML = "Ukupan broj bodova je: " + poeni;
  }
}

function pitanje2(){
  if(odg2.value.toLowerCase().trim() == "brazilija"){
    pasus2.innerHTML = "To je tacno &#10004;";
    poeni ++;
    //poeniprostor.innerHTML = "Ukupan broj bodova je: " + poeni;
  }
  else {
    pasus2.innerHTML = "Netacno &#10006; - Tacan odgovor je Brazilija";
    poeni --;
    //poeniprostor.innerHTML = "Ukupan broj bodova je: " + poeni;
  }
}

function pitanje3(){
  if(odg3.value.toLowerCase().trim() == "manila"){
    pasus3.innerHTML = "To je tacno &#10004;";
    poeni ++;
    //poeniprostor.innerHTML = "Ukupan broj bodova je: " + poeni;
  }
  else {
    pasus3.innerHTML = "Netacno &#10006; - Tacan odgovor je Manila";
    poeni --;
    //poeniprostor.innerHTML = "Ukupan broj bodova je: " + poeni;
  }

  /*function pitanje4(){
    if(odg4.value.toLowerCase().trim() == "googl"){
      pasus4.innerHTML = "To je tacno &copy;";
      poeni ++;
      //poeniprostor.innerHTML = "Ukupan broj bodova je: " + poeni;
    }
    else {
      pasus4.innerHTML = "To je netacno &copy;";
      poeni --;
      //poeniprostor.innerHTML = "Ukupan broj bodova je: " + poeni;
    }*/
}

function komentar(){
    poeniprostor.innerHTML = "Ukupan broj bodova je: " + poeni;
    poeni = 0;
}

function brisanje() {
   pasus1.innerHTML = " ";
   pasus2.innerHTML = " ";
   pasus3.innerHTML = " ";
   poeniprostor.innerHTML = " ";
   odg1.value = " ";
   odg2.value = " ";
   odg3.value = " ";
}

/*function izmena(){
  prvopitanje.style.display = "none";
  zamenaprvog.style.display = "block";
}*/

dugme.addEventListener("click", pitanje1);
dugme.addEventListener("click", pitanje2);
dugme.addEventListener("click", pitanje3);
dugme.addEventListener("click", komentar);
reset.addEventListener("click", brisanje);
