/*
Ejemplo usando this.
de esta forma cargamos los datos en this que es el controlador en si,
luego accedemos desde el partial con dataCtrl.propiedad.
En el index.html NO tenemos que declarar ng-controller!!!.
*/
angular.module('appSnippets', [])
/**
* 'E' - only matches element name
*/
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
'E' - only matches element name
Si añadimos los datos directamente al SCOPE , no necesitamos el contrllerAs (ALIAS)
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
* Third example, calling 
* restrict: 'A', - only matches attribute name
*/
.directive('userDataAttr', function(){
	return {
		restrict: 'A',
		templateUrl: 'js/angular/partials/user-data-attrb-directive-ctrl.html',
		controller: function($scope){
				$scope.username = 'Amparitos';
				$scope.surname = 'Lopez';
				$scope.age = '25';
		}
	};
})

/**
* Ejemplo para entender mejor el SCOPE
 Tenemos que pasarle un isolate scope (aislado)
 es decir : su propio scope a la directiva, para que no herede del padre
 y el incremento de num funcione correctamente.
*/
.directive('incrementNum', function(){
	var num = 1;
	return {
		restrict: 'E',
		templateUrl: 'js/angular/partials/incrementNum.html',
		// Tenemos que pasarle un isolate (aislado) scope, 
		//le damos a la directiva su propio scope
		scope: {}, 

		controller: function($scope){
			$scope.header = 'My title '+num++;
		},
		
	};
});
/**
* Cuarto ejemplo llamando a un controlador existente.
*/
/* .directive('userDataOutsideCtrl', function(){
	return {
		restrict: 'E',
		templateUrl: 'js/angular/partials/user-data-outside-ctrl.html',
		controller: 'UserDataController'
		//controllerAs: 'dataOutsideCtrl'
	};
}); */