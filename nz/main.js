/*Neuseelandreise Skript */
// einzeiliger Kommentar

// Variablen für Koordinaten vereinfachen Änderungen

let lat = -44.697222;
let lng = 169.135278;
let zoom = 11;

let map = L.map('map').setView([lat, lng], zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lat, lng]).addTo(map)
    .bindPopup('<h3>Wanaka</h3>')
    .openPopup();
