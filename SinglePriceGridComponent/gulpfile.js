// Command to Install = npm install gulp gulp-sass sass gulp-postcss cssnano gulp-terser browser-sync

const { src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const { notify } = require('browser-sync');
const browsersync = require('browser-sync').create();

// Sass Task 
function scssTask() {
    return src('app/scss/style.scss', { sourcemaps: true})
        .pipe(sass())
        .pipe(postcss([cssnano()]))
        .pipe(dest('app/dist', {sourcemaps: '.'}));
}

// Browsersync Tasks
function browsersyncServe(cb) {
    browsersync.init({
        server: {
            baseDir: '.'
        },
        notify: false,
    });
    cb()
}

function browsersyncReload(cb) {
    browsersync.reload();
    cb();
}

// Watch Task 
function watchTask() {
    watch('**/*.html', browsersyncReload);
    watch(['app/scss/**/*.scss', 'app/js/**/*.js'], series(scssTask, browsersyncReload));
}

// Default Gulp Task
exports.default = series(
    scssTask,
    browsersyncServe,
    watchTask
)