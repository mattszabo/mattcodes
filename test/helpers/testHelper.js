process.env.NODE_ENV = 'test'

import chai from 'chai'
import jsdom from 'jsdom'
import hook from 'css-modules-require-hook'
import sass from 'node-sass'

const { JSDOM } = jsdom
const { document } = (new JSDOM('')).window

// chai.should()
chai.config.includeStack = true

// enzyme setup
var exposedProperties = ['window', 'navigator', 'document']
global.document = document
global.window = document.defaultView

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = document.defaultView[property]
  }
})

// global.navigator = {
//   userAgent: 'node.js'
// }

// handle scss files in tests
hook({
  extensions: ['.scss'],
  preprocessCss: function (css) {
    var result =  sass.renderSync({
      data: css
    })

    return result.css
  }
})
