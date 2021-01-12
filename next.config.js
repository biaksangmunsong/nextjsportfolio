const withPlugins = require("next-compose-plugins")
const withOptimizedImages = require("next-optimized-images")

module.exports = withPlugins([
    [
        withOptimizedImages,
        {
            optimizeImagesInDev: true,
            responsive: {
                adapter: require("responsive-loader/sharp")
            }
        }
    ]
], {
    webpack: cfg => {
        cfg.module.rules.push({
            test: /\.md$/,
            loader: "frontmatter-markdown-loader",
            options: {
                mode: ["react-component"]
            }
        })

        return cfg
    }
})