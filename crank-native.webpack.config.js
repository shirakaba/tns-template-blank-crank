const webpackConfig = require("./webpack.config");
const webpack = require("webpack");
const path = require("path");

module.exports = (env) => {
    env = env || {};
    const hmr = env.hmr;
    const production = env.production;

    const babelOptions = {
        babelrc: false,
        presets: [],
        plugins: []
    };

    const isAnySourceMapEnabled = !!env.sourceMap || !!env.hiddenSourceMap;
    const baseConfig = webpackConfig(env);

    baseConfig.module.rules.push(
        {
            test: /\.js(x?)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: babelOptions
            },
        }
    );

    baseConfig.module.rules.push({
        test: /\.ts(x?)$/,
        use: [
            {
                loader: "awesome-typescript-loader",
                options: {
                    configFileName: "tsconfig.tns.json",
                    transpileOnly: true,
                    useBabel: true,
                    useCache: true,
                    cacheDirectory: ".awcache",
                    babelOptions: babelOptions,
                    babelCore: "@babel/core",
                    /* I'm not sure of the correct way to input sourceMap, so trying both ways indicated
                     * in https://github.com/s-panferov/awesome-typescript-loader/issues/526 */
                    compilerOptions: {
                        sourceMap: isAnySourceMapEnabled
                    },
                    sourceMap: isAnySourceMapEnabled
                },
            }
        ]
    });

    baseConfig.resolve.extensions = [".ts", ".tsx", ".js", ".jsx", ".scss", ".css"];

    baseConfig.plugins.unshift(
        new webpack.DefinePlugin({
            /* For various libraries in the React ecosystem. */
            "__DEV__": production ? "false" : "true",
        }),
    );

    if (env.production) {
        baseConfig.plugins = baseConfig.plugins.filter(p => !(p && p.constructor && p.constructor.name === "HotModuleReplacementPlugin"));
    }

    return baseConfig;
};
