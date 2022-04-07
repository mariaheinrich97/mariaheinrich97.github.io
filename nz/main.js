/*Neuseelandreise Skript */
// einzeiliger Kommentar

// Variablen für Koordinaten vereinfachen Änderungen

let lat = -44.697222;
let lng = 169.135278;
let zoom = 11;

let coords = [-44.70, 175.65];
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
 
let map = L.map('map').setView(coords, zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


L.marker([lat, lng]).addTo(map)
    .bindPopup('<h3>Wanaka</h3>')
    .openPopup();
