app.config(function($routeProvider) {
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


});