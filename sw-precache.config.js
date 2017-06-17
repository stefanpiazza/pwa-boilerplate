module.exports = {
    cacheId: "service-worker",
    filename: "service-worker.js",
    staticFileGlobs: [
        // "app/static/scripts/commons.js"
    ],
    staticFileGlobsIgnorePatterns: [/\.map$/],
    // stripPrefix: "app/",
    importScripts: [
        "./scripts/sw.js"
    ],
    // Forces sw-toolbox to be included
    runtimeCaching: [{
        handler: "fastest",
        urlPattern: "/"
    }]
}
