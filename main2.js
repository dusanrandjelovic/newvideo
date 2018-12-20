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


function pitanje1(){
  if(odg1.value.toLowerCase().trim() == "velika morava"){
    pasus1.innerHTML = "To je tačno &#10004;";
    poeni ++;
   //poeniprostor.innerHTML = "Ukupan broj bodova je: " + poeni;
  }
  else {
    pasus1.innerHTML = "To je netačno &#10006;";
    poeni --;
    //poeniprostor.innerHTML = "Ukupan broj bodova je: " + poeni;
  }
}

function pitanje2(){
  if(odg2.value.toLowerCase().trim() == "atlantski"){
    pasus2.innerHTML = "To je tačno &#10004;";
    poeni ++;
    //poeniprostor.innerHTML = "Ukupan broj bodova je: " + poeni;
  }
  else if(odg2.value.toLowerCase().trim() == "atlantski okean") {
      pasus2.innerHTML = "To je tačno &#10004;";
      poeni ++;
  }
  else if(odg2.value.toLowerCase().trim() == "u atlantski okean") {
      pasus2.innerHTML = "To je tačno &#10004;";
      poeni ++;
  }
  else if(odg2.value.toLowerCase().trim() == "u atlantski") {
      pasus2.innerHTML = "To je tačno &#10004;";
      poeni ++;
  }
  else if(odg2.value.toLowerCase().trim() == "u atlantskom") {
      pasus2.innerHTML = "To je tačno &#10004; ali nije gramatički ispravno";
      poeni ++;
  }
  else if(odg2.value.toLowerCase().trim() == "u atlantskom okeanu") {
      pasus2.innerHTML = "To je tačno &#10004; ali nije gramatički ispravno";
      poeni ++;
  }
  else if(odg2.value.toLowerCase().trim() == "atlantskom okeanu") {
      pasus2.innerHTML = "To je tačno &#10004; ali nije gramatički ispravno";
      poeni ++;
  }
  else if(odg2.value.toLowerCase().trim() == "atlantskom") {
      pasus2.innerHTML = "To je tačno &#10004; ali nije gramatički ispravno";
      poeni ++;
  }
  else {
    pasus2.innerHTML = "To je netačno &#10006;";
    poeni --;
    //poeniprostor.innerHTML = "Ukupan broj bodova je: " + poeni;
  }
}

function pitanje3(){
  if(odg3.value.toLowerCase().trim() == "pirinejsko"){
    pasus3.innerHTML = "To je tačno &#10004;";
    poeni ++;
    //poeniprostor.innerHTML = "Ukupan broj bodova je: " + poeni;
  }
  else if(odg3.value.toLowerCase().trim() == "pirinejsko poluostrvo"){
    pasus3.innerHTML = "To je tačno &#10004;";
    poeni ++;
  }
  else if(odg3.value.toLowerCase().trim() == "na pirinejskom poluostrvu"){
    pasus3.innerHTML = "To je tačno &#10004;";
    poeni ++;
  }
  else if(odg3.value.toLowerCase().trim() == "na pirinejskom"){
    pasus3.innerHTML = "To je tačno &#10004;";
    poeni ++;
  }
  else if(odg3.value.toLowerCase().trim() == "pirinejskom"){
    pasus3.innerHTML = "To je tačno &#10004;";
    poeni ++;
  }
  else {
    pasus3.innerHTML = "To je netačno &#10006;";
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
  if(poeni == 1){
    poeniprostor.innerHTML = "Rezultat je: " + poeni + " poen";
  }
  else if(poeni == -1){
    poeniprostor.innerHTML = "Rezultat je: " + poeni + " poen";
  }
  else {
    poeniprostor.innerHTML = "Rezultat je: " + poeni + " poena";
  }
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


dugme.addEventListener("click", pitanje1);
dugme.addEventListener("click", pitanje2);
dugme.addEventListener("click", pitanje3);
dugme.addEventListener("click", komentar);
reset.addEventListener("click", brisanje);
