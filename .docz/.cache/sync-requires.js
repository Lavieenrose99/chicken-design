const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ivancjz99/chicken-design/.docz/.cache/dev-404-page.js"))),
  "component---components-a-first-index-mdx": hot(preferDefault(require("/Users/ivancjz99/chicken-design/components/a_first/index.mdx"))),
  "component---components-alert-index-mdx": hot(preferDefault(require("/Users/ivancjz99/chicken-design/components/alert/index.mdx"))),
  "component---components-button-index-mdx": hot(preferDefault(require("/Users/ivancjz99/chicken-design/components/Button/index.mdx"))),
  "component---components-icon-index-mdx": hot(preferDefault(require("/Users/ivancjz99/chicken-design/components/Icon/index.mdx"))),
  "component---components-input-index-mdx": hot(preferDefault(require("/Users/ivancjz99/chicken-design/components/Input/index.mdx"))),
  "component---components-menu-index-mdx": hot(preferDefault(require("/Users/ivancjz99/chicken-design/components/Menu/index.mdx"))),
  "component---components-upload-index-mdx": hot(preferDefault(require("/Users/ivancjz99/chicken-design/components/Upload/index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/ivancjz99/chicken-design/.docz/src/pages/404.js")))
}

