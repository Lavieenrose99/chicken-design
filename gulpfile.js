const gulp = require('gulp');
const babel = require('gulp-babel');
const scss = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const through2 = require('through2');

const paths = {
  dest: {
    lib: 'lib',
    esm: 'esm',
    dist: 'dist',
  },
  style: 'components/**/*.scss',
  root: 'styles/*.scss',
  copyroot: 'components/styles',
  scripts: [
    'components/**/*.{ts,tsx}',
    '!components/**/demo/*.{ts,tsx}',
    '!components/**/__tests__/*.{ts,tsx}',
  ],
};

/**
 * 当前组件样式 import './index.less' => import './index.css'
 * 依赖的其他组件样式 import '../test-comp/style' => import '../test-comp/style/css.js'
 * 依赖的其他组件样式 import '../test-comp/style/index.js' => import '../test-comp/style/css.js'
 * @param {string} content
 */
function cssInjection(content) {
  return content
    .replace(/\/style\/?'/g, "/style/css'")
    .replace(/\/style\/?"/g, '/style/css"')
    .replace(/\.less/g, '.css')
    .replace(/\.scss/g, '.css')
}

/**
 * 编译脚本文件
 * @param {string} babelEnv babel环境变量
 * @param {string} destDir 目标目录
 */
function compileScripts(babelEnv, destDir) {
  const { scripts } = paths;
  process.env.BABEL_ENV = babelEnv;
  return gulp
    .src(scripts)
    .pipe(babel()) // 使用gulp-babel处理
    .pipe(
      through2.obj(function z(file, encoding, next) {
        this.push(file.clone());
        // 找到目标
        if (file.path.match(/(\/|\\)styles(\/|\\)index\.js/)) {
          const content = file.contents.toString(encoding);
          file.contents = Buffer.from(cssInjection(content)); // 处理文件内容
          file.path = file.path.replace(/index\.js/, 'index.js'); // 文件重命名
          this.push(file); // 新增该文件
          next();
        } else {
          next();
        }
      }),
    )
    .pipe(gulp.dest(destDir));
}

/**
 * 编译cjs
 */
function compileCJS() {
  const { dest } = paths;
  return compileScripts('cjs', dest.lib);
}

/**
 * 编译esm
 */
function compileESM() {
  const { dest } = paths;
  return compileScripts('esm', dest.esm);
}

const buildScripts = gulp.series(compileCJS, compileESM);

/**
 * 拷贝scss文件
 */

function copyScssRoot() {
  return gulp
    .src(paths.root)
    .pipe(gulp.dest(paths.dest.lib))
    .pipe(gulp.dest(paths.copyroot))
    .pipe(gulp.dest(paths.dest.esm));
}
function copyScss() {
  return gulp
    .src(paths.style)
    .pipe(gulp.dest(paths.dest.lib))
    .pipe(gulp.dest(paths.dest.esm));
}

/**
 * 生成css文件
 */
function scss2css() {
  return gulp
    .src(paths.style)
    .pipe(scss()) // 处理less文件
    .pipe(autoprefixer()) // 根据browserslistrc增加前缀
    .pipe(cssnano({ zindex: false, reduceIdents: false })) // 压缩
    .pipe(gulp.dest(paths.dest.lib))
    .pipe(gulp.dest(paths.dest.esm));
}
gulp.task("watch-copy-scss",function(){
  return gulp
  .src(paths.style)
  .pipe(gulp.dest(paths.dest.lib))
  .pipe(gulp.dest(paths.dest.esm));
})
const watch = gulp.task("watch",function(){
  gulp.watch(paths.style,gulp.parallel(copyScss,scss2css))
})

const build = gulp.parallel(buildScripts,copyScssRoot ,copyScss,scss2css);

exports.build = build;
exports.watch = watch;

// exports.default = build;
