let firstMap, tileLayer;
firstMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
    tileLayer.addTo(firstMap);
    firstMap.setView([40.730833, -73.9975], 16);
let washingtonSquarePark, washingtonSquareParkMarker;
let tenThousandth, tenThousandthPolygon, thousandth, thousandthPolyline;
    washingtonSquarePark = L.latLng(40.730833, -73.9975);
thousandth = [[washingtonSquarePark.lat + 0.001, washingtonSquarePark.lng + 0.001],
              [washingtonSquarePark.lat + 0.001, washingtonSquarePark.lng - 0.001],
              [washingtonSquarePark.lat - 0.001, washingtonSquarePark.lng - 0.001],
              [washingtonSquarePark.lat - 0.001, washingtonSquarePark.lng + 0.001]];
thousandthPolyline = L.polyline(thousandth, {color: "#d33682"}
                      ).addTo(firstMap);
