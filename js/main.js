//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

//- il prezzo del biglietto è definito in base ai km (0.21 € al km)
//- va applicato uno sconto del 20% per i minorenni
//- va applicato uno sconto del 40% per gli over 65.
//- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

// # RACCOLTA DATI

const userAge = parseInt(prompt("inserisci età", "30"));
const userDistance = parseInt(
  prompt("Inserisci chilometri da percorrere", "750")
);

let price = userDistance * 0.21;
let finalPrice;

console.log("L'età dell'utente è " + userAge + " anni");
console.log(
  "La distanza che l'utente deve percorrere è " + userDistance + " km"
);
console.log("Il prezzo senza sconto è € " + price);

// # SVOLGIMENTO

if (
  // controllo che userAge sia un numero e che sia maggiore di 0
  !isNaN(userAge) &&
  userAge > 0 &&
  // controllo che userDistance sia un numero e che sia maggiore di 0
  !isNaN(userDistance) &&
  userDistance > 0
) {
  if (userAge < 18) {
    finalPrice = price * 0.8;
  } else if (userAge > 65) {
    finalPrice = price * 0.6;
  } else {
    finalPrice = price;
  }
} else {
  alert("Hai inserito dati sbagliati, ricarica la pagina!");
}

// # OUTPUT

alert("Il prezzo del biglietto è € " + finalPrice.toFixed(2));
console.log(
  "Il prezzo finale del biglietto con eventuale sconto è € " +
    finalPrice.toFixed(2)
);
