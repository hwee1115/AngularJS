angular.module("app")
  .controller("exam21Controller", function ($scope) {
    //초기 상태 정의
    $scope.user = {
      uid: "",
      uemail: "",
      public: "미공개",
    };

    $scope.cities = ["서울", "대전", "제주"];

    $scope.jobs = [
      {id:1, name:"개발자"},
      {id:2, name:"디자이너"},
      {id:3, name:"PM"}
    ]

    $scope.addUser = () =>{
      console.log($scope.user)
    }
  });