angular.module('MyApp', ['ngRoute'])
.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/',
    {
        redirectTo: function()
        {
            return '/Home';
        }
    })
    .when('/Home',
    {
        templateUrl: '/Templates/Home.html',
        controller: 'homeController'
    })
    .when('/About',
    {
        templateUrl: '/Templates/About.html',
        controller: 'aboutController'
    })
    .when('/Order/:id',
    {
        templateUrl: '/Templates/Order.html',
        controller: 'orderController'
    })
    //.otherWise
    //({
    //    templateUrl: 'Templates/Error.html',
    //    controller : 'errorController'
    //})
})
.controller('homeController', function ($scope) {
    $scope.message = "Hi!! This is home page!!";
})
.controller('aboutController', function ($scope) {
    $scope.message = "Hi!! This is about page!!";
})
.controller('orderController', function ($scope,$routeParams) {
    $scope.message = "Hi!! the id of order is " + $routeParams.id;
})
.controller('errorController', function ($scope) {
    $scope.message = "Error 404!!!";
})