angular.module("app")
  .controller("exam24Controller", function ($scope,$window,$document,$interval,$location,$routeParams, $anchorScroll,$log) {
    $scope.openAlert = () =>{
      $window.alert("알림 메시지...");
    };
    $scope.findDom = () =>{
      //$("#content").html("hello,angularjs");
      $document.find("#content").html("hello,angularjs");
    };
    let timerId;
    $scope.startTime = () =>{
     timerId= $interval(()=>{
        var now = new Date();
        $document.find("#content").html(now.toLocaleDateString()+ " " + now.toLocaleTimeString())
      },1000)
    }

    $scope.endTime = () =>{
      if(timerId){
        $interval.cancel(timerId);
      }
    };

    $scope.changeUrl1 = (pageNo) =>{
      const path =`/exam24_bulitin_service/boards?pageNo=${pageNo}`;
      $location.url(path);
    }

    $scope.changeUrl2 = (bno,pageNo) =>{
      const path =`/exam24_bulitin_service/boards/${bno}?pageNo=${pageNo}`;
      $location.url(path);
    }

    $scope.$on("$locationChangeSuccess",()=>{
      const currentUrl = $location.url();//getter의역할
      console.log(" $location.url():", $location.url());
      console.log(" $location.path():", $location.path());
      console.log(" $location.search():", $location.search());
      console.log(" $location.hash():", $location.hash());
      console.log(" $routeParams():", $routeParams);
      const bno =$routeParams.bno;
      const pageNo = $routeParams.pageNo;
    });

    $scope.items = [];
    for(var i =0; i<50; i++){
      $scope.items.push("Item " + i);
    }

    $scope.show = (id)=>{
      $anchorScroll(id);
    }

    $scope.handlePrintLog = () =>{
      $log.error("error Message");
      $log.warn("warn Message");
      $log.info("info Message");
      $log.debug("debug Message");
    }
  });