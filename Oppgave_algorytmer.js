

// Oppgave 1 / 2 -- finn en verdi, tell hvor mye arbeid programmet gjør

// let tall = [12,7,19,4,25,8];
// let funnet = false;
// let sok = 8;
// let anntallSjkekker = 0;

// let produkter = [
//     {navn:"mus",pris:299},
//     {navn:"Tastatur",pris:599},
//     {navn:"Skjerm",pris:2499},
//     {navn:"Webkamra",pris:749}
// ];

// for (let verdi of produkter) {
//     if(verdi === sok) {
//         anntallSjkekker++;
//         funnet = true;
//         break;
//     }
// }

// console.log("Det var",sok, "sok, som ble lest igjenom")
// console.log(funnet)
// console.log(anntallSjkekker)
// console.log(produkter)


// Oppgave 3

// let produkter = [
//     { navn: "mus", pris: 299 },
//     { navn: "Tastatur", pris: 599 },
//     { navn: "Skjerm", pris: 2499 },
//     { navn: "Webkamera", pris: 749 }
// ];

// let sok = "Skjerm"; 
// let funnet = false;
// let funnetPris = null;
// let anntallSjkekker = 0;

// for (let verdi of produkter) {
//     anntallSjkekker++;
    
//     if (verdi.navn.toLowerCase() === sok.toLowerCase()) {
//         funnet = true;
//         funnetPris = verdi.pris;
//         break;
//     }
// }

// console.log("Søkte etter:", sok);
// console.log("Funnet:", funnet);
// console.log("Pris:", funnetPris);
// console.log("Antall sjekker:", anntallSjkekker);



// Oppgave 4
// 60 procent er bestått
// let sum = 0;
// let bestatt = 0;

// let elever = [
//     {navn:"Ali",poeng:67},
//     {navn:"Nora",poeng:89},
//     {navn:"Sofie",poeng:42},
//     {navn:"jonas",poeng:76},
//     {navn:"Emma",poeng:95}
// ];

// let laveste = elever[0].poeng;
// let hoyeste = elever[0].poeng;
// const BESTATT_GRENSE = 60;

// for (let elev of elever) {

//   if (elev.poeng >= BESTATT_GRENSE) {
//     bestatt++;
//   }
//   if (elev.poeng > hoyeste.poeng) {
//     hoyeste = elev;
//   }
//   if (elev.poeng < laveste.poeng) {
//     laveste = elev;
//   }
// }

// for (let resultat of elever) {
//     sum=+ resultat.poeng;
//     if(resultat.poeng > hoyestepoengsum){
//         hoyestepoengsum = resultat.poeng
//     }
//     if (resultat.poeng < lavestepoengsum){
//         lavestepoengsum = resultat.poeng
//     }
// }

// const gjennomsnitt = sum / elever.length;

// console.log("Gjennomsnittlig poengsum: " + gjennomsnitt.toFixed(1));
// console.log("Høyeste poengsum: " + hoyeste.poeng);
// console.log("Elev med lavest poengsum var", laveste.poeng)
// console.log("Antall som har bestått: " + bestatt + " av " + elever.length);

// resultater(elever);




// Oppgave 5

let besteElev = elever[0];

if (elev.poeng > besteElev.poeng) {
    besteElev = elev;
}

console.log("Den beste eleven var",besteElev,"med",poeng)