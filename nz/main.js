/* mehrzeiliger Kommentar */
// einzeiliger Kommentar
let zoom = 11;
let coords = [ETAPPEN[6].lat, ETAPPEN[6].lng];
let map = L.map('map').setView(coords, zoom);

// Zugriff auf Leaflet provider plugin
let startLayer = L.tileLayer.provider("Esri.WorldStreetMap").addTo(map);
// Erstellen verschiedener Layer
let layerControl = L.control.layers({
    "WorldStreetMap": startLayer,
    "OceanBasemap": L.tileLayer.provider("Esri.OceanBasemap"),
    "WorldImagery)": L.tileLayer.provider("Esri.WorldImagery"),
}).addTo(map);

// LayerControl wird sofort ausgeklappt, statt durch Klick
layerControl.expand();

// ETAPPEN einfügen aus Arrey etappen.js - auch im INDEX.HTML vernetzen
// Labeling und Informationen der einzelnen Etappen, die hier aufgerufen werden können und die Label werden in einer for-Schleife abgerufen
for (let etappe of ETAPPEN) {
    let popup =
        `<h3>${etappe.titel} (Etappe ${etappe.nr})</h3>
     <ul>
     <li> geogr. Länge: ${etappe.lng}</li>
     <li> geogr. Breite: ${etappe.lat} </li>
     <li> <a href= "${etappe.wikipedia}">Link zur Wikipediaseite</a> </li>
     <li> <a href= "${etappe.github}.github.io/nz/">Link zur GitHub-Seite</a> </li>
     </ul>`;
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

// HUTS einfügen aus Arrey huts.js - auch im INDEX.HTML vernetzen
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

// MINIMAP = Übersichtskarte mit Karte aus Leaflet - Provider
let miniMap = new L.Control.MiniMap(
    L.tileLayer.provider("Esri.WorldStreetMap")
).addTo(map);

// SCALE hinzufügen (nicht imperial = metrisch)
L.control.scale({
    imperial: false,
}).addTo(map);

// FULLSCREEN z. B. für Smartphones gut
L.control.fullscreen().addTo(map);
// map.addControl(L.control.fullscreen());