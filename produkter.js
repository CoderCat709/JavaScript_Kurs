
const produkter = [
    {
        id: "tastatur",
        navn: "Mekanisk tastatur",
        kategori: "Tilbehør",
        beskrivelse: "Responsivt tastatur med tydelige taster, laget for både spilling og daglig bruk.",
        bilde: "img/keybord.png",
        minstepris: 350,
        hoyestepris: 650
    },
    {
        id: "skjerm",
        navn: "Gaming-skjerm",
        kategori: "Skjerm",
        beskrivelse: "Stor skjerm med skarpt bilde som passer til spill, skolearbeid og underholdning.",
        bilde: "img/screen.png",
        minstepris: 1200,
        hoyestepris: 2200
    },
    {
        id: "pc",
        navn: "Bærbar PC",
        kategori: "Datamaskin",
        beskrivelse: "En allsidig PC til skole, arbeid og spill. Enkel å ta med seg.",
        bilde: "img/laptop.png",
        minstepris: 8000,
        hoyestepris: 14000
    },
    {
        id: "mus",
        navn: "Gaming-mus",
        kategori: "Tilbehør",
        beskrivelse: "Presis og komfortabel mus med rask respons til spilling og vanlig bruk.",
        bilde: "img/gamingmus.png",
        minstepris: 250,
        hoyestepris: 700
    },
    {
        id: "setup",
        navn: "Komplett setup",
        kategori: "Pakke",
        beskrivelse: "En samlet pakke med utstyr som gir deg et godt utgangspunkt for en ny gamingplass.",
        bilde: "img/setupp.png",
        minstepris: 16000,
        hoyestepris: 26000
    },
    {
        id: "headset",
        navn: "Gaming-headset",
        kategori: "Lyd",
        beskrivelse: "Komfortabelt headset med klar lyd til spill, musikk og samtaler.",
        bilde: "img/headset.png",
        minstepris: 1000,
        hoyestepris: 2500
    },
    {
        id: "mobil",
        navn: "Smarttelefon",
        kategori: "Mobil",
        beskrivelse: "Praktisk smarttelefon med stor skjerm til bilder, apper og kommunikasjon.",
        bilde: "img/mobil.png",
        minstepris: 5000,
        hoyestepris: 9500
    },
    {
        id: "mysterybox",
        navn: "MysteryBox",
        kategori: "Boks",
        beskrivelse: "En mysterieboks der du kan få gaver og andre ting.",
        bilde: "img/slop.png",
        minstepris: 200,
        hoyestepris: 201
    }
];

const lagret_kurv = JSON.parse(localStorage.getItem("handlekurv") || "[]");
let handlekurv = Array.isArray(lagret_kurv) ? lagret_kurv : [];

function save_kurv() {
    localStorage.setItem("handlekurv", JSON.stringify(handlekurv));
}
