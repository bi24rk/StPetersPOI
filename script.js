let mapOptions = {
    center:[54.91306,-1.37840],
    zoom:18
}

let map = new L.map('map', mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

// let marker = new L.Marker([54.9124,-1.37477]);
// marker.addTo(map);


const marker = L.marker([54.9124,-1.37477]).addTo(map)
		.bindPopup('<b>Bus stop</b><br />Situated outside Reg Vardy building.').openPopup();
