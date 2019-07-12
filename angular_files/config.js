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
  .when("/contact", {
    templateUrl: "contact.html", 
    controller: "contactCtrl"
  });    

  $locationProvider.hashPrefix('!');
  $locationProvider.html5Mode(true);

});