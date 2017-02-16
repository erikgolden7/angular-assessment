angular.module('assessmentApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: './views/home/home.html',
		controller: 'homeCtrl'
	});
	$stateProvider
	.state('shop', {
		url: '/shop',
		templateUrl: './views/shop/shop.html',
		controller: 'shopCtrl'
	});
	$stateProvider
	.state('about', {
		url: '/about',
		templateUrl: './views/about/about.html',
		controller: 'aboutCtrl'
	});
	$stateProvider
	.state('blog', {
		url: '/blog',
		templateUrl: './views/blog/blog.html',
		controller: 'blogCtrl'
	});
	$stateProvider
	.state('detail', {
		url: '/detail/:id',
		templateUrl: './views/product-details.html',
		controller: 'shopCtrl'
	})
});