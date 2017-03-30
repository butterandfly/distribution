const gulp = require('gulp');
const eslint = require('gulp-eslint');
const del = require('del');
const PolymerProject = require('polymer-build').PolymerProject;
const tar = require('gulp-tar');
const gzip = require('gulp-gzip');

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

// 项目构建
// const project = new PolymerProject(require('./polymer.json'));
// const mergeStream = require('merge-stream');
//
// gulp.task('build', ['clean'], function() {
//   let tag = 'build';
//   if (process.env.TRAVIS_TAG) {
//     tag = process.env.TRAVIS_TAG;
//   }
//
//   return mergeStream(project.sources(), project.dependencies())
//   .pipe(project.analyzer)
//   .pipe(project.bundler)
//   .pipe(gulp.dest('build/ruifile'))
//   .pipe(tar('ruifile-' + tag + '.tar'))
//   .pipe(gzip())
//   .pipe(gulp.dest('build'));
// });