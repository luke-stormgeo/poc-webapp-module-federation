const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (options) => {
  return {
    entry: "./index.js",
    output: {
      filename: "bundle.js",
      publicPath: "auto",
      uniqueName: "mfe4",
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                cacheDirectory: true,
                presets: [
                  "@babel/preset-env",
                  ["@babel/preset-react", { runtime: "automatic" }],
                ],
              },
            },
          ],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: "svg-url-loader",
              options: {
                limit: 10000,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        // For remotes (please adjust)
        name: "react",
        library: { type: "var", name: "react" },
        filename: "remoteEntry.js", // <-- Meta Data
        exposes: {
          "./ReactMap": "./src/bootstrap.js",
        },
        shared: ["react", "react-dom/client"],
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "./*.html",
          },
        ],
      }),
    ],
    devServer: {
      port: 4204,
    },
  };
};
