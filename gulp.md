# Gulp

## Why Gulp?
Gulp - virtual vinyl-fs.
Grunt - tmp fs.

## Links
- [Gulp on GitHub](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
- [Plugins](http://gulpjs.com/plugins/)
- [Plugins from npm](https://www.npmjs.com/)
- [Plugins BLACKLIST](https://github.com/gulpjs/plugins/blob/master/src/blackList.json)
- [Mistakes handler async-done](https://github.com/gulpjs/async-done)

## Plugins
- [gulp-notify](https://github.com/mikaelbr/gulp-notify)

## Installation
1. [node.js + npm](https://nodejs.org/en/)
2. Gulp
```bash
$ gulp -v
$ npm install --global gulp
$ npm init # creates package.json
$ npm i --save-dev gulp # -D
```
3. gulpfile.js

## Methods
1. Choose source
```javascript
gulp.src('app/**/*.*');
gulp.src('app/**/*.html');
gulp.src('app/imgs/*.{jpg,png}');
gulp.src(['app/scss/*.scss', '!app/scss/_*.scss'])
```
2. Destination
```javascript
gulp.dest('dist/imgs')
```

3. Pipes
```javascript
gulp.task('copy:imgs', function() {
  return gulp.src('app/imgs/*.*')
    .pipe(gulp.dest('dist/imgs'));
});
```

4. Watch
```javascript
gulp.watch('app/imgs/*.*', ['copy:imgs']); // ('where to watch', ['whan to do'])
gulp.watch('app/imgs/*.*', gulp.series('copy:imgs'));
gulp.watch('app/imgs/*.*', gulp.parallel('copy:imgs'));
```

5. Tasks
```javascript
gulp.task('clean', function() {});
gulp.task('sass', function() {});
gulp.task('js', function() {});
gulp.task('watch', function() {});

gulp.task('default', gulp.series(
  'clean',
  gulp.parallel(
    'sass',
    'js'
  ),
  'watch' // always last
));
```
