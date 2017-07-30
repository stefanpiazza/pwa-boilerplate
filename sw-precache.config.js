module.exports = {
    cacheId: "service-worker",
    filename: "service-worker.js",
    staticFileGlobs: [
        "app/static/images/**.*",
        "app/static/scripts/**.js",
        "app/static/styles/**.css",
        "app/**.html"
    ],
    staticFileGlobsIgnorePatterns: [/\.map$/],
    stripPrefix: "app/",
    // Looks at publicPath in webpack.config.js
    importScripts: [
        "./static/scripts/sw.js"
    ],
    // Forces sw-toolbox to be included
    runtimeCaching: [

    ]
}
