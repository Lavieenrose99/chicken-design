// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---components-alert-index-mdx": () => import("./../../../../components/alert/index.mdx" /* webpackChunkName: "component---components-alert-index-mdx" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

