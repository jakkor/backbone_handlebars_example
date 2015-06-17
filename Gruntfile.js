module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-broccoli');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-http-server');

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
      'http-server': {
        dev: {
            root: 'dist',
            port: 9000,
            host: "0.0.0.0",
            showDir : true,
            autoIndex: true,
            // server default file extension
            ext: "html",
            // run in parallel with other tasks
            runInBackground: false,

            // specify a logger function. By default the requests are
            // sent to stdout.
            logFn: function(req, res, error) { }
        }
    }
    });

    grunt.registerTask('dist', ['clean:dist', 'broccoli:dist:build']);
    grunt.registerTask('default', ['clean:dist', 'broccoli:dev:build']);
    grunt.registerTask('run', ['http-server', 'clean:dist', 'broccoli:dev:build']);
};
