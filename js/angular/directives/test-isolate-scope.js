angular.module('isolateDirectives', [])

.directive('isolateScopeTest', function(){
	return {
		restrict: 'E',
	
		templateUrl: 'js/angular/partials/isolate-scope.test.html'


	};
});