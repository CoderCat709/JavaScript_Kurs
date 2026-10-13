// her lærer jeg ojekter og hvordan jeg skal bruke dem,
// uke 39


let land = {
  navn: "Norge",
  hovedstad: "Oslo",
  myntenhet: "NOK",
  storsteByer: ["Oslo", "Bergen", "Stavanger/Sandnes"]
};

console.log(land.navn); // Skriver ut: "Norge"
console.log(land["navn"]); // Skriver ut: "Norge"

console.log(land.storsteByer); // Skriver ut: ["Oslo", "Bergen", "Stavanger/Sandnes"]
console.log(land.storsteByer[1]); // Skriver ut: "Bergen"
console.log(land["storsteByer"][2]); // Skriver ut: "Stavanger/Sandnes"

for (let egenskap in land) {
  console.log(land[egenskap]);
}