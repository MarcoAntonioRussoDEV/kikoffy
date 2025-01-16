module.exports = {
    staticPageGenerationTimeout: 240,
    trailingSlash: true,
    assetPrefix: process.env.NODE_ENV === "production" ? "/kikoffy" : "",
    basePath: process.env.NODE_ENV === "production" ? "/kikoffy" : "",
};
