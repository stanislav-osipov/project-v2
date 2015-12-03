var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

var dirs = {
  src: './src',
  dest: './dest',
}

var path = {
  src: {
    js: {
      all: dirs.src + '/js/**/*.jsx',
      app: dirs.src + '/js/app.jsx',
    },
    html: {
      all: dirs.src + '/**/*.html',
    },
    libs: [
      'bower_components/react/react.js',
      'bower_components/react/react-dom.js',
			'bower_components/underscore/underscore.js',
    ],
    scss: {
			all: dirs.src + '/style/**/*.scss',
      app: dirs.src + '/style/app.scss',
    },
		img: {
			all: dirs.src + '/images/**/*.*',
		}
  } ,
  dest: {
    root: dirs.dest,
    js: dirs.dest + '/js',
    css: dirs.dest + '/style',
    html: dirs.dest,
		img: dirs.dest + '/images',
  },  
}

gulp.task('clean', function () {
  del.sync([path.dest.root + '/*']);
});

gulp.task('html', function() {
  return gulp.src(path.src.html.all)
    .pipe(gulp.dest(path.dest.html))
})

gulp.task('html:watch', ['html'], function() {
  gulp.watch(path.src.html.all, ['html'])
})

gulp.task('webserver', function() {
  gulp.src(path.dest.root)
    .pipe(webserver({
      livereload: true,
      port:9090,
      directoryListing: {
        enable:true,
        path:path.dest.root,
      },
      open: true,
    }));
});

gulp.task('js', function() {
	return gulp.src(path.src.js.all)
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['react']
    }))
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.dest.js));
})

gulp.task('js:watch', ['js'], function() {
  gulp.watch(path.src.js.all, ['js'])
})

gulp.task('libs', function() {
  return gulp.src(path.src.libs)
    .pipe(sourcemaps.init())
    .pipe(concat('libs.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.dest.js))
})

gulp.task('styles', function () {
  return gulp.src(path.src.scss.app)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.dest.css));
});

gulp.task('styles:watch', ['styles'], function() {
  gulp.watch(path.src.scss.all, ['styles']);
});

gulp.task('images', function () {
	return	gulp.src(path.src.img.all)
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()],
			interlaced: true
		}))
		.pipe(gulp.dest(path.dest.img));
});

gulp.task('build', ['libs', 'html', 'js', 'styles', 'images', 'webserver'])

gulp.task('serve', ['libs', 'html:watch', 'js:watch', 'styles:watch', 'webserver'])