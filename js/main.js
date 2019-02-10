function getResult() { 
    var number1 = prompt("Proszę wpisz liczbę x", "x");
    var number2;
    if (number1 !== null) {
      number2 = prompt("Podaj liczbę y", "y");
    }
    document.getElementById("liczba1").innerHTML = "Liczba1: " + number1;
    document.getElementById("liczba2").innerHTML = "Liczba2: " + number2;
  }  

function getAdded() {
  var number1 = parseInt(document.getElementById("liczba1").innerHTML.split(":")[1]);
  var number2 = parseInt(document.getElementById("liczba2").innerHTML.split(":")[1]);
  var number3 = number1 + number2;
    document.getElementById("wyniki").innerHTML = number3;
}


function getDivided() {
  var number1 = parseInt(document.getElementById("liczba1").innerHTML.split(":")[1]);
  var number2 = parseInt(document.getElementById("liczba2").innerHTML.split(":")[1]);
  var number4 = number1 - number2;
    document.getElementById("wyniki").innerHTML = number4;
}

function getMultiplied() {
  var number1 = parseInt(document.getElementById("liczba1").innerHTML.split(":")[1]);
  var number2 = parseInt(document.getElementById("liczba2").innerHTML.split(":")[1]);
  var number5 = number1 * number2;
    document.getElementById("wyniki").innerHTML = number5;
}