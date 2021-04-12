angular.module("app")
.config(function($locationProvider, $routeProvider) {
     console.log("app-config callback(ROUTE)");
     $locationProvider.html5Mode({
         enabled: true,
         requireBase:true
     });

     $routeProvider
     .when("/", {templateUrl: "views/exam01_home.html"})
     .when("/exam02_module_create_find", {templateUrl: "views/exam02_module_create_find.html"})
     .when("/exam03_module_dependency", {templateUrl: "views/exam03_module_dependency.html"})
     .when("/exam04_module_config_run_callback", {templateUrl: "views/exam04_module_config_run_callback.html"})
     .when("/exam05_controller_declaration", {templateUrl: "views/exam05_controller_declaration.html",controller:"exam05Controller"})
     .when("/exam06_scope_property_method", {templateUrl: "views/exam06_scope_property_method.html",controller:"exam06Controller"})
     .otherwise({redirectTo:"/"})
});