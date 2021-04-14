angular.module("app")
  .controller("exam17Controller", function ($scope) {
   
    $scope.todos = [
      { action: "동영상 녹화(office)", complete: false },
      { action: "AngularJS 복습(home)", complete: false },
      { action: "알마인드(home)", complete: false },
      { action: "퇴근(home)", complete: false },
    ];
  });