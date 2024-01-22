let mapOptions = {
    center: [54.91306, -1.37840],
    zoom: 18
}

let map = new L.map('map', mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

const marker1 = L.marker([54.9124, -1.37477]).addTo(map)
    .bindPopup('<b>Bus stop</b><br />Situated outside Reg Vardy building.').openPopup();

// Adding another marker
const marker2 = L.marker([54.9118, -1.3755]).addTo(map)
    .bindPopup('<b>West car park</b><br />University of Sunderland').openPopup();
