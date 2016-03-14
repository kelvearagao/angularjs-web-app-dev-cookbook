

angular.module('myApp', [])
	// the element direcitve
	.directive('elementDirective', function($log) {
		return {
			restrict: 'E',
			replace: true,
			template: '<p>Ze template!</p>',
			link: function(scope, el, attr) {
				$log.log(el.html());
				$log.log(attr.someAttr);
			}
		};
	})
	// the attribute direcitve
	.directive('attributeDirective', function($log) {
		return {
			restrict: 'A',
			template: '<p>A attribute template!</p>',
			link: function(scope, el, attr) {
				$log.log(el.html());
				$log.log(attr.attributeDirective);
				$log.log(attr.someAttr);
			}
		};
	})
	// the class direcitve
	.directive('classDirective', function($log) {
		return {
			restrict: 'C',
			template: '<p>A class direcitve</p>',
			link: function(scope, el, attr) {
				$log.log(el.html());
				$log.log(el.hasClass('normal-class'));
				$log.log(attr.classDirective);
				$log.log(attr.someAttr);
			}
		};
	})
	// the comment directive
	.directive('commentDirective', function($log) {
		return {
			restrict: 'M',
			replace: true,
			template: '<p>A comment direcitve</p>',
			link: function(scope, el, attr) {
				$log.log(el.html());
				$log.log(attr.commentDirective);
			}
		};
	});