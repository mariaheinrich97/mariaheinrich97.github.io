/* mehrzeiliger Kommentar */
// einzeiliger Kommentar
let zoom = 11;

let coords = [ETAPPEN[6].lat, ETAPPEN[6].lng];

let map = L.map('map').setView(coords, zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

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
    let navClass = "etappenLink";

    let mrk = L.marker([etappe.lat, etappe.lng]).addTo(map).bindPopup(popup);
    if (etappe.nr == 6) {
        mrk.openPopup();
        navClass = "etappenLink etappeAktuell"
    }

    // = Zuweisung == abfrage, ob etwas Gleich ist, wie ... 
    //Etappennavigation erweitern - Link zu Etappen einfügen
    //document.querySelector verbindet zur html. Seite & sucht nach navigation
    // innerHTML sucht innerhalb von HTML und setzt ihn ="xy" --> xy steht unter der Karte 

    let link = `<a href= "https://${etappe.github}.github.io/nz/"
    class="${navClass} " title="${etappe.titel}">${etappe.nr}</a>`;
    document.querySelector("#navigation").innerHTML += link;
}
// HUTS einfügen 
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

    let statusColor;
    if (hut.open == true) {
        statusColor = "green";
    } else {
        statusColor = "red";
    }
    L.circleMarker([hut.lat, hut.lng], {
            color: statusColor,
            radius: 5
        }).addTo(map)
        .bindPopup(popup)
}


// miniMap = Übersichtskarte
let miniMap = new L.Control.MiniMap(
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }),
).addTo(map);

// Maßstab hinzufügen
L.control.scale({
    imperial: false,
}).addTo(map);


// Scale z. B. für Smartphones gut
L.control.fullscreen().addTo(map);
// map.addControl(L.control.fullscreen());