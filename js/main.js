    var number1;
    var number2;

function getResult() {
    var number1 = prompt("Proszę wpisz liczbę x", "x");
    var number2;
    if (number1 != null) {
      number2 = prompt("Podaj liczbę y", "y");
    }
    document.getElementById("wynik").innerHTML = "Liczba 1: " + number1 + ".<br>Liczba 2: " + number2 + ".";
  }  

function getAdded() {
    var number3 = number1 + number2;
    document.getElementById("wyniki").innerHTML = number3;
}


function getDivided() {
    var number4 = number1 - number2;
    document.getElementById("wyniki").innerHTML = number4;
}

function getMultiplied() {
    var number5 = number1 * number2;
    document.getElementById("wyniki").innerHTML = number5;
}
