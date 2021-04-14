angular.module("app")
  .controller("exam16Controller", function ($scope) {
    $scope.view = {
      modes:["none","table", 'list'],
      mode: "none"
    };

    $scope.todos = [
      { action: "동영상 녹화(office)", complete: false },
      { action: "AngularJS 복습(home)", complete: false },
      { action: "알마인드(home)", complete: false },
      { action: "퇴근(home)", complete: false },
    ];
  });