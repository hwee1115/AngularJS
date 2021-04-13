angular.module("app")
.config(function($locationProvider, $routeProvider) {
     console.log("app-config callback(ROUTE)");
     //$locationProvider.html5Mode({
    //     enabled: true,
    //    requireBase:true
     //});

     $routeProvider
     .when("/", {templateUrl: "views/exam01_home.html"})
     .when("/exam02_module_create_find", {templateUrl: "views/exam02_module_create_find.html"})
     .when("/exam03_module_dependency", {templateUrl: "views/exam03_module_dependency.html"})
     .when("/exam04_module_config_run_callback", {templateUrl: "views/exam04_module_config_run_callback.html"})
     .when("/exam05_controller_declaration", {templateUrl: "views/exam05_controller_declaration.html",controller:"exam05Controller"})
     .when("/exam06_scope_property_method", {templateUrl: "views/exam06_scope_property_method.html",controller:"exam06Controller"})
     .when("/exam07_scope_implicit_property", {templateUrl: "views/exam07_scope_implicit_property.html",controller:"exam07Controller"})
     .when("/exam08_rootscope_nestedcontroller", {templateUrl: "views/exam08_rootscope_nestedcontroller.html",controller:"exam08Controller"})
     .when("/exam09_scope_broadcast", {templateUrl: "views/exam09_scope_broadcast.html",controller:"exam09Controller"})
     .when("/exam10_scope_watch", {templateUrl: "views/exam10_scope_watch.html",controller:"exam10Controller"})
     .when("/exam11_outside_to_scope", {templateUrl: "views/exam11_outside_to_scope.html",controller:"exam11Controller"})
     .when("/exam12_one_way_binding", {templateUrl: "views/exam12_one_way_binding.html",controller:"exam12Controller"})
     .when("/exam13_two_way_binding", {templateUrl: "views/exam13_two_way_binding.html",controller:"exam13Controller"})
     .otherwise({redirectTo:"/"})
});