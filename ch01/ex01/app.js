/**
 * Building a simple element directive.
 *
 */

angular.module('myApp', [])
	.directive('myDirective', function() {
		return {
			restrict: 'E',
			templateUrl: 'my-template.html'
		};
	});