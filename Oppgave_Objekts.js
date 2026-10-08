// Her ligger Oppgaven for objekts fo uke 39


// let elev = {
//     navn: "Ali",
//     alder: 18,
//     poeng: 72,
//     klasse: "IMI2"
// };

// console.log(elev.navn);
// console.log(elev.alder);
// console.log(elev.poeng);
// console.log(elev)

// Oppgave 1
// let PC = {
//     Ram: "16 gig",
//     disk: "1 tb",
//     Gpu: "4060",
//     Cpu: "i5 14400f",
//     Motherbord: "Asus",
//     psu: "null"
// }

// console.log(PC)

// Oppgave 2
// let produkt = {
//     navn: "Tastatur",
//     pris: 599,
//     antall: 3
// };

// if (produkt.antall > 0) {
//     console.log("På lager");
// } else {
//     console.log("Utsolgt");
// }

// let lagerverdi = produkt.pris * produkt.antall;

// console.log("vi har", produkt.navn, "og vi har", produkt.antall)
// console.log("Det Koster", lagerverdi, "for alle sammen")

// Oppgave 3

// function visProdukt(produkt) {
// console.log(produkt.navn + " - " + produkt.pris + " kr");
// }


// Oppgave 4


// Arrays
// let eks = [1,2,3,4,5];
// console.log(eks)

// Objekts
// let Oppenheimer = {
//     quality: "Best",
//     lore: "Peak",
//     Bomb: "Big",
//     length: "long",
// }
// function visOppenheimer(Oppenheimer) {
//     console.log(Oppenheimer.quality)
//     console.log(Oppenheimer.lore)
//     console.log(Oppenheimer.Bomb)
//     console.log(Oppenheimer.length)
// }
// console.log()


// Del 2 Objekts


// let elev = {
//     navn: "tage", 
//     poeng:  400
// }

// for (let elev of elever) {
//     console.log(elev.navn + " fikk " + elev.poeng + " poeng");
// }

// Oppgave 5

// let elever = [
//     { navn: "Tage", poeng: 300 },
//     { navn: "Denys", poeng: 400 },
//     { navn: "Konrad", poeng: 500 }
// ];



// for (let elev of elever) {
//     console.log(elev.navn + " fikk " + elev.poeng + " poeng", "-"",  );
// }

// Oppgave 6

const elever = [
  { navn: "Anna", poeng: 78 },
  { navn: "Jonas", poeng: 45 },
  { navn: "Sara", poeng: 92 },
  { navn: "Mohammed", poeng: 63 },
  { navn: "Ingrid", poeng: 38 },
  { navn: "Lars", poeng: 55 },
];


const BESTATT_GRENSE = 50;

let sum = 0;
let bestatt = 0;
let besteElev = elever[0];

for (let elev of elever) {

  if (elev.poeng >= BESTATT_GRENSE) {
    bestatt++;
  }

  if (elev.poeng > besteElev.poeng) {
    besteElev = elev;
  }
}

const gjennomsnitt = sum / elever.length;

console.log("Gjennomsnittlig poengsum: " + gjennomsnitt.toFixed(1));
console.log("Høyeste poengsum: " + besteElev.poeng);
console.log("Elev med høyest poengsum: " + besteElev.navn);
console.log("Antall som har bestått: " + bestatt + " av " + elever.length);