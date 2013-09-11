/* jshint node: true */

module.exports = function(grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    target: 'dist',
    production: true,
    banner: '/**\n' +
              '* <%= pkg.name %> v<%= pkg.version %>\n' +
              '* Ingression by <%= pkg.author %>\n' +
              '*/\n',
    jqueryCheck: 'if (!jQuery) { throw new Error(\"jQuery is required\") }\n\n',

    // Before generating any new files,
    // remove any previously-created files.
    clean: {
      dist: ['css/ingression.css','css/ingression.min.css','js/ingression.js','js/ingression.min.js']
    },

    jshint: {
      options: {
        jshintrc: 'js/.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      src: {
        src: ['js/ingression.js', 'js/ingression-*.js']
      }
    },

    concat: {
      options: {
        banner: '<%= banner %><%= jqueryCheck %>',
        stripBanners: false
      },
      ingression: {
        src: [
          'js/ingression-*.js'
        ],
        dest: 'js/ingression.js'
      }
    },

    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      ingression: {
        src: ['<%= concat.ingression.dest %>'],
        dest: 'js/ingression.min.js'
      }
    },

    less: {
      ingression: {
        files: {
          'css/ingression.css': 'less/ingression.less'
        }
      },
      min: {
        options: {
          yuicompress: true
        },
        files: {
          'css/ingression.min.css': 'less/ingression.less'
        }
      }
    },

    watch: {
      src: {
        files: '<%= jshint.src.src %>',
        tasks: ['jshint:src', 'concat', 'uglify']
      },
      less: {
        files: 'less/*.less',
        tasks: ['less']
      }
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('build', ['concat', 'uglify', 'less']);

  grunt.registerTask('default', ['clean', 'jshint', 'build']);

  grunt.registerTask('dev', ['default', 'watch']);

  grunt.registerTask('test', ['default']);
};