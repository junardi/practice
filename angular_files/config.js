app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "main.html", 
    controller: "homeCtrl"
  })
  .when("/about", {
    templateUrl: "about.html", 
    controller: "aboutCtrl"
  })   
  .when("/about/:paramName", {
    templateUrl: "params.html", 
    controller: "routeParamsCtrl"
  })   
  .when("/about/:bookId/ch/:chapterId", {
    templateUrl: "params.html", 
    controller: "routeParamsCtrl"
  })
  .when("/contact", {
    templateUrl: "contact.html", 
    controller: "contactCtrl"
  });    

  $locationProvider.hashPrefix('!');
  $locationProvider.html5Mode(true);

});