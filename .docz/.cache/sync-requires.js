const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---components-alert-index-mdx": hot(preferDefault(require("/Users/ivancjz99/chicken-design/components/alert/index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/ivancjz99/chicken-design/.docz/src/pages/404.js")))
}

