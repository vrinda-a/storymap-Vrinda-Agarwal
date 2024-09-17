# Template for story map!

Template adapted from pointsunknown:
https://pointsunknown.nyc/web%20mapping/mapbox/2021/07/20/11A_MapboxStorytelling.html

## User guide

You can fork this project and customise it with your own map data (e.g. `.geojson` files) and narrative (in chapters)

### What do I have to change?

Quick start approach - to stick to the defaults and minimise customisation, you only need to change the following:

Mapbox access token
- Go to https://account.mapbox.com/ (make an account if you haven't)
- Then go to https://account.mapbox.com/access-tokens/ to create a token
- Copy the token code into `accessToken` in `config.js` (ctrl+f to search for `accessToken`)

`style.css`
- No need change anything

`map.js`
- You only need to replace the `map.addLayer({...})` part with your own map layers and id names. Customise how they appear (colour etc.).
  
`config.js`
- This file needs the most modification
- Modify the `HEADER SECTION` - the introduction bit
- Modify `CHAPTERS` - the actual text / image etc. content of your chapters
- Modify the `FOOTER SECTION` - the conclusion bit
- Modify `MAP AND TRANSITIONS - THE MAIN CONFIGURATION SECTION` - where you toggle layers on (1) or off (0) upon entering and exiting each chapter, how much to zoom, where a chapter is centered etc.
- You can consider adding more chapters. For instance to create chapter 4, create the variable let `divChapter4 =...` in config.js and add to the `chapters` part in `var config = { accordingly` (which layers to toggle, which place to zoom to etc.)


### What else can I change?
If you don't like the Roboto font from Google, you can change to another Google font https://fonts.google.com/selection. Pick a font, press the shopping bag, get embed code, and change the embed code at `index.html`, and the font name from 'Roboto' to your preferred font name in `map.js`, `config.js` and `style.css`.

There are many, many options for customisation (change mapbox style, change interactions and animations etc.)