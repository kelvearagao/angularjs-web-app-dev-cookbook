angular.module('myApp', [])
	.directive('vectorText', function ($document) {
		return {
			template: '<span>{{ headind }}</span>',
			link: function (scope, el, attrs) {
				el.css({
					'float': 'left',
					'padding': attrs.buffer+"px"
				});

				scope.headind = '';

				$document.on('mousemove', function (event) {

					scope.$apply(function () {
						if (event.pageY < 300) {
							scope.headind = 'N';
						} else {
							scope.headind = 'S';
						}

						if (event.pageX < 300)
						{
							scope.headind += 'W';
						}
						else
						{
							scope.headind += 'E';
						}
					});

				});
			}
		};
	});