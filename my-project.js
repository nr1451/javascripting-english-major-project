let firstMap, tileLayer;
firstMap = L.map("open-city-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
    tileLayer.addTo(firstMap);
    firstMap.setView([40.710489, -74.016228], 16);
let washingtonSquarePark, washingtonSquareParkMarker;
    washingtonSquarePark = L.latLng(40.710489, -74.016228);
    washingtonSquareParkMarker = L.marker(washingtonSquarePark).addTo(firstMap);
let md;
    md = window.markdownit({html: true}).use(window.markdownitFootnote);
    ["south-end"].forEach(function(tab){
      // Create a variable tab that has the name as a string.
      $.ajax({
        // tab + ".md" yields, for example, "rampart.md".
        url: "https://nr1451.github.io/javascripting-english-major-project/" + tab + ".md",
        success: function(markdown){
          let html;
          html = md.render(markdown);
          // "#rampart", for example.
          $("#" + tab).html(html);
        }
      });
    });
