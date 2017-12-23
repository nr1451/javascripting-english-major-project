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
let southEnd, southEndMarker, popupContent;
    southEnd = L.latLng(40.710489, -74.016228);
    southEndMarker = L.marker(southEnd).addTo(firstMap).bindPopup("SOUTH END AVENUE"+'<img src="https://i.imgur.com/UViM9Jh.jpg" width="300" height="250"/>'+"South End Avenue is close to an African Burial Ground National Monument, an important historical site for blacks in New York. "+'<a href="https://ny.curbed.com/maps/black-history-month-new-york">Learn more by clicking here</a>');
let harlem125, harlem125Marker;
  harlem125 = L.latLng(40.805144, -73.939180);
  harlem125Marker = L.marker(harlem125).addTo(firstMap).bindPopup("HARLEM 125TH ST"+'<img src="https://i.imgur.com/nBSIeLd.jpg" width="300" height="250"/>'+"Harlem is grounded in a deep history of African American residential and buisness life. "+'<a href="https://en.wikipedia.org/wiki/Harlem">Click here for the wikipedia page</a>');
let harlem124, harlem124Marker;
  harlem124 = L.latLng(40.806685, -73.945745);
  harlem124Marker = L.marker(harlem124).addTo(firstMap).bindPopup("HARLEM 124TH ST"+'<img src="https://i.imgur.com/uCb9O5X.jpg" width="300" height="250"/>'+"The Harlem Renaisannce (1910-1930s) united the African American community in Harlem and brought people in the community together. "+'<a href="http://www.history.com/topics/black-history/harlem-renaissance">Click here to read more about the Harlem Renaisannce</a>');
let cabride, cabrideMarker;
  cabride = L.latLng(40.773128, -73.981604);
  cabrideMarker = L.marker(cabride).addTo(firstMap).bindPopup("CAB RIDE FROM AMERICAN FOLK ART MUSEUM"+'<img src="https://i.imgur.com/OlRFZ6Y.jpg" width="300" height="250"/>'+"Julius spends time on a rainy afternoon observing works in the American Folk Art Museum. The museum has many collections from African American artists that depict black culture and African American life through generations. "+'<a href="https://folkartmuseum.org/exhibitions/ancestry-and-innovation-african-american-art-from-the-collection/">Click here to view these collections from the American Folk Art Museum</a>');
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
        ["harlem-124"].forEach(function(tab){
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
          ["cabride"].forEach(function(tab){
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
