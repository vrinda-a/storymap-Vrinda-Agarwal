/*
Welcome to the config.js file
It holds the actual content of chapters, the transitions, and other
important information for the storymap.
########################################################################
Contents:
*/

/*
########################################################################
HEADER SECTION
*/
let topTitleDiv = "<h4>Template</h4>";
let titleDiv = "<h1>Storymap template</h1>";
let bylineDiv = "<p>Name<br>Date</p>";
let descriptionDiv = `
<p>Welcome!</p>
<p>You can insert images:</q>
<div style="max-width:100%; text-align:center; margin-left:auto; margin-right:auto">
  <img src="./data/images/your_image.png" alt="Image caption" style="max-width:75%; height:auto;">
</div>
<p><em>Above: an image.</em></p>
<p><br></p>
<p style="text-align:center">Scroll to continue<br>▼</p>
`;

/*
########################################################################
CHAPTERS
*/

let divChapter1 =`
<h3>Title for Chapter 1 - lines</h3>
<p>Your description here.</p>
`;

let divChapter2 =`
<h3>Title for Chapter 2 - points</h3>
<p>Your description here.</p>
`;

let divChapter3 =`
<h3>Title for Chapter 3 - polygons</h3>
<p>Your description here.</p>
`;

/*
########################################################################
FOOTER SECTION
*/

let footerDiv = `
<p>Your footer here.</p>
`;

/*
########################################################################
MAP AND TRANSITIONS - THE MAIN CONFIGURATION SECTION
*/

var config = {
    // Change the map style here
    style: "mapbox://styles/mapbox/light-v11",

    // Replace this with your own Mapbox token!
    accessToken: "pk.eyJ1IjoiYnlyb25ubiIsImEiOiJjbTE1c2M5ZGswYmRxMnRvbnl0Mmw1NDFiIn0.jWMkIPu68E9-Bezda3lAlQ",
    showMarkers: false,
    markerColor: "#242422",
    theme: "light",
    use3dTerrain: false,
    topTitle: topTitleDiv,
    title: titleDiv,
    byline: bylineDiv,
    description: descriptionDiv,
    footer: footerDiv,
    chapters: [
      // CHAPTER 1
      // ################################################################
      {
        id: "view1",
        alignment: "right",
        hidden: false,
        chapterDiv: divChapter1,
        location: {
          center: [103.845436, 1.369115], // default center
          zoom: 11,
          zoomSmall: 11,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "your_line_layer",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "your_points_layer",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "your_polygons_layer",
                opacity: 0,
                duration: 300,
            },
        ],
        onChapterExit: [
            {
                layer: "your_line_layer",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "your_points_layer",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "your_polygons_layer",
                opacity: 0,
                duration: 300,
            },
          ],
        },
        // CHAPTER 2
        // ################################################################
        {
        id: "view2",
        alignment: "left",
        hidden: false,
        title: "",
        image: "",
        description: "",
        chapterDiv: divChapter2,
        location: {
          center: [103.723416, 1.332541], // zoom here!
          zoom: 16,
          zoomSmall: 14,
          pitch: 0,
          bearing: 0,
        },
        mapAnimation: "flyTo",
        rotateAnimation: false,
        callback: "",
        onChapterEnter: [
            {
                layer: "your_line_layer",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "your_points_layer",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "your_polygons_layer",
                opacity: 0,
                duration: 300,
            },
        ],
        onChapterExit: [
            {
                layer: "your_line_layer",
                opacity: 0,
                duration: 300,
            },
            {
                layer: "your_points_layer",
                opacity: 1,
                duration: 300,
            },
            {
                layer: "your_polygons_layer",
                opacity: 0,
                duration: 300,
            },
        ],
        },
        // CHAPTER 3
        // ################################################################
        {
            id: "view3",
            alignment: "left",
            hidden: false,
            title: "",
            image: "",
            description: "",
            chapterDiv: divChapter3,
            location: {
              center: [103.845436, 1.369115], 
              zoom: 11,
              zoomSmall: 11,
              pitch: 0,
              bearing: 0,
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {
                    layer: "your_line_layer",
                    opacity: 0,
                    duration: 300,
                },
                {
                    layer: "your_points_layer",
                    opacity: 0,
                    duration: 300,
                },
                {
                    layer: "your_polygons_layer",
                    opacity: 1,
                    duration: 300,
                },
            ],
            onChapterExit: [
                {
                    layer: "your_line_layer",
                    opacity: 0,
                    duration: 300,
                },
                {
                    layer: "your_points_layer",
                    opacity: 0,
                    duration: 300,
                },
                {
                    layer: "your_polygons_layer",
                    opacity: 1,
                    duration: 300,
                },
            ],
          },

    ]};