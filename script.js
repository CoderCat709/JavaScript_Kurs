// Del 2 fra oppgaven: vis objektene på nettsiden

const container = document.getElementById("produktContainer");

for (let produkt of produkter) {

    container.innerHTML += `
        <a class="produktlenke" href="produkt.html?id=${produkt.id}">
            <div class="produktkort">
                <img class="bilde" src="${produkt.bilde}" alt="${produkt.navn}">
                <h2>${produkt.navn}</h2>
                <p>${produkt.beskrivelse}</p>
                <p>${produkt.minstepris} - ${produkt.hoyestepris} kr</p>
            </div>
        </a>
    `;
}
