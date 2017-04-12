const gulp = require('gulp');
const eslint = require('gulp-eslint');
const del = require('del');
const PolymerProject = require('polymer-build').PolymerProject;

// 检查组件代码
gulp.task('lint-components', function() {
  return gulp.src([
    './src/**/*.html',
    '!./src/**/*.test.html'
  ])
    .pipe(eslint({
      extends: 'google',
      plugins: ['html'],
      rules: {
        'new-cap': 0,
        'dot-notation': ['error', {'allowPattern': '^[a-z]+(_[a-z]+)+$'}]
      },
      envs: [
        'browser'
      ],
      parserOptions: {
        ecmaVersion: 6
      }
    }))
    .pipe(eslint.format());
});

// 检查src之外的其他内容
gulp.task('lint-others', function() {
  return gulp.src([
    './index.html'
  ])
    .pipe(eslint({
      extends: 'google',
      plugins: ['html'],
      rules: {
        'new-cap': 0
      },
      envs: [
        'browser'
      ],
      parserOptions: {
        ecmaVersion: 6
      }
    }))
    .pipe(eslint.format());
});

// 检查组件的测试代码
gulp.task('lint-tests', function() {
  return gulp.src([
    './src/**/*.test.html'
  ])
    .pipe(eslint({
      extends: 'google',
      plugins: ['html'],
      rules: {
        'new-cap': 0
      },
      env: {
        browser: true,
        mocha: true
      },
      globals: [
        'Polymer',
        'assert',
        'fixture'
      ],
      parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
      }
    }))
    .pipe(eslint.format());
});

// 检查全部代码
gulp.task('lint', ['lint-components', 'lint-tests', 'lint-others'], function() {});

// 清除文件
gulp.task('clean', function() {
  return del.sync(['build'], {
    force: true
  });
});

const project = new PolymerProject(require('./polymer.json'));
const mergeStream = require('merge-stream');
const gulpif = require('gulp-if');
// const cssSlam = require('css-slam').gulp;
const htmlMinifier = require('gulp-html-minifier');
const HtmlSplitter = require('polymer-build').HtmlSplitter;
const babel = require('gulp-babel');
const sourcesHtmlSplitter = new HtmlSplitter();

// 项目构建，包含压缩等内容
gulp.task('build', ['clean'], function() {
  const sourcesStream = project.sources()
    .pipe(sourcesHtmlSplitter.split())
    .pipe(gulpif(/\.js$/, babel({presets: ['babili']})))
    // 暂时不能分离css
    // .pipe(gulpif(/\.css$/, cssSlam()))
    // 压缩html，包括删除注释
    .pipe(gulpif(/\.html$/, htmlMinifier({removeComments: true})))
    .pipe(sourcesHtmlSplitter.rejoin()); // rejoins those files back into their original location

  const dependenciesStream = project.dependencies()
    .pipe(sourcesHtmlSplitter.split())
    .pipe(gulpif(/^((?!polymer).)*.js$/, babel({presets: ['babili']})))
    // 暂时不能分离css
    // .pipe(gulpif(/\.css$/, cssSlam()))
    .pipe(gulpif(/\.html$/, htmlMinifier({removeComments: true})))
    .pipe(sourcesHtmlSplitter.rejoin()); // rejoins those files back into their original location

  return mergeStream(sourcesStream, dependenciesStream)
  .pipe(project.bundler())
  .pipe(gulp.dest('build'));
});

gulp.task('swbuild', ['build'], function() {
  const addServiceWorker = require('polymer-build').addServiceWorker;
  return addServiceWorker({
    buildRoot: 'build/',
    project: project,
    bundled: true,
    swPrecacheConfig: {
      navigateFallback: 'index.html',
      // 包含除了index.html及bundle外的需要的所有文件
      staticFileGlobs: [
        'images/**/*',
        'src/d-katex/fonts/*',
        'bower_components/webcomponentsjs/webcomponents-lite.min.js',
        'bower_components/font-roboto/**/*.html',
        'bower_components/font-roboto/**/*.ttf'
      ]
    }
  });
});
