module.exports = function(grunt) {  
  grunt.initConfig({    
    pkg: grunt.file.readJSON('package.json'),
    watch: {      
      less: {
        files: ['style/*.less'],
        tasks: ['less'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    }, 
    less: {
      dev: {
        options: {
          paths: ["style"],
        },
        files: [
          {            
            expand: true,
            src: ['style/*.less'],
            ext: '.css'
          }
        ]
      },
    },
    cssmin: {      
      add_banner: {
        options: {
          banner: '/* Autores: Byron Arias - Alex Zelaya - René Cortez */'
        },
        files: {
          'style/style.css': ['style/style.css']
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('dev', ['less:dev', 'cssmin', 'watch']);
  grunt.registerTask('default', ['dev']);
};