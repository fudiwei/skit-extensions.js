const gulp = require('gulp');
const gulp$babel = require('gulp-babel'),
    gulp$concat = require('gulp-concat'),
    gulp$eslint = require('gulp-eslint'),
    gulp$rimraf = require('gulp-rimraf'),
    gulp$sourcemaps = require('gulp-sourcemaps'),
    gulp$strip = require('gulp-strip-debug'),
    gulp$uglify = require('gulp-uglify'),
    gulp$util = require('gulp-util');

const ARGS_OUTPUTFILES = gulp$util.env.outputFiles || 'both'; // 指示输出文件类型。可取值 both / min

gulp.task('clean', () => {
	return gulp
		.src(['dist/**/*.js', 'dist/**/*.js.map'], {
            read: false
        })
        .pipe(gulp$rimraf({
            force: true
        }));
});

gulp.task('eslint', () => {
	return gulp
		.src(['src/**/*.js'])
        .pipe(gulp$eslint())
        .pipe(gulp$eslint.format())
        .pipe(gulp$eslint.failAfterError());
});

gulp.task('dist', gulp.series('clean', () => {
    const files = ['src/**/*.js'];
    const babelOptions = {
        presets: [
            [
                '@babel/preset-env', {
                    modules: false,
                    blacklist: ['useStrict']
                }
            ]
        ]
    };

    if ('both' === ARGS_OUTPUTFILES) {
        gulp.src(files)
            .pipe(gulp$concat('index.js'))
            .pipe(gulp$sourcemaps.init())
            .pipe(gulp$babel(babelOptions))
            .pipe(gulp$sourcemaps.write('.'))
            .pipe(gulp.dest('dist'));
    }

	return gulp
		.src(files)
        .pipe(gulp$concat('index.min.js'))
        .pipe(gulp$strip())
        .pipe(gulp$sourcemaps.init())
        .pipe(gulp$babel(babelOptions))
        .pipe(gulp$uglify())
        .pipe(gulp$sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
}));

gulp.task('default', gulp.series('clean', 'eslint', () => {
    gulp.run('dist');
}));