angular.module('myApp', [])
	.directive('myListener', function() {
		return {
			restrict: 'E',
			scope: true,
			link: function(scope, el, attrs) {
				
				scope.sendDown = function() {
					scope.$broadcast('myEvent', {origin: attrs.local});	
				};

				scope.sendUp = function() {
					scope.$emit('myEvent', {origin: attrs.local});
				}

				scope.$on('myEvent', function(event, data) {
					console.log(event.name + ' observed in ' + attrs.local + ' origin from ' + data.origin);
				});

			}
		};
	});