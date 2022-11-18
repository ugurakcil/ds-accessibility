const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
    /**
     * Determine if is production mode from the command executed
     */
    const isProduction = argv.mode === 'production';

    return {
        entry: './src/index.js',
        devtool: 'source-map',
        output: {
            filename: isProduction ? 'accessibility.min.js' : 'accessibility.js',
            path: path.resolve(__dirname, 'dist'),
            library: {
                name: 'dsAccessibility',
                type: 'umd',
                export: 'default',
                umdNamedDefine: true
            },
        },
        module: {
            rules: [
                {
                    test: /\.(s(a|c)ss)$/,
                    use: [
                        MiniCssExtractPlugin.loader, {
                            loader: "css-loader",
                            options: {
                                url: false,
                                sourceMap: true
                            }
                        },
                        'sass-loader'
                    ]
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Demo Project',
                template: 'src/index.html'
            }),
            new CopyPlugin({
                patterns: [
                    { from: "src/images", to: "images" }
                ]
            }),
            new MiniCssExtractPlugin({
                filename: isProduction ? 'accessibility.min.css' : 'accessibility.css'
            }),
        ],
        optimization: {
            minimizer: [
                `...`,
            ],
        },
        devServer: {
            static: path.join(__dirname, "dist"),
            compress: true,
            port: 4000,
        },
    }
};