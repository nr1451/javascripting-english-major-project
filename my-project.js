let firstMap, tileLayer;
firstMap = L.map("open-city-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
    tileLayer.addTo(firstMap);
    firstMap.setView([40.762073, -73.981082], 12);
let southEnd, southEndMarker;
    southEnd = L.latLng(40.710489, -74.016228);
    southEndMarker = L.marker(southEnd).addTo(firstMap).bindPopup("This is South End Avenue");
let harlem125, harlem125Marker;
  harlem125 = L.latLng(40.805144, -73.939180);
  harlem125Marker = L.marker(harlem125).addTo(firstMap).bindPopup("This is Harlem 125th Street");
let harlem124, harlem124Marker;
  harlem124 = L.latLng(40.806685, -73.945745);
  harlem124Marker = L.marker(harlem124).addTo(firstMap).bindPopup("This is Harlem 124th Street");
let cabride, cabrideMarker;
  cabride = L.latLng(40.773128, -73.981604);
  cabrideMarker = L.marker(cabride).addTo(firstMap).bindPopup("This is Harlem 124th Street");
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
  let md2;
        md2 = window.markdownit({html: true}).use(window.markdownitFootnote);
        ["harlem-125"].forEach(function(tab){
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
let md3;
        md3 = window.markdownit({html: true}).use(window.markdownitFootnote);
        ["124-street"].forEach(function(tab){
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
  let md4;
          md4 = window.markdownit({html: true}).use(window.markdownitFootnote);
          ["124-street"].forEach(function(tab){
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
