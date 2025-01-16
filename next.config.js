module.exports = {
    staticPageGenerationTimeout: 240,
};
const nextConfig = {
    output: "export", // <=== enables static exports
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
