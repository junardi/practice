app.controller("homeCtrl", function($scope, $route, $routeParams, $location){
	$scope.title = "Mastermind Technology";  
	$scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
});   


app.controller("aboutCtrl", function($scope, $route, $routeParams, $location){
	$scope.title = "About The Mastermind";  
	$scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
});     


app.controller("contactCtrl", function($scope, $route, $routeParams, $location){
	$scope.title = "Contact Us";   
	$scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
});     


app.controller("routeParamsCtrl", function($scope, $route, $routeParams, $location){
	$scope.title = "Parameters Training";   
	$scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
});




