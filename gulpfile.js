var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var ts = require('gulp-typescript');
var SystemBuilder = require('systemjs-builder');
var browserSync = require('browser-sync').create();
var builder = new SystemBuilder();
var tsProject = ts.createProject('tsconfig.json');
var embedTemplates = require('gulp-angular-embed-templates');
var imagemin = require('gulp-imagemin');

// compile sass w/ autoprefixing
gulp.task('styles', function() {
  return gulp.src('./assets/styles/main.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

// es6 shim and angular polyfills
gulp.task('polyfills', function() {
  return gulp.src([
    './node_modules/core-js/client/shim.min.js',
    './node_modules/zone.js/dist/zone.js',
    './node_modules/reflect-metadata/Reflect.js'
  ])
  .pipe(concat('polyfills.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js/'));
});

// compile typescript
gulp.task('ts-compile', function() {
  var tsResult = tsProject.src()
    .pipe(embedTemplates())
    .pipe(ts(tsProject));

  return tsResult.js.pipe(gulp.dest('./assets/scripts/js'));
});

// bundle typescript
gulp.task('bundle', ['ts-compile'], function() {
  builder.reset();
  builder.loadConfig('./systemjs.config.js')
    .then(function() {
      return builder.buildStatic('app', './dist/js/bundle.js');
    });
});

// run lossless compression on all the images
gulp.task('images', function() {
  return gulp.src('./assets/images/*')
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{removeUnknownsAndDefaults: false}, {cleanupIDs: false}]
    }))
    .pipe(gulp.dest('./dist/images/'))
    .pipe(browserSync.stream());
});

// watch for scss and ts changes
gulp.task('watch', function() {
  browserSync.init({
    proxy: 'http://ng.dev'
  });

  gulp.watch('./assets/styles/main.scss', ['styles']);
  gulp.watch('./assets/scripts/**/*.ts', ['bundle']);
  gulp.watch('./assets/scripts/**/*.html', ['bundle']);
  gulp.watch("./dist/js/bundle.js").on('change', browserSync.reload);
});

// clean before build
gulp.task('clean', function() {
  return del('./dist');
});

// complete build
gulp.task('build', function(done) {
  runSequence('clean', 'styles', 'polyfills', 'bundle', done);
});

// clean before build
gulp.task('clean-js', function() {
  return del('./assets/scripts/js');
});

// complete build
gulp.task('build', function(done) {
  runSequence('clean', 'clean-js', 'styles', 'polyfills', 'bundle', done);
});
