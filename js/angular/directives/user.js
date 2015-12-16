/*
Ejemplo usando this.
de esta forma cargamos los datos en this que es el controlador en si,
luego accedemos desde el partial con dataCtrl.propiedad.
En el index.html NO tenemos que declarar ng-controller!!!.
*/
angular.module('appSnippets', ['appSnippetsController'])
.directive('userData', function(){
	return {
		restrict: 'E',
		templateUrl: 'js/angular/partials/user-data.html',
		controller: function(){
				this.username = 'Pepe';
				this.surname = 'Garcia';
				this.age = '45';
		},
		// Necesitamos el alias para llamar a los datos dentro
		// del partial es decir: dataCtrl.username por ejm.
		controllerAs: 'dataCtrl'
		
	};
})

/*
* Segundo ejemplo usando $scope.
*/
.directive('userDataScope', function(){
	return {
		restrict: 'E',
		templateUrl: 'js/angular/partials/user-data-scope.html',		
		controller: function($scope){
				$scope.username = 'Pepe';
				$scope.surname = 'Garcia';
				$scope.age = '45';
		}
		// Aquí no necesitamos el controllerAs
	};
})

/**
* Terce ejemplo llamando a un controlador existente.
*/
.directive('userDataOutsideCtrl', function(){
	return {
		restrict: 'E',
		templateUrl: 'js/angular/partials/user-data-outside-ctrl.html',
		controller: 'UserDataController'
		//controllerAs: 'dataOutsideCtrl'
	};
});