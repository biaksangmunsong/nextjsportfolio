import withOptimizedImages from "next-optimized-images"

module.exports = withOptimizedImages({
    target: "serverless",
    webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: { mode: ['react-component'] }
            }
        )
        return cfg;
    }
})