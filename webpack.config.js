var path = require("path");
module.exports = {
    entry:"./index.jsx",
    output: {
        path: path.resolve(__dirname, "src"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /.css$/,
                loader: ["style-loader", "css-loader"]
            },
            {
                test: /.jsx$/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    }
}