module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

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
      css: {
        files: ['assets/stylesheets/**/*.less'],
        tasks: ['less', 'cssmin'],
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
  grunt.loadNpmTasks('grunt-shell'),

  grunt.registerTask('default', []);
  grunt.registerTask('dev', ['watch']);

};