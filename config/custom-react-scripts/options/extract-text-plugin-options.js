const paths = require('../../paths')

const publicPath = paths.servedPath
const cssFilename = 'static/css/[name].css'
const shouldUseRelativeAssetPaths = publicPath === './'

module.exports = shouldUseRelativeAssetPaths
    ? // Making sure that the publicPath goes back to to build folder.
      { publicPath: Array(cssFilename.split('/').length).join('../') }
    : {}
