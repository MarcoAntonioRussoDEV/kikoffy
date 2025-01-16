module.exports = {
    staticPageGenerationTimeout: 240,
    exportTrailingSlash: true,
    assetPrefix: process.env.NODE_ENV === "production" ? "/kikoffy" : "",
    basePath: process.env.NODE_ENV === "production" ? "/kikoffy" : "",
};
