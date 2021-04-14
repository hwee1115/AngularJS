angular.module("app")
  .controller("exam20Controller", function ($scope,$timeout) {
    $scope.pageUrl = "/#!/exam19_event_directive";
    $timeout(()=>{
      $scope.imgUrl1 = "resources/img/photo7.jpg";
      $scope.imgUr2 = "resources/img/photo8.jpg";
    },5000)
   
    
  });