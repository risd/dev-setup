(function () {
    'use strict';
})();

module.exports = function(grunt) {

    // ----------------------------------------------------------
    // WARNING, BRAVE DEVELOPER
    // ----------------------------------------------------------
    // Webhook allows you to use local grunt tasks and files.
    // However, these tasks are ONLY RUN LOCALLY and not when
    // your live site needs to be rebuilt. This means you should
    // only use grunt for pre-processing tasks like building
    // Sass, less or coffescript files, not for reading things
    // from your templates and making dynamic changes during
    // the build process. Doing so will cause your live site
    // not to regerate.
    //
    // You have been warned!
    grunt.initConfig({
        pkc: grunt.file.readJSON('package.json'),

        // When files change, run the tasks above.
        // Along with the webhook defined tasks of
        // building pages, and reloading assets.
        watch: {
            sass: {
                files: ['scss/**/*.scss'],
                tasks: ['sass',
                'autoprefixer',
                'build-static']
            },
            browserify: {
                files: ['script/src/**/*.js'],
                tasks: ['jshint',
                'browserify:client',
                'build-static']
            },
            concat: {
                files: ['<%= concat.dist.src %>'],
                tasks: ['concat',
                        'build-static']
            }
        },


        // Build scss to css
        sass: {
            dev: {
                options: {
                    // WebHook will minifiy, so we don't have to here
                    style: 'expanded'
                },
                files: [{
                    expand: 'true',
                    cwd: 'scss',
                    src: ['site.scss'],
                    dest: 'static/css',
                    ext: '.css'
                },{
                    expand: 'true',
                    cwd: 'scss',
                    src: ['components/cms-custom.scss'],
                    dest: 'static/css',
                    ext: '.css',
                    flatten: true
                }]
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 9'],
                map: true
            },
            dist: {
                src: 'static/css/site.css',
                dest: 'static/css/site.css'
            }
        },


        // Detect errors and enforce consistency in javascript
        jshint: {
            files: ['Gruntfile.js',
            'script/src/**/*.js',
            'script/test/**/*.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    require: true,
                    global: true,
                    window: true,
                    document: true,
                    $f: true
                },
                curly: true,
                eqeqeq: true,
                immed: true,
                indent: 4,
                noarg: true,
                nonbsp: true,
                quotmark: 'single',
                undef: true,
                unused: true,
                force: true
            }
        },

        // Build process for javascript
        browserify: {
            client: {
                src: ['script/src/index.js'],
                dest: 'static/javascript/site.js'
            }
        },

        concat: {
            options: {
                separator: '\n\n'
            },
            dist: {
                src: ['script/lib/**/*.js'],
                dest: 'static/javascript/lib.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-browserify');

    // NEVER REMOVE THESE LINES, OR ELSE YOUR PROJECT MAY NOT WORK
    require('./options/generatorOptions.js')(grunt);
    grunt.loadTasks('tasks');
};
