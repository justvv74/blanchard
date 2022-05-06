const { src, dest, series, watch} = require('gulp');
const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin');
const autoPrefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const svgSprite = require('gulp-svg-sprite');
const image = require('gulp-image');
const babel = require('gulp-babel');
const notify = require('gulp-notify');
const uglify = require('gulp-uglify-es').default;
const sourceMaps = require('gulp-sourcemaps');
const del = require('del');
const sass = require('gulp-sass')(require('sass'));
const strip = require('gulp-strip-comments');
const browserSync = require('browser-sync').create();

const clean = () => {
    return del(['dist',
        'prod',
    ])
    
}

const resources = () => {
    return src('src/resources/**')
    .pipe(dest('prod/resources'))
    .pipe(dest('dist/resources'))
}

const styles = () => {
    return src('src/styles/**/*.css')
    .pipe(sourceMaps.init())
    .pipe(concat('main.css'))
    .pipe(autoPrefixer({
        cascade: false,
    }))
    .pipe(cleanCSS({
        level: 2,
    }))
    .pipe(dest('prod'))
    .pipe(sourceMaps.write())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const scssStyles = () => {
    return src('src/styles/main.scss')
    .pipe(sourceMaps.init())
    .pipe(sass({
        outputStyle: 'compressed',
    }).on('error', sass.logError))  
    .pipe(autoPrefixer({
        cascade: false,
    }))
    // .pipe(strip())
    .pipe(dest('prod'))
    .pipe(sourceMaps.write())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const htmlMinify = () => {
    return src('src/**/*.html')
    .pipe(htmlMin({
        collapseWhitespace: true,
    }))
    .pipe(strip())
    .pipe(dest('prod'))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const svgSprites = () => {
    return src('src/img/svg/**/*.svg')
    .pipe(svgSprite({
        mode: {
            stack: {
                sprite: '../sprite.svg'
            }
        }
    }))
    .pipe(dest('prod/img'))
    .pipe(dest('dist/img'))
}

const scripts = () => {
    return src([
        'src/scripts/components/**/*.js',
        'src/scripts/main.js'
    ])
    .pipe(sourceMaps.init())
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('app.js'))
    .pipe(uglify({
        toplevel: true,
    }).on('error', notify.onError()))
    .pipe(strip())
    .pipe(dest('prod'))
    .pipe(sourceMaps.write())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const fonts = () => {
    return src([
        'src/fonts/**/*.woff',
        'src/fonts/**/*.woff2'
    ])
    .pipe(dest('prod/fonts'))
    .pipe(dest('dist/fonts'))
}

const images = () => {
    return src([
        'src/img/**/*.jpg',
        'src/img/**/*.png',
        'src/img/*.svg',
        'src/img/**/*.jpeg',
    ])
    .pipe(image())
    .pipe(dest('prod/img'))
    .pipe(dest('dist/img'))
}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
}

watch('src/**/*.html', htmlMinify)
// watch('src/styles/**/*.css', styles)
watch('src/img/svg/**/*.svg', svgSprites)
watch('src/scripts/**/*.js', scripts)
watch('src/resources/**', resources)
watch('src/styles/**/*.scss', scssStyles)
watch('src/img/*.jpg', images)

exports.clean = clean
exports.styles = styles
exports.scripts = scripts
exports.scssStyles = scssStyles
exports.htmlMinify = htmlMinify
exports.default = series(clean, resources, htmlMinify, scssStyles, svgSprites, images, scripts, fonts, watchFiles)