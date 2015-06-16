module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-broccoli');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
      broccoli: {
        dist: {
          dest: 'dist',
          config: 'Brocfile.js',
          env: 'production'
        },
        dev: {
          dest: 'dist',
          config: 'Brocfile.js'
        }
      },
      clean: {
        dist: ['./tmp']
      },
    });

    grunt.registerTask('dist', ['clean:dist', 'broccoli:dist:build']);
    grunt.registerTask('default', ['clean:dist', 'broccoli:dev:build']);
};
