angular.module("app")
  .controller("exam22Controller", function ($scope) {
    $scope.products = [
      {pno:1, name:"사과1", category:"과일1", price:1000.123, expiry:101},
      {pno:2, name:"사과2", category:"과일2", price:2000.56, expiry:102},
      {pno:3, name:"사과3", category:"해산물", price:3000, expiry:103},
      {pno:4, name:"사과4", category:"음료", price:4000, expiry:104},
      {pno:5, name:"사과5", category:"해산물", price:5000, expiry:105},
      {pno:6, name:"사과6", category:"과일6", price:6000, expiry:106},
      {pno:7, name:"사과7", category:"해산물", price:7000, expiry:107},
      {pno:8, name:"사과8", category:"과일", price:8000, expiry:108},
      {pno:9, name:"사과9", category:"음료", price:9000, expiry:109},
      {pno:10, name:"사과10", category:"음료", price:10000, expiry:110}
    ];

    $scope.limitRange = [3,5,7,10];
    $scope.limitVal = "10";

    $scope.getExpiryDate = (days) =>{
      var now = new Date();
      return now.setDate(now.getDate() + days);
    }

    $scope.categoryList = ["전체","과일" , "해산물" , "음료"];
    $scope.categoryVal = "전체";
    $scope.getCategoryVal = () =>{
      return $scope.categoryVal==="전체"?"": $scope.categoryVal
    }

    $scope.checkFiltering = (product) => {
      const result = (product.category === "과일") && (product.price >= 4000);
      return result;
    };
  });