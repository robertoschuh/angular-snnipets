angular.module('appSnippets', []).

.directive('isolateScopeTest', function(){
	return {
		restrict: 'E',
		scope: {
			//title: "@" // passes in a string.
			title: "=" // two-way binds an object.
		},
		templateUrl: 'js/angular/partials/isolate-scope.test.html',
		controller: function(){

				scope.data.title = 'Isolate demo';
				scope.data.description = 'Los scope isolates pueden ser muy útiles';

		},
	

	};
})