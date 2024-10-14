//CREAZIONE DELLE VARIABILI 

//Chiedere all'utente il numero di chilometri da percorrere
const chilometri = parseInt(prompt("Quanti chilometri vorresti percorrere"));
console.log(chilometri);

//Chiedere all'utente l'età del passegero
const età = parseInt(prompt("Quanti anni hai?"));
console.log(età);

//Impostare il prezzo al chilometro e calcolare il totale prima degli sconti
const prezzoAlChilometro = 0.21;
//Variabile prezzo base
const prezzoBase = chilometri * prezzoAlChilometro;
console.log(prezzoBase);

//Verifico le condizioni per applicare gli sconti


if(età < 18){
   let sconto = prezzoBase * 20 / 100; 
   let bigliettoScontato = prezzoBase - sconto;
   console.log(`Il costo del biglietto è ${bigliettoScontato.toFixed(2)} €`);
}
else if (età > 65){
    let sconto = prezzoBase * 40 / 100;
    let bigliettoScontato = prezzoBase - sconto;
    console.log(`Il costo del biglietto è ${bigliettoScontato.toFixed(2)} €`);
}
else{
    console.log(`Il costo del biglietto è ${prezzoBase.toFixed(2)} €`);
}
