angular.module('assessmentApp').controller('shopCtrl', function($scope, shopService, $stateParams) {
	
	
	
	let getProducts = () => {
		shopService.getProducts().then(function(result){
			// console.log(result.data);
			$scope.products = result.data;
		});
	};
	getProducts();
	
	let getId = () => {
		shopService.getProductDetail($stateParams.id).then(function(result){
			// console.log(result.data);
			$scope.productDetails = result.data;
		});
	};
	
	if ($stateParams.id) {
		getId();
	}
	
	 $scope.display = true;
	
	
	
	
	
});
