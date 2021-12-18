const {src, dest, watch} = require('gulp');
const minifyCss = require('gulp-clean-css')
const concat = require('gulp-concat')
const cssFiles = [ './BetIBC/css/ignite/ignite.min.css', './BetIBC/css/ignite/pagination.css', './BetIBC/css/ignite/lightbox.css', './BetIBC/css/ignite/flag-icon.min.css', './BetIBC/css/ignite/jquery.datetimepicker.css', './BetIBC/css/ignite/main.css', './BetIBC/css/ignite/adi.css', './BetIBC/css/ignite/bootstrap-datetimepicker.min.css', './BetIBC/css/ignite/responsive.css']
const bundleCss = () => {
    return src(cssFiles)
        .pipe(minifyCss())
        .pipe(concat('bundle.css'))
        .pipe(dest('./BetIBC/css/dist'));
};

const devWatch = () => {
  watch('./BetIBC/css/ignite/*.css')
}

exports.bundleCss = bundleCss;
exports.devWatch = devWatch;
