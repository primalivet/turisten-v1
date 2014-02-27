module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

     concat: {
      dist: {
        src: [
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/fitvids/jquery.fitvids.js',
          'assets/javascripts/application.js'
        ],
        dest: 'assets/build/javascripts/production.js'
      }
    },

    uglify: {
      build: {
        src: 'assets/build/javascripts/production.js',
        dest: 'assets/build/javascripts/production.min.js'
      }
    },

    less: {
      development: {
        options: {
          paths: ['assets/stylesheets']
        },
        files: {
          'assets/build/stylesheets/production.css': 'assets/stylesheets/application.less'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      single_file: {
        src: 'assets/build/stylesheets/production.css',
        dest: 'assets/build/stylesheets/production.css'
      }
    },

    cssmin: {
      combine: {
        files: {
          'assets/build/stylesheets/production.min.css': ['assets/build/stylesheets/production.css']
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: ['assets/javascripts/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
        }
      },
      css: {
        files: ['assets/stylesheets/**/*.less'],
        tasks: ['less', 'autoprefixer', 'cssmin'],
        options: {
          spawn: false
        }
      }
    }


  });

  grunt.loadNpmTasks('grunt-contrib-less'),
  grunt.loadNpmTasks('grunt-contrib-watch'),
  grunt.loadNpmTasks('grunt-contrib-connect'),
  grunt.loadNpmTasks('grunt-contrib-concat'),
  grunt.loadNpmTasks('grunt-contrib-uglify'),
  grunt.loadNpmTasks('grunt-contrib-imagemin'),
  grunt.loadNpmTasks('grunt-contrib-cssmin'),
  grunt.loadNpmTasks('grunt-autoprefixer'),
  grunt.loadNpmTasks('grunt-shell'),

  grunt.registerTask('default', []);
  grunt.registerTask('dev', ['watch']);

};