/*Neuseelandreise Skript */
// einzeiliger Kommentar

// Variablen für Koordinaten vereinfachen Änderungen

let lat = ETAPPEN[7].lat;
let lng = ETAPPEN[7].lng;
let zoom = 11;

let coords = [-44.70, 175.65];

/*
console.log(coords)
console.log(coords[0])
console.log(coords[1])
console.log(coords.length)
//arrey hat immer versch. / mehrere Elemente und steht in [] 
//console.log() steht im Reiter unten
//Wert 1 in der Reihe = 0

console.log('text');
console.log("text");
console.log('id="map"'); //Grund für unterschied ' & " - wenn ich im Ausdruck " oder ' verwenden möchte
console.log(`text "Variablen" 'Auflösen' latitute = ${lat}`) // Backtips wichtig, da ich dann ' & " im Text verwenden kann und Variablen auflösen kann
console.log(ETAPPEN);
console.log(ETAPPEN[0]);
console.log(ETAPPEN[0].nr)
console.log(ETAPPEN[0].github)
console.log(ETAPPEN[0].titel)
console.log(ETAPPEN[0].wikipedia)
console.log(ETAPPEN[0].lat)
console.log(ETAPPEN[0].lng)
*/

let popup =
    `<h3>${ETAPPEN[7].titel} (Etappe ${ETAPPEN[0].nr})</h3>
     <ul>
     <li> geogr. Länge: ${ETAPPEN[7].lng}</li>
     <li> geogr. Breite: ${ETAPPEN[7].lat} </li>
     <li> <a href= "${ETAPPEN[7].wikipedia}">Link zur Wikipediaseite</a> </li>
     <li> <a href= "${ETAPPEN[7].github}">Link zur GitHub-Seite</a> </li>
     </ul>`;


let map = L.map('map').setView(coords, zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lat, lng]).addTo(map)
    .bindPopup(popup)
    .openPopup();

//Arrey in etappen.js für Labeling und Informationen der einzelnen Etappen, die hier aufgerufen werden können und die Label werden in einer for-Schleife abgerufen
for (let etappe of ETAPPEN) {
    let popup =
        `<h3>${etappe.titel} (Etappe ${etappe.nr})</h3>
     <ul>
     <li> geogr. Länge: ${etappe.lng}</li>
     <li> geogr. Breite: ${etappe.lat} </li>
     <li> <a href= "${etappe.wikipedia}">Link zur Wikipediaseite</a> </li>
     <li> <a href= "${etappe.github}.github.io/nz/">Link zur GitHub-Seite</a> </li>
     </ul>`;
    //console.log(etappe)
    L.marker([etappe.lat, etappe.lng]).addTo(map)
        .bindPopup(popup)
        .openPopup();

        //Etappennavigation erweitern - Link zu Etappen einfügen
        //document.querySelector verbindet zur html. Seite & sucht nach navigation
        // innerHTML sucht innerhalb von HTML und setzt ihn ="xy" --> xy steht unter der Karte 
        let link = `<a href= "https://${etappe.github}.github.io/nz/"class="etappenLink" title="${etappe.titel}">${etappe.nr}</a>`;
        document.querySelector("#navigation").innerHTML += link;
}
// HUTS
for (let hut of HUTS) {

    let popup =
    `<h3>${hut.name}</h3>
    <h4>Region: ${hut.region}</h4>
    <hr> 
    <p>${hut.info}<p>
    <img src="${hut.image}" alt="Bild der Hütte ${hut.name}">
    <hr> 
    <a href="${hut.link}" target="Neuseeland">Link zur Hütte</a>
    `
    L.circleMarker([hut.lat, hut.lng]).addTo(map)
        .bindPopup(popup)
        .openPopup();
}