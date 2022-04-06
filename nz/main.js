/*Neuseelandreise Skript */
// einzeiliger Kommentar

var map = L.map('map').setView([-44.697222, 169.135278], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-44.697222, 169.135278]).addTo(map)
    .bindPopup('<h3>Wanaka</h3>')
    .openPopup();