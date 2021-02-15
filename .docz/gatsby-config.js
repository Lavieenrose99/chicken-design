const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'chicken-desgin',
    description: 'A React UI Library.',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: 'components',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/ivancjz99/chicken-design/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'chicken-desgin',
        description: 'A React UI Library.',
        host: 'localhost',
        port: 3001,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/ivancjz99/chicken-design',
          templates:
            '/Users/ivancjz99/chicken-design/node_modules/docz-core/dist/templates',
          docz: '/Users/ivancjz99/chicken-design/.docz',
          cache: '/Users/ivancjz99/chicken-design/.docz/.cache',
          app: '/Users/ivancjz99/chicken-design/.docz/app',
          appPackageJson: '/Users/ivancjz99/chicken-design/package.json',
          appTsConfig: '/Users/ivancjz99/chicken-design/tsconfig.json',
          gatsbyConfig: '/Users/ivancjz99/chicken-design/gatsby-config.js',
          gatsbyBrowser: '/Users/ivancjz99/chicken-design/gatsby-browser.js',
          gatsbyNode: '/Users/ivancjz99/chicken-design/gatsby-node.js',
          gatsbySSR: '/Users/ivancjz99/chicken-design/gatsby-ssr.js',
          importsJs: '/Users/ivancjz99/chicken-design/.docz/app/imports.js',
          rootJs: '/Users/ivancjz99/chicken-design/.docz/app/root.jsx',
          indexJs: '/Users/ivancjz99/chicken-design/.docz/app/index.jsx',
          indexHtml: '/Users/ivancjz99/chicken-design/.docz/app/index.html',
          db: '/Users/ivancjz99/chicken-design/.docz/app/db.json',
        },
        dist: 'doc-site',
        scripts: {
          'docz:dev': 'docz dev && gulp',
          'docz:build': 'docz build',
          'docz:serve': 'docz build && docz serve',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
