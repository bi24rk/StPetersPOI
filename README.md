# StPetersPOI

A simple interactive map of St Peters with points of interest.

## How does it work?

The site uses LeafletJS library to display an intercactive map, with markers added to display points of interest using Javascript.

An example marker can be viewed in script.js

```
const marker = L.marker([54.9124,-1.37477]).addTo(map)
		.bindPopup('<b>Bus stop</b><br />Situated outside Reg Vardy building.').openPopup();

```

## How to add a marker?

Visit https://www.openstreetmap.org/#map=18/54.91244/-1.37540&layers=N 

Right click on the map at a point of interest, and select *Show address*

The latitude and longitide will be displayed in the sidebar.

Make a note of these coordinates

Add a marker to the script.js and ensure it works

## Where can I learn about Leaflet?

You can view the documentation at https://leafletjs.com/reference.html



