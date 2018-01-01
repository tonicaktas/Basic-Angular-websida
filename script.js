var app = angular.module("websidan",['ngRoute']) //ngRoute för att använda routeProvider

// dependeci injection för att skapa route
.config(['$routeProvider',function($routeProvider){
  $routeProvider.
  when('/main',{
    templateUrl:'main.html',
    controller:'MainCtrl'
  }).
  when('/about',{
    templateUrl:'about.html',
    controller:'MainCtrl'
  }).
  when('/services',{
    templateUrl:'services.html',
    controller:'ServicesCtrl'
  }).
  when('/contact',{
    templateUrl:'contact.html',
    controller:'ContactCtrl'
  }).
  otherwise({redirectTo:'/main'})// om index url så hämta main.html
}])
.controller('MainCtrl',['$scope','$http',function($scope, $http){ // controller and dependeci function
  $http.get('services.json').then(function(response){ // hämtar data från json filen
    console.log(response);
    $scope.services = response.data; // gör det tillgängligt i services.html
  });
}])
.controller('ServicesCtrl',['$scope','$http',function($scope, $http){ // controller and dependeci function
  $http.get('services.json').then(function(response){ // hämtar data från json filen
    console.log(response);
    $scope.services = response.data; // gör det tillgängligt i services.html
  });
}])
.controller('ContactCtrl',['$scope','$http',function($scope,$http){ // controller and dependeci function
  $http.get('contact.json').then(function(response){ // hämtar data från json filen
    console.log(response);
    $scope.contact = response.data; // gör det tillgängligt i services.html
  });
}]);
