/*
########################################################################
HEADER SECTION
*/

let topTitleDiv = "<h4>The Journey of the Ganga River</h4>";
let titleDiv = "<h1>Exploring the Ganga: From Origin to Impact</h1>";
let bylineDiv = "<p>By Vrinda Agarwal <br> September 2024</p>";
let descriptionDiv = `
<p>Welcome to this interactive story map that traces the journey of the Ganga River, exploring its significance, pollution, and the major cities it touches. Scroll down to follow its flow from the Himalayas to the Bay of Bengal.</p>
<div style="max-width:100%; text-align:center; margin-left:auto; margin-right:auto">
  <img src="./data/images/ganga.jpg" alt="Ganga River" style="max-width:75%; height:auto;">
</div>
<p><em>Above: The Ganga River flowing through Haridwar</em></p>
<p style="text-align:center">Scroll to continue<br>▼</p>
`;

/*
########################################################################
CHAPTERS
*/

// Chapter 1: The Origin of the Ganga (Gangotri)
let divChapter1 =`
<h3>Chapter 1: The Origin of the Ganga</h3>
<p>The Ganga River begins its journey at the Gangotri Glacier in the Himalayas. Revered as sacred by millions, the river originates from the Bhagirathi River and flows down through the state of Uttarakhand.</p>
<div style="max-width:100%; text-align:center; margin-left:auto; margin-right:auto">
  <img src="./data/images/gangotri.jpg" alt="Gangotri Glacier" style="max-width:75%; height:auto;">
</div>
<p><em>Above: Gangotri Glacier, the source of the Ganga River.</em></p>
`;

// Chapter 2: Major Cities Along the Ganga (Haridwar, Kanpur, Varanasi)
let divChapter2 =`
<h3>Chapter 2: Cities Along the Ganga</h3>
<p>As the Ganga River flows through northern India, it passes through important cities like Haridwar, Kanpur, and Varanasi. These cities are centers of spirituality, commerce, and culture, but also major contributors to the pollution in the river.</p>
<div style="max-width:100%; text-align:center; margin-left:auto; margin-right:auto">
  <img src="./data/images/varanasi.jpg" alt="Varanasi" style="max-width:75%; height:auto;">
</div>
<p><em>Above: Varanasi, one of the holiest cities along the Ganga.</em></p>
`;

// Chapter 3: Pollution and Challenges
let divChapter3 =`
<h3>Chapter 3: Pollution and Environmental Challenges</h3>
<p>The Ganga River faces severe pollution from industrial waste, sewage, and religious offerings. Despite government efforts like the Namami Gange program, the river's health continues to deteriorate, impacting the communities that rely on it.</p>
<div style="max-width:100%; text-align:center; margin-left:auto; margin-right:auto">
  <img src="./data/images/pollution.jpg" alt="Ganga Pollution" style="max-width:75%; height:auto;">
</div>
<p><em>Above: Pollution in the Ganga near Kanpur.</em></p>
`;

/*
########################################################################
FOOTER SECTION
*/

let footerDiv = `
<p>Thank you for exploring the Ganga River's journey. From its origin in the Himalayas to the challenges it faces today, the Ganga remains a vital artery of life and culture in India.</p>
<p><em>Credits: Data sourced from open sources and Mapbox</em></p>
`;

/*
########################################################################
MAP AND TRANSITIONS - THE MAIN CONFIGURATION SECTION
*/

var config = {
    // Map style
    style: "https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.css", 
    // Mapbox token
    accessToken: "pk.eyJ1IjoiYWdhcnZyaW5kYSIsImEiOiJjbTFoeTViY2swbDIyMmxweHo3dnNiNnBmIn0.hp7xaGIu8Y7Q-RVwVG2YrA",
    showMarkers: false,
    markerColor: "#FF5733",
    theme: "light",
    use3dTerrain: false,
    topTitle: topTitleDiv,
    title: titleDiv,
    byline: bylineDiv,
    description: descriptionDiv,
    footer: footerDiv,
    chapters: [
      // CHAPTER 1: Gangotri (River Origin)
      {
        id: "view1",
        alignment: "right",
        hidden: false,
        chapterDiv: divChapter1,
        location: {
          center: [79.05537427874106, 30.98620629908892], // Gangotri
          zoom: 9,
          zoomSmall: 9,
          pitch: 45,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "river-path-layer",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "major-cities-layer",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "city-circles-layer",
                opacity: 0,
                duration: 300,
            },
        ],
        onChapterExit: [
            {
                layer: "river-path-layer",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "major-cities-layer",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "city-circles-layer",
                opacity: 0,
                duration: 300,
            },
        ],
      },

      // CHAPTER 2: Cities Along the Ganga
      {
        id: "view2",
        alignment: "left",
        hidden: false,
        chapterDiv: divChapter2,
        location: {
          center: [83.01440579087068, 25.336226431686683], // Varanasi
          zoom: 12,
          zoomSmall: 10,
          pitch: 30,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "river-path-layer",
                opacity: 0.5,
                duration: 300,
            },
            {
                layer: "major-cities-layer",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "city-circles-layer",
                opacity: 0.5,
                duration: 300,
            },
        ],
        onChapterExit: [
            {
                layer: "river-path-layer",
                opacity: 0.5,
                duration: 300,
            },
            {
                layer: "major-cities-layer",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "city-circles-layer",
                opacity: 0.5,
                duration: 300,
            },
        ],
      },

      // CHAPTER 3: Pollution and Challenges
      {
        id: "view3",
        alignment: "center",
        hidden: false,
        chapterDiv: divChapter3,
        location: {
          center: [85.15009100890597, 25.565237625112005], // Kanpur
          zoom: 11,
          zoomSmall: 9,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "river-path-layer",
                opacity: 0.3,
                duration: 300,
            },
            {
                layer: "major-cities-layer",
                opacity: 0.3,
                duration: 300,
            },
            {
                layer: "city-circles-layer",
                opacity: 0.5,
                duration: 300,
            },
        ],
        onChapterExit: [
            {
                layer: "river-path-layer",
                opacity: 0.3,
                duration: 300,
            },
            {
                layer: "major-cities-layer",
                opacity: 0.3,
                duration: 300,
            },
            {
                layer: "city-circles-layer",
                opacity: 0.5,
                duration: 300,
            },
        ],
      },
    ],
};
