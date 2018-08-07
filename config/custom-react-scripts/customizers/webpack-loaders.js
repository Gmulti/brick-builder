const styleLoader = require('../webpack-config/style-loader')
const sassLoader = require.resolve('sass-loader')

module.exports = {
    // CSS: {
    //     default: true,
    //     get: styleLoader(undefined, /\.css$/, /\.module\.css$/)
    // },
    // SASS: {
    //     get: styleLoader(sassLoader, /\.s[ac]ss$/, /\.module\.s[ac]ss$/)
    // },
    // SASS_MODULES: {
    //     get: styleLoader(sassLoader, /\.module\.s[ac]ss$/, undefined, true)
    // },
    // CSS_MODULES: {
    //     get: styleLoader(undefined, /\.module\.css$/, undefined, true)
    // }
}
