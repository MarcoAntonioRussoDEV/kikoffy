module.exports = {
    staticPageGenerationTimeout: 240,
};
const nextConfig = {
    basePath: "/kikoffy",
    output: "export", // <=== enables static exports
    reactStrictMode: true,
};

module.exports = nextConfig;
