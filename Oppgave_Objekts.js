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


let elev = {
    navn: "tage", 
    poeng:  400
}

for (let elev of elever) {
    console.log(elev.navn + " fikk " + elev.poeng + " poeng");
}

