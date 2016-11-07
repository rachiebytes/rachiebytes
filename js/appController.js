controllersModule.controller('appCtrl', ['$scope', '$location', '$window', 
	function($scope, $location, $window) {
		$('[data-toggle="tooltip"]').tooltip();

		$scope.$on('$viewContentLoaded' , function(event) {
			// console.log("Pushing url to google analytics:", $location.url());
			$window.ga('send', 'pageview', { page: $location.url() })
		});

		$scope.blogList = [
			{
				'url': '#/tech/python/jsonschemasanitizer',
				'title': 'JSON Schema Sanitizer',
				'tags': ['python']
			},
			{
				'url': '#/tech/osx/filepermissions',
			 	'title': 'OS X File Permissions',
			 	'tags': ['osx']
			},
			{
				'url': '#/tech/android/dialogbug',
				'title': 'Android Studio Dialog Bug',
				'tags': ['android']
			},
			{
				'url': '#/tech/osx/keyboardshortcuts',
				'title': 'MAC Keyboard Shortcuts',
				'tags': ['osx']
			},
			{	'url': '#/tech/courses/objectorientedprogramming',
				'title': 'Object Oriented Programming - UC San Diego'
			},
			{
				'url': '#/tech/computerscience',
				'title': 'Computer Science Program'
			}
		]
	}
]);