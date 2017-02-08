"use strict";

var gulp = require("gulp");
var concat = require("gulp-concat");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var browserSync = require("browser-sync").create();
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var pump = require('pump');
var gulprun = require("run-sequence");

gulp.task("concat:build", function () {
	return gulp.src([	
						'./assets/concat/polopoly-header.html',
						'./assets/concat/style-link.txt',
						'./assets/widget.html',
						'./assets/concat/script-link.txt',
						'./assets/concat/polopoly-footer.html'
						])
		.pipe(concat("index.html"))
		.pipe(gulp.dest("./build/"));
});

gulp.task("concat:dist", function () {
	return gulp.src([	
						'./assets/concat/style-open.txt',
						'./dist/css/index.css',
						'./assets/concat/style-close.txt',
						'./assets/widget.html',
						'./assets/concat/script-open.txt',
						'./dist/js/main.js',
						'./assets/concat/script-close.txt',
						])
		.pipe(concat("index.html"))
		.pipe(gulp.dest("./dist/"));
});

gulp.task("sass:build", function () {
	return gulp.src("./assets/sass/*.scss")
		.pipe(sass({outputStyle: 'expanded'}).on("error", sass.logError))
		.pipe(postcss([ autoprefixer({ browsers: ['> 1%'] }) ]))
		.pipe(gulp.dest("./build/css/"));
});

gulp.task("sass:dist", function () {
	return gulp.src("./assets/sass/*.scss")
		.pipe(sass({outputStyle: 'compressed'}).on("error", sass.logError))
		.pipe(postcss([ autoprefixer({ browsers: ['> 1%'] }) ]))
		.pipe(gulp.dest("./dist/css/"));
});

gulp.task("browserify", function () {
	return gulp.src("./assets/js/main.js")
		.pipe(browserify())
		.pipe(gulp.dest("./build/js/"));
});

gulp.task("uglify", function (cb) {
	pump([
			gulp.src("./build/js/main.js"),
			uglify(),
			gulp.dest("./dist/js/")
		],
		cb
	);
});

gulp.task("serve", (callback) => browserSync.init({server: { baseDir: "./build/" }, open: false}));
gulp.task("refresh", () => browserSync.reload());

gulp.task("watch", () => gulp.watch([
			"./assets/widget.html",
			"./assets/js/*.js",
			"./assets/js/*/*.js",
			"./assets/js/*/*/*.js",
			"./assets/sass/*.scss"], 
		() => gulprun(["browserify", "sass:build", "concat:build"])
	)
);

gulp.task("dist", function () {
	gulprun("browserify", "uglify", "sass:dist", "concat:dist");
});

gulp.task("default", ["browserify", "concat:build", "serve", "watch",]);












