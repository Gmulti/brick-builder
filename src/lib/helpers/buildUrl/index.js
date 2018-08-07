function buildUrl(url, options) {
    var queryString = []
    var key
    var builtUrl

    if (url === null) {
        builtUrl = ''
    } else if (typeof url === 'object') {
        builtUrl = ''
        options = url
    } else {
        builtUrl = url
    }

    if (options) {
        if (options.path) {
            if (options.path.indexOf('/') === 0) {
                builtUrl += options.path
            } else {
                builtUrl += '/' + options.path
            }
        }

        if (options.queryParams) {
            for (key in options.queryParams) {
                if (options.queryParams.hasOwnProperty(key)) {
                    queryString.push(key + '=' + options.queryParams[key])
                }
            }
            builtUrl += '?' + queryString.join('&')
        }

        if (options.hash) {
            builtUrl += '#' + options.hash
        }
    }

    return builtUrl
}

export default buildUrl
