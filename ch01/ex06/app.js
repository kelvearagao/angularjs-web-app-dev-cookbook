angular.module('myApp', [])
	.directive('parentDirective', function($log) {
		return {
			controller: function() {
				this.identify = function() {
					$log.log('Parent!');
				};
			}
		};
	})
	.directive('siblingDirective', function($log) {
		return {
			controller: function() {
				this.identify = function() {
					$log.log('Sibling');
				};
			}
		};
	})
	.directive('childDirective', function($log) {
		return {
			require: ['^siblingDirective', '^parentDirective'],
			link: function(scope, el, attrs, ctrls) {
				ctrls[0].identify();
				ctrls[1].identify();
			}
		}
	});