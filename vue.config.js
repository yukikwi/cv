const ImageminPlugin = require('imagemin-webpack-plugin').default;
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'? '/cv/' : '/',
    configureWebpack: {
        plugins: [
            new ImageminPlugin({
                disable: process.env.NODE_ENV !== 'production',
            })
        ]
    }
}