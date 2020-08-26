const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
    target: 'serverless',
    webpack: function (config) {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        })
        return config
    },
};

module.exports = withPlugins([
    [
        optimizedImages, {
            optimizeImagesInDev: true
        }
    ],
], nextConfig);