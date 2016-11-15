webpack = require('webpack');
path = require('path');
merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

const PATHS = {
    public: path.join(__dirname, 'public'),
    client: path.join(__dirname, 'client'),
}

let config = {
    entry: PATHS.client,
    output: {
        path: PATHS.public,
        filename: "boundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)?$/,
                loaders: ['babel?cacheDirectory'],
                include: PATHS.client
            }
        ]
    }
};

const developmentConfig = {
    // devtool: 'eval-source-map',
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: PATHS.public,
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        stats: 'errors-only',

        host: process.env.HOST,
        port: process.env.PORT
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new NpmInstallPlugin({
        //     save: true // --save
        // })
    ]
};

const productionConfig = {

};

if (TARGET === 'start' || TARGET === 'dev') {
    config = merge.smart(config, developmentConfig);
}
else if (TARGET === 'production') {

}

module.exports = config;