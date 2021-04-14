angular.module("app")
  .controller("exam19Controller", function ($scope) {
    $scope.imageName = "photo1.jpg"
    $scope.handleBtnClick= (event) =>{
      if($scope.imageName === "photo1.jpg"){
        $scope.imageName = "photo2.jpg";
      }else{
        $scope.imageName = "photo1.jpg";
      }
    }

    $scope.todos = [
      { action: "동영상 녹화(office)", complete: false },
      { action: "AngularJS 복습(home)", complete: false },
      { action: "알마인드(home)", complete: false },
      { action: "퇴근(home)", complete: false },
    ];

    $scope.handelMouseEvent = (event) =>{
      console.log(event.type);
      console.log(event.target);
      if(event.type==="mouseenter"){
        $(event.target).parent("tr").css("background-color","#e9ecef");
      }else{
        $(event.target).parent("tr").css("background-color","#ffffff");
      }
    }
  });