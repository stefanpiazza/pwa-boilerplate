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
    components/
        Header/
            Header.js
            Header.scss

    App.js
    App.scss

    index.js
    index.scss

    sw.js

    manifest.json

    postscss.config.js
    sw-precache.config.js
    webpack.config.js
```

- components - Contains example header component
    - Header
        - Header.js - Basic React component with header element and nested title
        - Header.scss - Styles for header component
- App.js - App component with nested Header
- App.scss - App styles, non component specific
- index.js - Script file to manage imports and reference for Webpack entry point
- index.scss - Default styles, non app specific
- sw.js - Imported by sw-precache.config.js for custom [sw-toolbox ](https://googlechrome.github.io/sw-toolbox/) routing.
- manifest.json - Web App manifest, copied over to app on build
- postscss.config.js - Autoprefixer configuration
- sw-precache.config.js - SW-Precache configuration
- webpack.config.js - Webpack configuration


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
- Webpack - Build system for all files
- Babel - JavaScript polyfill
- SASS - CSS pre-processor
- PostCSS - Autoprefixer on CSS files
- SW Precache - Service worker library used to cache files
- Browsersync - Development server
- React - Interface building library

## Improvements
- Express server
