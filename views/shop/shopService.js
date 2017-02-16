angular.module('assessmentApp').service('shopService', function($http, $q) {
	
	this.getProducts = () => {
		return $http({
			method: 'GET',
			url: 'http://practiceapi.devmounta.in/products'
		})
	}
	
	this.getProductDetail = (id) => {
		return $http({
			method: 'GET',
			url: 'http://practiceapi.devmounta.in/products/' + id
		})
	}
	
});
