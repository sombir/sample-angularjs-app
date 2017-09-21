var app = angular.module('myapp', ['ui.router']);

/**
 * Configure the Routes
 */
 
 
app.config(function($stateProvider, $urlRouterProvider) {    
	$urlRouterProvider.otherwise('/');
	$stateProvider     
	//Home  
	.state('/', {
		url: '/',
		templateUrl: 'partials/home.html',
		controller: 'PageCtrl'
	})
	//about  
	.state('about', {
		url: '/about',
		templateUrl: 'partials/about.html',
		controller: 'PageCtrl'
	}) 	
	//services
	.state('services', {
		url: '/services',
		templateUrl: 'partials/services.html',
		controller: 'PageCtrl'
	})  	
	//contact
	.state('contact', {
		url: '/contact',
		templateUrl: 'partials/contact.html',
		controller: 'PageCtrl'
	})  
	//blog
	.state('blog', {
		url: '/blog',
		templateUrl: 'partials/blog.html',
		controller: 'BlogCtrl'
	})   
	//blog detail
	.state('blog/:blogId', {
		url: '/blog/:blogId',
		templateUrl: 'partials/blog_item.html',
		controller: 'PageCtrl'
	})  
	//404
	.state('404', {
		url: '/404',
		templateUrl: 'partials/404.html',
		controller: 'PageCtrl'
	}) 
}); 

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});