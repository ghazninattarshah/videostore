module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		jshint: {

			files: [
				'gruntfile.js',
				'public/**/*.js',
				'public/**/*.css',
				'public/**/*.html',
				'app/**/*.js',
				'app/**/*.jade',
				'config/**/*.js'
			]
		},

		watch: {
			files: ['<%= jshint.files %>'],
			tasks: ['jshint']
		}
	});


	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint']);
};