let firstMap, tileLayer;
firstMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
    tileLayer.addTo(firstMap);
    firstMap.setView([40.74132, -73.9948], 17);
let firstDerive, firstDeriveMarker;
let tenThousandth, tenThousandthPolygon, thousandth, thousandthPolyline;
firstDerive = L.latLng(40.74132, -73.9948);
thousandth = [[firstDerive.lat, firstDerive.lng],
              [firstDerive.lat - 0.0003, firstDerive.lng + 0.0006],
              [firstDerive.lat - 0.0009, firstDerive.lng + 0.00023],
              [firstDerive.lat + 0.00034, firstDerive.lng - 0.0026],
              [firstDerive.lat + 0.00212, firstDerive.lng - 0.00135]];
thousandthPolyline = L.polyline(thousandth, {color: "#d33682"}
                      ).addTo(firstMap);
//confused about how to add a second graph
