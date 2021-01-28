// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---components-a-first-index-mdx": () => import("./../../../../components/a_first/index.mdx" /* webpackChunkName: "component---components-a-first-index-mdx" */),
  "component---components-alert-index-mdx": () => import("./../../../../components/alert/index.mdx" /* webpackChunkName: "component---components-alert-index-mdx" */),
  "component---components-button-index-mdx": () => import("./../../../../components/Button/index.mdx" /* webpackChunkName: "component---components-button-index-mdx" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

