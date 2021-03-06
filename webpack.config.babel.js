import path from 'path';

export default {
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        contentBase: path.resolve(__dirname, 'docs'),
    },
    entry: path.resolve(__dirname, 'site.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'docs'),
    },
    module: {
        rules: [{
            exclude: /(node_modules)/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    plugins: [
                        "styled-components",
                    ],
                    presets: [
                        ["es2015", {
                            "loose": true,
                            "modules": false,
                        }],
                        "react",
                        "stage-2",
                    ],
                }
            },
        }],
    },
    plugins: [],
    resolve: {
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat',
        },
    },
}
