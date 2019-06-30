import React from 'react'
import ReactDOM from 'react-dom'
import Initalize from './Initialize'
import * as serviceWorker from './serviceWorker'

const dev = process.env.NODE_ENV !== 'production'

let basePath = 'http://localhost:3000'
let libCss = '/css/index.css'
let tinymce = '/tinymce/tinymce.js'
if (!dev) {
    basePath = 'https://librarybrick.now.sh'
    libCss = '/static/css/main.css'
}

const initStyles = () => {
    const head = document.getElementsByTagName('head')[0]
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = `${basePath}${libCss}`
    link.media = 'all'
    head.appendChild(link)
}

const initBrick = (selector, props) => {
    const element = document.querySelector(selector)

    if (!element) {
        throw 'Selector not exist'
    }

    // initStyles()

    // const script = document.createElement('script')
    // script.onload = () => {
    ReactDOM.render(<Initalize initialState={props} />, element)
    // }

    // script.src = `${basePath}${tinymce}`

    // document.head.appendChild(script)
}

window.initBrick = initBrick

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
