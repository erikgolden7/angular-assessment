angular.module('assessmentApp').directive('productDirective', function() {
	return {
		restrict: "AE",
		templateUrl: "views/product-tmpl.html",
		scope: {
			product: "="
		}
	}
	
});

