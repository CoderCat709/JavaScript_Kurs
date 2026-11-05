function opptater() {
    const antall = document.getElementById("antallKurv");
    if (antall) {
        antall.textContent = handlekurv.length;
    }
}

function leggtil_kruv(produktId) {
    if (produkter.some((produkt) => produkt.id === produktId)) {
        handlekurv.push(produktId);
        save_kurv();
        opptater();
    }
}

function fjern_kruv(indeks) {
    handlekurv.splice(indeks, 1);
    save_kurv();
    vis_kurv();
    opptater();
}

function vis_kurv() {
    const container = document.getElementById("handlekurvListe");
    if (!container) {
        return;
    }

    if (handlekurv.length === 0) {
        container.innerHTML = "<p>Handlekurven er tom.</p>";
        return;
    }

    container.innerHTML = handlekurv.map((produktId, indeks) => {
        const produkt = produkter.find((vare) => vare.id === produktId);
        if (!produkt) {
            return "";
        }

        return `
            <article class="vare">
                <img class="bilde" src="${produkt.bilde}" alt="${produkt.navn}">
                <h2>${produkt.navn}</h2>
                <p>${produkt.minstepris} - ${produkt.hoyestepris} kr</p>
                <button class="fjernKnapp" data-indeks="${indeks}">Fjern produkt</button>
            </article>
        `;
    }).join("");

    container.querySelectorAll(".fjernKnapp").forEach((knapp) => {
        knapp.addEventListener("click", () => {
            fjern_kruv(Number(knapp.dataset.indeks));
        });
    });
}

document.querySelectorAll("[data-legg-i-handlekurv]").forEach((knapp) => {
    knapp.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        leggtil_kruv(knapp.dataset.leggIHandlekurv);
        knapp.textContent = "Lagt i handlekurven";
    });
});

opptater();
vis_kurv();
