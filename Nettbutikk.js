const produkter = [
    {
        id: "tastatur",
        produkt: "Mekanisk tastatur",
        kategori: "Tilbehor",
        beskrivelse: "Responsivt tastatur med tydelige taster, laget for bade spilling og daglig bruk.",
        bilde: "img/keybord.png",
        minstepris: 350,
        hoyestepris: 650
    },
    {
        id: "skjerm",
        produkt: "Gaming-skjerm",
        kategori: "Skjerm",
        beskrivelse: "Stor skjerm med skarpt bilde som passer til spill, skolearbeid og underholdning.",
        bilde: "img/screen.png",
        minstepris: 1200,
        hoyestepris: 2200
    },
    {
        id: "pc",
        produkt: "Bærbar PC",
        kategori: "Datamaskin",
        beskrivelse: "En allsidig PC til skole, arbeid og spill. Enkel å ta med seg.",
        bilde: "img/laptop.png",
        minstepris: 8000,
        hoyestepris: 14000
    },
    {
        id: "mus",
        produkt: "Gaming-mus",
        kategori: "Tilbehor",
        beskrivelse: "Presis og komfortabel mus med rask respons til spilling og vanlig bruk.",
        bilde: "img/",
        minstepris: 250,
        hoyestepris: 700
    },
    {
        id: "setup",
        produkt: "Komplett setup",
        kategori: "Pakke",
        beskrivelse: "En samlet pakke med utstyr som gir deg et godt utgangspunkt for en ny gamingplass.",
        bilde: "img/setupp.png",
        minstepris: 16000,
        hoyestepris: 26000
    },
    {
        id: "headset",
        produkt: "Gaming-headset",
        kategori: "Lyd",
        beskrivelse: "Komfortabelt headset med klar lyd til spill, musikk og samtaler.",
        bilde: "img/headset.png",
        minstepris: 1000,
        hoyestepris: 2500
    },
    {
        id: "mobil",
        produkt: "Smarttelefon",
        kategori: "Mobil",
        beskrivelse: "Praktisk smarttelefon med stor skjerm til bilder, apper og kommunikasjon.",
        bilde: "img/mobil.png",
        minstepris: 5000,
        hoyestepris: 9500
    },
    {
        id: "MysteryBox",
        produkt: "MysteryBox",
        kategori: "Box",
        beskrivelse: "En mysterie box der du kan få gaver og andre ting",
        bilde: "img/"


    }
];
// brukte hjelpemidler men forstår hvordan koden furnkerer, hjelpemidler: vsc innebygd ai, v3schools, google search 
const prisLagringsnokkel = "husebySalgPriser";
const handlekurvLagringsnokkel = "husebySalgHandlekurv";
const lagredePriser = JSON.parse(localStorage.getItem(prisLagringsnokkel) || "{}");

produkter.forEach((produkt) => {
    if (typeof lagredePriser[produkt.id] !== "number") {
        const antallPriser = (produkt.hoyestepris - produkt.minstepris) / 10 + 1;
        lagredePriser[produkt.id] = produkt.minstepris + Math.floor(Math.random() * antallPriser) * 10;
    }

    produkt.pris = lagredePriser[produkt.id];
});

localStorage.setItem(prisLagringsnokkel, JSON.stringify(lagredePriser));

function visPris(pris) {
    return `${new Intl.NumberFormat("nb-NO").format(pris)} kr`;
}

function lagProduktkort(produkt) {
    const bilde = produkt.bilde
        ? `<img src="${produkt.bilde}" alt="${produkt.produkt}" class="produktbilde">`
        : `<div class="produktbilde produktbilde--mangler" aria-label="Produktbilde mangler">Bilde kommer</div>`;

    return `
        <a class="produktkort" href="produktside.html?id=${produkt.id}">
            ${bilde}
            <div class="produktkort-innhold">
                <p class="produktkategori">${produkt.kategori}</p>
                <h2>${produkt.produkt}</h2>
                <p class="produktpris">${visPris(produkt.pris)}</p>
                <span class="kjopsknapp">Se og kjøp</span>
            </div>
        </a>
    `;
}

const produktliste = document.querySelector("#produktliste");
if (produktliste) {
    produktliste.innerHTML = produkter.map(lagProduktkort).join("");
}

const produktdetalj = document.querySelector("#produktdetalj");
const produktId = new URLSearchParams(window.location.search).get("id");
if (produktdetalj && produktId) {
    const valgtProdukt = produkter.find((produkt) => produkt.id === produktId);

    if (valgtProdukt) {
        const bilde = valgtProdukt.bilde
            ? `<img src="${valgtProdukt.bilde}" alt="${valgtProdukt.produkt}" class="produktdetaljbilde">`
            : `<div class="produktdetaljbilde produktbilde--mangler" aria-label="Produktbilde mangler">Bilde kommer</div>`;

        produktdetalj.innerHTML = `
            ${bilde}
            <div class="produktdetalj-innhold">
                <p class="produktkategori">${valgtProdukt.kategori}</p>
                <h2>${valgtProdukt.produkt}</h2>
                <p>${valgtProdukt.beskrivelse}</p>
                <p class="produktpris">${visPris(valgtProdukt.pris)}</p>
                <button class="kjopsknapp" id="kjopsknapp" type="button">Kjøp produkt</button>
            </div>
        `;

        document.querySelector("#kjopsknapp").addEventListener("click", () => {
            const handlekurv = JSON.parse(localStorage.getItem(handlekurvLagringsnokkel) || "[]");
            const handlekurvProdukt = handlekurv.find((vare) => vare.id === valgtProdukt.id);

            if (handlekurvProdukt) {
                handlekurvProdukt.antall += 1;
            } else {
                handlekurv.push({
                    id: valgtProdukt.id,
                    produkt: valgtProdukt.produkt,
                    pris: valgtProdukt.pris,
                    antall: 1
                });
            }

            localStorage.setItem(handlekurvLagringsnokkel, JSON.stringify(handlekurv));
            window.alert(`${valgtProdukt.produkt} er lagt til i handlekurven!`);
        });
    } else {
        produktdetalj.innerHTML = `
            <p>Fant ikke produktet.</p>
            <a class="kjopsknapp" href="forside.html">Til forsiden</a>
        `;
    }
}
