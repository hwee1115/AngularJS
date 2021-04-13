angular.module("app")
  .controller("exam11Controller", function($scope) {
    $scope.content = "";

    $scope.setContent = (content)=>{
      $scope.content = content; //외부에서 값받아서 대체
    };
  });