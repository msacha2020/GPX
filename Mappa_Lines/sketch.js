// https://mappa.js.org/docs/getting-started.html


// Other possible interesting videos:
// Subscribers data: https://www.youtube.com/watch?v=Ae73YY_GAU8&feature=youtu.be
// Earthquake Data: https://www.youtube.com/watch?v=ZiYdOwOrGyc&t=1083s

// For integrating images: https://www.youtube.com/watch?v=FVYGyaxG4To


let myMap;
let canvas;
const mappa = new Mappa('Leaflet');

let options = {
  lat: 42.95,
  lng: -78.85,
  zoom: 12,
  style: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
}


function preload() {
  // With this code, you will need to convert your GPX file to CSV
  // Google search online converters and select one to test
  //firstPath = loadTable('track_points.csv', 'csv', 'header');
  //secondPath = loadTable('track_points-02.csv', 'csv', 'header');
  firstPath = loadTable('13-Oct-2020-2059.csv', 'csv', 'header');
}

//function preload() {
  //img = loadImage('Images/Running_Guy');
//}

function setup() {
  canvas = createCanvas(800, 800);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  myMap.onChange(clear);

  // myMap.onChange(drawPath(firstPath));
  // myMap.onChange(drawPath(secondPath));
  //myMap.onChange(drawPath.bind(null, firstPath));
  //myMap.onChange(drawPath.bind(null, secondPath));
  myMap.onChange(drawPath.bind(null, firstPath));
}


function draw() {
}


function drawPath(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));



    //this.display = function() {
      //image(img, 42.92610, -78.88345);
    //}

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      noStroke();
      fill(225, 160, 220, 30);
      ellipse(pos.x, pos.y, 20, 20)

      stroke('blue');
      strokeWeight(2);
      line(pos.x, pos.y, pos.x, pos.y);

      //if(longitude === -78.88345){
        //image(img, pos.x, pos.y, 50, 50)
        //console.log('test')
      //}
    }
  }
}
