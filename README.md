# PWA Boilerplate
Basic progressive web app boilerplate.

## Getting Started

### Instalation
```
npm install or yarn
```

### Usage
Basic webpack command to builds files in app folder
```
webpack
```

Watches files for changes and uses Browsersync plugin for dev server.
```
webpack -w
```

## Structure
### Development
```
src/
    images/
    scripts/
        app.js
        sw.js
    styles/
        app.scss

postscss.config.js
sw-precache.config.js
webpack.config.js
```

* src
    * images
        * SVG, JPEG and PNG files use file loader, copied to static images folder if required in app.js
    * scripts
        * app.js - Default entry file for webpack
        * sw.js - Imported into generated service-worker.js. (Insert SW Toolbox routing
here). Not included in webpack build system; copied directly into app scripts folder
    * styles
        * app.scss - Processed into CSS, vendor prefixed with Autoprefixer and created as separate file using ExtractTextPlugin
---
* sw-precache.config.js
    * Basic service worker with option for runtimeCaching and pre-cached files
---
* webpack.config.js
    * Basic webpack configuration for outputting static files


### Production
```
app/
    static/
        images/
            ...
        scripts/
            ...
        styles/
            ...
    index.html
    manifest.json
    service-worker.js
```

## Technologies
* Webpack - Build system for all files
* Babel - JavaScript polyfill
* SASS - CSS pre-processor
* PostCSS - Autoprefixer on CSS files
* SW Precache - Service worker library used to cache files
* Browsersync - Development server


## Improvements
* Dynamic HTML page generation
* Express server
